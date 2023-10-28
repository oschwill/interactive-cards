import PropTypes from 'prop-types';

const InputField = ({
  errorhandler,
  labelName,
  onSetCardData,
  cardDataValue,
  divClass,
  idName,
  placeholder,
}) => {
  return (
    <div className={divClass}>
      <label htmlFor={idName}>{labelName}</label>
      <input
        className={errorhandler && errorhandler.isError ? 'error-border' : ''}
        type="text"
        id={idName}
        placeholder={placeholder}
        value={cardDataValue}
        onChange={(e) => onSetCardData(e.target.value)}
      />
      {errorhandler && (
        <span className="error-font">
          {(errorhandler.emptyMsg && errorhandler.emptyMsg) ||
            (errorhandler.wrongFormatMsg && errorhandler.wrongFormatMsg)}
        </span>
      )}
    </div>
  );
};

InputField.propTypes = {
  errorhandler: PropTypes.object,
  labelName: PropTypes.string,
  onSetCardData: PropTypes.func,
  cardDataValue: PropTypes.string,
  divClass: PropTypes.string,
  idName: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
