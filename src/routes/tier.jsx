import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Animal from '../components/animal';

const Tier = () => {
  let { id } = useParams();
  const [tier, setTier] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/animals/${id}`)
      .then((response) => setTier(response.data));
  }, []);

  //Return
  return <div className="row">{tier && <Animal tier={tier} />}</div>;
};

export default Tier;
