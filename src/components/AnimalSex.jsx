const AnimalSex = ({ sex }) => {
  return (
    <div>
      <span className="label">Geschlecht:</span>
      <span className="entry">{sex}</span>
    </div>
  );
};

export default AnimalSex;
