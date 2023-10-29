import PropTypes from 'prop-types';

const DateField = ({ errorHandler, labelName, onSetCardData, cardDataValue, cardData }) => {
  return (
    <div className="date">
      <label htmlFor="date">{labelName}</label>
      <div className="date-input">
        <input
          className={errorHandler.expMonth && errorHandler.expMonth.isError ? 'error-border' : ''}
          type="text"
          id="date"
          name="month"
          placeholder="MM"
          value={cardDataValue.expMonth}
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

        <input
          className={errorHandler.expYear && errorHandler.expYear.isError ? 'error-border' : ''}
          type="text"
          id="date"
          name="year"
          placeholder="YY"
          value={cardDataValue.expYear}
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
      </div>
      <div className="error-date-span">
        {errorHandler.expMonth && (
          <span className="error-font date-span">
            {(errorHandler.expMonth.emptyMsg && errorHandler.expMonth.emptyMsg) ||
              (errorHandler.expMonth.wrongFormatMsg && errorHandler.expMonth.wrongFormatMsg)}
          </span>
        )}
        {errorHandler.expYear && (
          <span className="error-font date-span">
            {(errorHandler.expYear.emptyMsg && errorHandler.expYear.emptyMsg) ||
              (errorHandler.expYear.wrongFormatMsg && errorHandler.expYear.wrongFormatMsg)}
          </span>
        )}
      </div>
    </div>
  );
};

DateField.propTypes = {
  errorHandler: PropTypes.object,
  labelName: PropTypes.string,
  onSetCardData: PropTypes.func,
  cardDataValue: PropTypes.object,
  cardData: PropTypes.object,
};

export default DateField;
