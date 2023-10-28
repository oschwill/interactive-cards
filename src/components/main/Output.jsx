import PropTypes from 'prop-types';
import cardLogo from '../../assets/images/card-logo.svg';

/* CSS */
import './Output.css';

const Output = ({ cardData }) => {
  // console.log(cardData);
  return (
    <div className="output">
      <div className="images">
        <div className="front-card card-back">
          <img src={cardLogo} alt="card Logo" />
          <h2>{cardData.cardNumber ? cardData.cardNumber : '0000 0000 0000 0000'}</h2>
          <div className="name-date">
            <p>{cardData.cardHolder ? cardData.cardHolder : 'JANE APPLESEED'}</p>
            <p>
              {cardData.expMonth ? cardData.expMonth : '00'}/
              {cardData.expYear ? cardData.expYear : '00'}
            </p>
          </div>
        </div>
        <div className="back-card card-back">
          <p>{cardData.cvc ? cardData.cvc : '000'}</p>
        </div>
      </div>
    </div>
  );
};

Output.propTypes = {
  cardData: PropTypes.object,
};

export default Output;
