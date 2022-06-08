import { useState } from 'react';

function Test(props) {
  //const string = `Du bist aus ${city}`;
  const { name, city: stadt, array, show, counter: zahl } = props;

  const liste = array.map((item, index) => <li key={index}>{item}</li>);

  const person = { vorname: 'Heinz', nachname: 'Müller' };
  const { vorname: first, nachname: last } = person;

  //console.log(first);
  //const style = true;

  //Benutzen useState mit setter setzen den neuen Zustand
  const [counter, setCounter] = useState(zahl);

  //ClickHandler
  const clickplus = () => {
    setCounter(counter + 1);
  };

  const clickminus = () => {
    setCounter(counter - 1);
  };

  const [style, setStyle] = useState(true);

  const changeStyle = () => {
    if (style === true) {
      setStyle(false);
    } else {
      setStyle(true);
    }
    //setStyle(!style);
  };

  //conditional rendering
  if (show) {
    return (
      <div>
        <h1 className="red">Hallo {name}</h1>
        <p>{counter}</p>
        <p
          style={
            //tenary: condition(true/false) ? 'hi' : 'hallo';
            style
              ? { color: 'blue', backgroundColor: 'pink' }
              : { color: 'yellow', backgroundColor: 'blue' }
          }
        >
          Du bist aus {stadt}
        </p>
        {/** Liste nur ausgeben, wenn mindestens 4 Elemente drin sind */}
        {liste.length >= 4 && <ul>{liste}</ul>}

        <button onClick={clickminus}>-1</button>
        <button onClick={clickplus}>+1</button>

        <button onClick={changeStyle}>change style</button>
      </div>
    );
  }

  return;
}

export default Test;
