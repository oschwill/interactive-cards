import PropTypes from 'prop-types';
/* CSS */
import './InputForm.css';

const InputForm = ({ cardData, onSetCardData }) => {
  return (
    <div className="input">
      <form className="form">
        <div className="cardholder">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Jane Appleseed"
            value={cardData.cardHolder}
          />
        </div>
        <div className="card-number">
          <label htmlFor="number">CARD NMUBER</label>
          <input type="text" id="number" placeholder="e.g. 1234 5678 9123 0000" />
        </div>
        <div className="date-cvc">
          <div className="date">
            <label htmlFor="date">EXP. DATE (MM/YY)</label>
            <div className="date-input">
              <input type="text" id="date" name="month" placeholder="MM" />
              <input type="text" id="date" name="year" placeholder="YY" />
            </div>
          </div>
          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <input type="text" id="cvc" placeholder="e.g. 123" />
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
};

export default InputForm;
