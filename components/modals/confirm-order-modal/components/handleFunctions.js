
const addZeroIfOneNum = (str) => (str.length === 1 ? `0${str}` : str);

export const sortDatesByNumArray = (days, newCurrantDate) => {
  let today = new Date(newCurrantDate).getDay();

  if (today === 0) today = 7;

  const sortAvailableDates = [];
  const todayIndex = days.indexOf(today);

  if (todayIndex !== -1) {
    sortAvailableDates.push(...days.slice(todayIndex, days.length), ...days.slice(0, todayIndex));
  } else {
    let pivotIndex = null;
    for (let i = 0; i < days.length; i++) {
      if (days[i] > today) {
        pivotIndex = i;
        break;
      }
    }
    if (!pivotIndex) pivotIndex = 0;
    sortAvailableDates.push(...days.slice(pivotIndex, days.length), ...days.slice(0, pivotIndex));
  }
  const datesArray = [];
  sortAvailableDates.forEach((day) => {
    let daysAfter = 0;
    if (day > today) {
      daysAfter = (day - today);
    } else if (day < today) {
      daysAfter = (day + 7) - today;
    }

    datesArray.push(new Date(new Date(newCurrantDate).getTime()
      + (daysAfter * (24 * 60 * 60 * 1000))));
  });


  return datesArray;
};

function getWeekString(today, otherDay, formatDate) {
  let str = '';

  const date = formatDate(new Date(otherDay), {
    year: 'numeric',
    day: 'numeric',
    month: 'numeric',
  });

  const strArr = date.split('/');
  str = `${addZeroIfOneNum(strArr[1])}.${addZeroIfOneNum(strArr[0])}.${strArr[2]}`;
  // }

  return str;
}
function transformTime(number) {
  return (`${number}`).length === 1 ? `0${number}` : number;
}

function getTime(startDate, endDate) {
  const start = `${transformTime(new Date(startDate).getHours())}:${transformTime(new Date(startDate).getMinutes())}`;
  const end = `${transformTime(new Date(endDate).getHours())}:${transformTime(new Date(endDate).getMinutes())}`;
  return `${start}-${end}`;
}

function setDateTime(date, start) {
  let currentDate = new Date(date);
  const min = new Date(start).getMinutes();
  const hours = new Date(start).getHours();
  currentDate = new Date(currentDate.setMinutes(min));
  currentDate = new Date(currentDate.setHours(hours));
  return new Date(
    currentDate,
  );
}
export const getStringFromDates = (dates, dateInfo, formatDate, newCurrantDate) => {


  const res = sortDatesByNumArray(dates, newCurrantDate).map((date) => {
    const timesArray = [];
    for (let i = 0; i < 3; i++) {
      if (!dateInfo.time[i]) break;
      const nowPlusHour = new Date(newCurrantDate).setHours(newCurrantDate.getHours() + 1);
      const dataBaseTime = new Date(new Date(date)
        .setHours(new Date(dateInfo.time[i].start).getHours()))
        .setMinutes(new Date(dateInfo.time[i].start).getMinutes());


      if (+nowPlusHour
        < +dataBaseTime) {
        timesArray.push({
          text: `${getWeekString(new Date(newCurrantDate), date, formatDate)} ${getTime(dateInfo.time[i].start, dateInfo.time[i].end)}`,
          date: setDateTime(date, new Date(dateInfo.time[i].start)),
        });
      }
    }
    return timesArray;
  });
  const newRes = [];
  res.forEach((r) => {
    newRes.push(...r);
  });

  return newRes;
};
