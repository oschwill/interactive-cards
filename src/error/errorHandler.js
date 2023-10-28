export const validateForm = (cardData, setErrorHandler) => {
  // Check if blank
  if (cardData.cardHolder === '' || cardData.cardHolder === null) {
    setErrorMessages(setErrorHandler, "Can't be blank", null, 'cardHolder');
  }
  if (cardData.cardNumber === '' || cardData.cardNumber === null) {
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

  // check if is correct format
  if (isNaN(cardData.cardNumber.replace(/ /g, ''))) {
    setErrorMessages(setErrorHandler, null, 'Wrong format, numbers only', 'cardNumber');
  }

  if (cardData.expMonth < 1 || cardData.expMonth > 12 || isNaN(cardData.expMonth)) {
    setErrorMessages(setErrorHandler, null, 'Wrong format, numbers only', 'expMonth');
  }

  if (cardData.expYear < 1 || cardData.expYear > 12 || isNaN(cardData.expYear)) {
    setErrorMessages(setErrorHandler, null, 'Wrong format, numbers only', 'expYear');
  }

  // console.log(errorHandler);
};

const setErrorMessages = (setErrorHandler, emptyError, formatError, index) => {
  setErrorHandler((currentError) => ({
    ...currentError,
    [index]: {
      emptyMsg: emptyError,
      wrongFormatMsg: formatError,
    },
  }));
};
