import { useState } from 'react';
import InputForm from '../components/main/InputForm';
import Output from '../components/main/Output';

/* CSS */
import './Home.css';

const defaultCardData = {
  cardHolder: 'Jane Appleseed',
  cardNumber: '0000 0000 0000 0000',
  expMonth: '00',
  expYear: '00',
  cvc: '000',
};

const Home = () => {
  const [cardData, setCardData] = useState(defaultCardData);

  const handleCardData = () => {
    //...
  };

  return (
    <main>
      <Output cardData={cardData} />
      <InputForm cardData={cardData} onSetCardData={handleCardData} />
    </main>
  );
};

export default Home;
