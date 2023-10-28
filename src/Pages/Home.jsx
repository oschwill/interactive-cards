import { useState } from 'react';
import InputForm from '../components/main/InputForm';
import Output from '../components/main/Output';

/* FUNCTIONS */
import { validateForm } from '../error/errorHandler';

/* CSS */
import './Home.css';
import SubmitBox from '../components/main/SubmitBox';

const defaultCardData = {
  cardHolder: '',
  cardNumber: '',
  expMonth: '',
  expYear: '',
  cvc: '',
};

const Home = () => {
  const [cardData, setCardData] = useState(defaultCardData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorHandler, setErrorHandler] = useState({});

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // reset errorhandler
    setErrorHandler({});

    let isValidate = validateForm(cardData, setErrorHandler, errorHandler);

    console.log(isValidate);

    if (!isValidate) {
      return;
    }

    setIsSubmitted(!isSubmitted);
  };

  const resetSubmit = () => {
    setIsSubmitted(!isSubmitted);
    setCardData(defaultCardData);
    setErrorHandler({});
  };

  return (
    <main>
      <Output cardData={cardData} />
      {isSubmitted ? (
        <SubmitBox onResetSubmit={resetSubmit} />
      ) : (
        <InputForm
          cardData={cardData}
          onSetCardData={setCardData}
          onHandleSubmitForm={handleSubmitForm}
          errorHandler={errorHandler}
        />
      )}
    </main>
  );
};

export default Home;
