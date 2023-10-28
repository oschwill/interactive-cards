let returnValidate;

export const validateForm = (cardData, setErrorHandler) => {
  returnValidate = true;

  // check if is correct format
  if (
    isNaN(cardData.cardNumber.replace(/ /g, '')) ||
    cardData.cardNumber.replace(/ /g, '').length < 16 ||
    cardData.cardNumber.replace(/ /g, '').length > 16
  ) {
    setErrorMessages(setErrorHandler, null, 'Wrong format, numbers only', 'cardNumber');
  }

  if (
    cardData.expMonth < 1 ||
    cardData.expMonth > 12 ||
    isNaN(cardData.expMonth) ||
    cardData.expMonth.length < 2
  ) {
    setErrorMessages(setErrorHandler, null, 'Wrong format, e.g. 01', 'expMonth');
  }

  if (isNaN(cardData.expYear) || cardData.expYear.length < 2) {
    setErrorMessages(setErrorHandler, null, 'Wrong format, e.g. 12', 'expYear');
  }

  if (cardData.cvc.length > 3 || cardData.cvc.length < 3 || isNaN(cardData.cvc)) {
    setErrorMessages(setErrorHandler, null, 'Wrong format, only 3 Numbers', 'cvc');
  }

  // Check if blank
  if (cardData.cardHolder === '' || cardData.cardHolder === null) {
    setErrorMessages(setErrorHandler, "Can't be blank", null, 'cardHolder');
  }
  if (cardData.cardNumber === '' || cardData.cardNumber === null) {
    console.log('first');
    setErrorMessages(setErrorHandler, "Can't be blank", null, 'cardNumber');
  }
  if (cardData.expMonth === '' || cardData.expMonth === null) {
    setErrorMessages(setErrorHandler, "Can't be blank", null, 'expMonth');
  }
  if (cardData.expYear === '' || cardData.expYear === null) {
    setErrorMessages(setErrorHandler, "Can't be blank", null, 'expYear');
  }
  if (cardData.cvc === '' || cardData.cvc === null) {
    setErrorMessages(setErrorHandler, "Can't be blank", null, 'cvc');
  }

  return returnValidate;
};

const setErrorMessages = (setErrorHandler, emptyError, formatError, index) => {
  setErrorHandler((currentError) => ({
    ...currentError,
    [index]: {
      emptyMsg: emptyError,
      wrongFormatMsg: formatError,
      isError: true,
    },
  }));

  if (returnValidate) {
    returnValidate = !returnValidate;
  }
};
