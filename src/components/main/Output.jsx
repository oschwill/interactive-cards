import frontCard from '../../assets/images/bg-card-front.png';
import backCard from '../../assets/images/bg-card-back.png';
import cardLogo from '../../assets/images/card-logo.svg';

/* CSS */
import './Output.css';

const Output = () => {
  return (
    <div className="output">
      <div className="images">
        <div className="front-card">
          <img src={cardLogo} alt=" card Logo" />
          <h2>0000 0000 0000 0000</h2>
          <div className="name-date">
            <p>placeholder</p>
            <p>01/09</p>
          </div>
          {/* <img src={frontCard} alt="front card" /> */}
        </div>
        <div className="back-card">
          {/* <img src={backCard} alt="back card" /> */}
          <p>000</p>
        </div>
      </div>
    </div>
  );
};

export default Output;
