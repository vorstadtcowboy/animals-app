const AnimalRace = ({ race }) => {
  return (
    <div>
      <span className="label">Rasse:</span>
      <span className="entry">{race}</span>
    </div>
  );
};

export default AnimalRace;
