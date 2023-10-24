import cardLogo from '../../assets/images/card-logo.svg';

/* CSS */
import './Output.css';

const Output = () => {
  return (
    <div className="output">
      <div className="images">
        <div className="front-card card-back">
          <img src={cardLogo} alt=" card Logo" />
          <h2>7851 0000 0000 0000</h2>
          <div className="name-date">
            <p>Jane Houstun</p>
            <p>01/09</p>
          </div>
        </div>
        <div className="back-card card-back">
          <p>000</p>
        </div>
      </div>
    </div>
  );
};

export default Output;
