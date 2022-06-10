import Animal from '../components/animal';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Katzen = () => {
  //State für unsere Liste mit Hunden
  const [liste, setListe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    //Daten fetchen/axiosen dann immer in useEffect / componentDidMount (Class Component)
    axios
      .get('http://localhost:3004/animals/')
      .then((response) => {
        //Die Rückgabe von unserem Axios get wird gefiltert

        const tiere = response.data
          .filter((animal) => animal.species === 'Katze')
          .map((animal) => (
            <Link className="tierlink" to={`/katzen/${animal.id}`} key={animal.id}>
              <Animal tier={animal} />
            </Link>
          ));

        //Setzen des Properties liste auf den Array mit den Hunden
        setListe(tiere);
        //Lademeldung verschwinden lassen
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Hunde</h1>
      <div className="row">
        {error && error}
        {loading && <p>Loading...</p>}
        {liste && liste}
      </div>
    </div>
  );
};

export default Katzen;
