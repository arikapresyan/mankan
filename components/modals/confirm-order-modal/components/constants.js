
export const getInitialValues = (user) => ({
  firstName: user.firstName,
  lastName: user.lastName,
  phone: user.phone,
  email: user.email,
  street: user?.deliveryAddress?.street,
  house: user?.deliveryAddress?.building,
  entry: user?.deliveryAddress?.entry,
  deliveryPeriod: '',
  deliveryPeriodString: '',
  method: 1,
});

export const paymentTypes = {
  1: 'non-cash',
  2: 'cash',
  3: 'bonus',
};
export const MIN_TOTAL = 4000;
