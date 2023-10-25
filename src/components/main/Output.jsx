import PropTypes from 'prop-types';
import cardLogo from '../../assets/images/card-logo.svg';

/* CSS */
import './Output.css';

const Output = ({ cardData }) => {
  console.log(cardData);
  return (
    <div className="output">
      <div className="images">
        <div className="front-card card-back">
          <img src={cardLogo} alt=" card Logo" />
          <h2>{cardData.cardNumber}</h2>
          <div className="name-date">
            <p>{cardData.cardHolder}</p>
            <p>
              {cardData.expMonth}/{cardData.expYear}
            </p>
          </div>
        </div>
        <div className="back-card card-back">
          <p>{cardData.cvc}</p>
        </div>
      </div>
    </div>
  );
};

Output.propTypes = {
  cardData: PropTypes.object,
};

export default Output;
