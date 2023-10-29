import PropTypes from 'prop-types';
/* CSS */
import './InputForm.css';
import InputField from './inputform/InputField';
import DateField from './inputform/DateField';

const InputForm = ({ cardData, onSetCardData, onHandleSubmitForm, errorHandler }) => {
  const checkCardNumber = (cardNumber) => {
    if (cardNumber.replace(/ /g, '').length > 16) {
      return;
    }

    cardNumber = cardNumber
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();

    onSetCardData({
      ...cardData,
      cardNumber: cardNumber,
    });
  };

  const checkCardHolder = (cardHolder) => {
    if (cardHolder.length > 35) {
      return;
    }

    onSetCardData({
      ...cardData,
      cardHolder: cardHolder,
    });
  };

  const checkCvC = (cvc) => {
    if (cvc.length > 3) {
      return;
    }
    onSetCardData({
      ...cardData,
      cvc: cvc,
    });
  };

  return (
    <div className="input">
      <form className="form" onSubmit={onHandleSubmitForm}>
        <InputField
          errorhandler={errorHandler.cardHolder}
          labelName="CARDHOLDER NAME"
          onSetCardData={checkCardHolder}
          cardDataValue={cardData.cardHolder}
          divClass="cardholder"
          idName="name"
          cardData={cardData}
          placeholder="e.g. Jane Appleseed"
        />
        <InputField
          errorhandler={errorHandler.cardNumber}
          labelName="CARD NUMBER"
          onSetCardData={checkCardNumber}
          cardDataValue={cardData.cardNumber}
          divClass="card-number"
          idName="number"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div className="date-cvc">
          <DateField
            errorHandler={{ expMonth: errorHandler.expMonth, expYear: errorHandler.expYear }}
            labelName="EXP. DATE (MM/YY)"
            onSetCardData={onSetCardData}
            cardDataValue={{ expMonth: cardData.expMonth, expYear: cardData.expYear }}
            cardData={cardData}
          />
          <InputField
            errorhandler={errorHandler.cvc}
            labelName="CVC"
            onSetCardData={checkCvC}
            cardDataValue={cardData.cvc}
            divClass="cvc"
            idName="cvc"
            placeholder="e.g. 123"
          />
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
