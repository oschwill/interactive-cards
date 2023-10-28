import PropTypes from 'prop-types';
import completeImg from '../../assets/images/icon-complete.svg';

/* CSS */
import './SubmitBox.css';

const SubmitBox = ({ onResetSubmit }) => {
  return (
    <div className="success">
      <img src={completeImg} alt="completed" />
      <h2>THANK YOU</h2>
      <p>We&apos;ve added your card details</p>
      <button onClick={onResetSubmit}>Continue</button>
    </div>
  );
};

SubmitBox.propTypes = {
  onResetSubmit: PropTypes.func,
};

export default SubmitBox;
