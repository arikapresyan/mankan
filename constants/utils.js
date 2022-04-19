const regex = {
  name: /^\p{L}+$/u,
  string: /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\"|\"|\;|\:|[0-9]/g,
  // phone: /^[\+]?[0-9\s]*$/im,
  phone: /^[\+]?[(]?[0-9]+$/i,
  email: /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/,
};

function setLocalStorageObj(name, obj) {
  localStorage.setItem(name, JSON.stringify(obj));
}

function getLocalStorageObj(name) {
  return JSON.parse(localStorage.getItem(name));
}
function removeLocalStorageObj(name) {
  return localStorage.removeItem(name);
}

const getProductSizeFromObj = (size) => (size && `${size.height ? `${size.height} x` : ''}
 ${size.length ? `${size.length} x` : ''}
 ${size.width ? `${size.width}` : ''}`);

const getProductBoxSize = (boxSize) => {
  if (!boxSize) return null;
  const { width, height, length } = boxSize;
  if (!width && !height && !length) return null;
  return `${height ? `${height} x` : ''} ${length ? `${length} x` : ''} ${width || '-'}`;
};

const getProductBrand = (brand) => brand && brand[0] && brand[0].name;

const getBonus = (price, percent, count) => Math.ceil(count * (+price * (+percent / 100)));

const getProductAge = (minAge, maxAge, messages) => {
  if (maxAge > 8) maxAge = '8+';
  if (minAge === 8) return `8+ ${messages ? messages['local.years'] : ''}`;
  return `${minAge} - ${maxAge} ${messages ? messages['local.years'] : ''}`;
};

const getProductBattery = (accessories) => {
  if (accessories && accessories.length) {
    return accessories.find(({
      ProductAccessoriesMap:
              { type: accessoryType },
    }) => accessoryType === 'battery');
  }
  return null;
};

const addToCartObj = ({
  product, count, battery, hasBattery,
}) => {
  let newCount = battery?.ProductAccessoriesMap?.count * count;
  const maxCount = battery?.xmlCount;
  const batteryNeededCunt = battery?.ProductAccessoriesMap?.count * count;
  const basket = getLocalStorageObj('cart');
  // const productIn = basket?.[product.id];
  const batteryInBasketCount = basket?.[battery?.id]?.count || 0;

  if (hasBattery) {
    const plusCount = batteryInBasketCount + batteryNeededCunt;

    if (maxCount < plusCount && plusCount < 10) {
      newCount = maxCount - batteryInBasketCount;
    } else if (plusCount > 10) {
      newCount = 10 - batteryInBasketCount;
    }
  }
  return ({
    [product.id]: {
      id: product.id, count, status: true, ...(hasBattery ? { batteryId: battery.id } : {}),
    },
    ...(hasBattery ? {
      [battery.id]: {
        id: battery.id,
        count: newCount,
        status: true,
        type: 'battery',
      },
    } : {}),
  });
};

const getTooltipTexts = (msg) => ({
  bonusText: msg['local.sign_up_for_bonus'],
  promoText: msg['local.follow_us_for_promo'],
});

const createObjectArrayFromObject = (object, callback, limit) => {
  const keys = Object.keys(object);
  const { length } = keys;
  const arr = [];
  const maxItems = length > limit ? limit : length;
  keys.forEach((key, index) => {
    if (index < maxItems) {
      arr.push(callback(object[key]));
    }
  });
  return arr;
};

const C_TOKEN = 'mnktkn';

export {
  regex,
  setLocalStorageObj,
  getLocalStorageObj,
  removeLocalStorageObj,
  getProductSizeFromObj,
  getBonus,
  getProductBrand,
  getProductAge,
  getProductBattery,
  addToCartObj,
  createObjectArrayFromObject,
  C_TOKEN,
  getTooltipTexts,
  getProductBoxSize,
};
