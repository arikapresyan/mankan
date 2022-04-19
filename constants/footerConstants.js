const IconLocation = '/images/icons/footer_icons/place-localizer.png';
const IconAbout = '/images/icons/footer_icons/leaflet.png';
const IconPhone = '/images/icons/footer_icons/call.png';
const IconSuggestion = '/images/icons/footer_icons/help.png';
const IconBonus = '/images/icons/footer_icons/bonus.png';
const IconWork = '/images/icons/footer_icons/work.png';
const IconSecurity = '/images/icons/footer_icons/security.png';

// “​Վճարման եղանակներ​”
// “​VISA​”,
// “​MasterCard​”,
// “​ARCA​”,
// “​Կանխիկ​”,
// “​Կուտակվածմիավորներով​”


export const getFooterContent = (messages, {
  openSuggestionsModal,
  openFidBackModal,
}) => [
  {
    link: '/about-us',
    text: messages['local.about_us'],
    icon: IconAbout,
  },
  {
    link: '/shops',
    text: messages['local.our_addresses'],
    icon: IconLocation,
  },
  {
    link: '/using-rules',
    text: messages['local.using-rules'],
    icon: IconSecurity,
  },
  {
    link: '/bonus-promo-code',
    text: messages['local.bonus-and-promo-code'],
    icon: IconBonus,
  },
  {
    link: '/vacancy',
    text: messages['local.vacancies'],
    icon: IconWork,
  },
  {
    handleClick: openSuggestionsModal,
    text: `${messages['local.suggestion']} / ${messages['local.complaint']}`,
    icon: IconSuggestion,
  },
  {
    handleClick: openFidBackModal,
    text: messages['local.feedback'],
    icon: IconPhone,
  },

];
export const getPaymentMethods = (messages) => ([
  'VISA',
  'MasterCard',
  'ARCA',
  messages['local.cash'],
  messages['local.using-bonus'],
]);
