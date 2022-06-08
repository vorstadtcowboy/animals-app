import ageConverter from '../ageConverter';
const AnimalAge = ({ birthday }) => {
  return (
    <div>
      <span className="label">Alter:</span>
      <span className="entry">{ageConverter(birthday)}</span>
    </div>
  );
};

export default AnimalAge;
