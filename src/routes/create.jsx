import axios from 'axios';
import { useState } from 'react';

const Create = () => {
  const [name, setName] = useState('');
  //Absende Handler
  const handleSubmit = (event) => {
    //unterdrücke das eigentliche Verhalten des Formular
    event.preventDefault();

    axios
      .post('http://localhost:3004/animals', {
        name,
      })
      .then((response) => console.log(response));
  };

  // Für jedes Feld auch eine Funktion

  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <input type="submit" value="absenden" />
      </form>
    </div>
  );
};

export default Create;
