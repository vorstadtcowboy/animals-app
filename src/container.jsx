//named import
import Animal from './components/animal';
import animalData from './animalData';
import Button from './components/button';
import { useState, useEffect } from 'react';
//import styled from 'styled-components';
import Title from './components/Title';

const Container = () => {
  const [index, setIndex] = useState(0);
  //Funktion definieren
  const updateParent = (counter) => {
    setIndex(counter);
  };

  //Side Effects -  UseEffect ist ein guter Ort, um Daten fetchen
  useEffect(() => {
    //fetch oder axios hier drin
    document.title = `Hilf ${animalData[index].species} ${animalData[index].name} `;
  }, [index]);

  return (
    <div className="wrapper">
      <Title primary>Hunde & Katzen</Title>
      {/** Vormals war hier animal div */}

      <Animal tier={animalData[index]} />

      <div className="controls">
        <Button id="next" value="vor" func={updateParent} length={animalData.length} />
      </div>
    </div>
  );
};

export default Container;
