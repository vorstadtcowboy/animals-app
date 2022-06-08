import { useState } from 'react';
//import animalData from '../animalData';

const Button = ({ func, length }) => {
  const [counter, setCounter] = useState(0);
  const [up, setUp] = useState(true);
  const [down, setDown] = useState(false);

  const clickPlus = () => {
    if (counter < length - 1) {
      const updatedCounter = counter + 1;
      setCounter(updatedCounter);
      func(updatedCounter);
      setUp(false);
      setDown(updatedCounter === length - 1 ? true : false);
    }
  };

  const clickMinus = () => {
    if (counter !== 0) {
      const updatedCounter = counter - 1;
      setCounter(updatedCounter);
      func(updatedCounter);
      setDown(false);
      setUp(updatedCounter === 0 ? true : false);
    }
  };

  return (
    <>
      <button onClick={clickMinus} id="pre" disabled={up}>
        zurück
      </button>
      <button onClick={clickPlus} id="next" disabled={down}>
        vor
      </button>
    </>
  );
};

export default Button;
