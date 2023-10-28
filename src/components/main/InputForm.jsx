import PropTypes from 'prop-types';
/* CSS */
import './InputForm.css';

const InputForm = ({ cardData, onSetCardData, onHandleSubmitForm, errorHandler }) => {
  const checkCardNumber = (cardNumber) => {
    if (cardNumber.replace(/ /g, '').length > 16) {
      return;
    }

    // cardNumber = cardNumber
    //   .replace(/[^\dA-Z]/g, '')
    //   .replace(/(.{4})/g, '$1 ')
    //   .trim();

    onSetCardData({
      ...cardData,
      cardNumber: cardNumber,
    });
  };

  return (
    <div className="input">
      <form className="form" onSubmit={onHandleSubmitForm}>
        <div className="cardholder">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            className=""
            type="text"
            id="name"
            placeholder="e.g. Jane Appleseed"
            value={cardData.cardHolder}
            onChange={(e) => {
              if (e.target.value.length > 35) {
                return;
              }

              onSetCardData({
                ...cardData,
                cardHolder: e.target.value,
              });
            }}
          />
          {errorHandler.cardHolder && (
            <span className="error-font">
              {(errorHandler.cardHolder.emptyMsg && errorHandler.cardHolder.emptyMsg) ||
                (errorHandler.cardHolder.wrongFormatMsg && errorHandler.cardHolder.wrongFormatMsg)}
            </span>
          )}
        </div>
        <div className="card-number">
          <label htmlFor="number">CARD NUMBER</label>
          <input
            className=""
            type="text"
            id="number"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardData.cardNumber}
            onChange={(e) => checkCardNumber(e.target.value)}
          />
          {errorHandler.cardNumber && (
            <span className="error-font">
              {(errorHandler.cardNumber.emptyMsg && errorHandler.cardNumber.emptyMsg) ||
                (errorHandler.cardNumber.wrongFormatMsg && errorHandler.cardNumber.wrongFormatMsg)}
            </span>
          )}
        </div>
        <div className="date-cvc">
          <div className="date">
            <label htmlFor="date">EXP. DATE (MM/YY)</label>
            <div className="date-input">
              <input
                className=""
                type="text"
                id="date"
                name="month"
                placeholder="MM"
                value={cardData.expMonth}
                onChange={(e) => {
                  if (e.target.value.length > 2 || isNaN(e.target.value)) {
                    return;
                  }
                  onSetCardData({
                    ...cardData,
                    expMonth: e.target.value,
                  });
                }}
              />
              {errorHandler.expMonth && (
                <span className="error-font date-span">
                  {(errorHandler.expMonth.emptyMsg && errorHandler.expMonth.emptyMsg) ||
                    (errorHandler.expMonth.wrongFormatMsg && errorHandler.expMonth.wrongFormatMsg)}
                </span>
              )}
              <input
                className=""
                type="text"
                id="date"
                name="year"
                placeholder="YY"
                value={cardData.expYear}
                onChange={(e) => {
                  if (e.target.value.length > 2 || isNaN(e.target.value)) {
                    return;
                  }
                  onSetCardData({
                    ...cardData,
                    expYear: e.target.value,
                  });
                }}
              />
              {errorHandler.expYear && (
                <span className="error-font date-span">
                  {(errorHandler.expYear.emptyMsg && errorHandler.expYear.emptyMsg) ||
                    (errorHandler.expYear.wrongFormatMsg && errorHandler.expYear.wrongFormatMsg)}
                </span>
              )}
            </div>
          </div>
          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              id="cvc"
              placeholder="e.g. 123"
              value={cardData.cvc}
              onChange={(e) => {
                if (e.target.value.length > 3) {
                  return;
                }
                onSetCardData({
                  ...cardData,
                  cvc: e.target.value,
                });
              }}
            />
            {errorHandler.cvc && (
              <span className="error-font">
                {(errorHandler.cvc.emptyMsg && errorHandler.cvc.emptyMsg) ||
                  (errorHandler.cvc.wrongFormatMsg && errorHandler.cvc.wrongFormatMsg)}
              </span>
            )}
          </div>
        </div>
        <input type="submit" value="Confirm" />
      </form>
    </div>
  );
};

InputForm.propTypes = {
  cardData: PropTypes.object,
  onSetCardData: PropTypes.func,
  onHandleSubmitForm: PropTypes.func,
  errorHandler: PropTypes.object,
};

export default InputForm;
