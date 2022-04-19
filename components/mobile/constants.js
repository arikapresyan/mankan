// import MenuIcon5 from '../../assets/images/category/mobile/icon5.png';
// import MenuIcon1 from '../../assets/images/category/mobile/icon1.png';
// import MenuIcon2 from '../../assets/images/category/mobile/icon2.png';
// import MenuIcon3 from '../../assets/images/category/mobile/icon3.png';
// import MenuIcon4 from '../../assets/images/category/mobile/icon4.png';

export const getMobileMenuLinks = () => [
  {
    title: 'local.general_assortment',
    icon: '/images/category/mobile/icon5.png',
    name: '',
    href: '',
  }, {
    title: 'local.to_boys',
    icon: '/images/category/mobile/icon1.png',
    name: 'boys',
    href: '?gender=BOY',

  }, {
    title: 'local.to_girls',
    icon: '/images/category/mobile/icon2.png',
    name: 'girls',
    href: '?gender=GIRL',

  }, {
    title: 'local.to_infants',
    icon: '/images/category/mobile/icon3.png',
    name: 'infants',
    href: '?age=1',

  }, {
    title: 'local.own_products',
    icon: '/images/category/mobile/icon4.png',
    name: 'ownProduct',
    href: '?brand=1',
  },
];
