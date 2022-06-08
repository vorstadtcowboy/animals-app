const AnimalSpecies = ({ species }) => {
  return (
    <div>
      <span className="label">Tierart:</span>
      <span className="entry">{species}</span>
    </div>
  );
};

export default AnimalSpecies;
