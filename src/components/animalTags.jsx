const AnimalTags = ({ tags }) => {
  const list = tags.map((tag, index) => <p key={index}>{tag}</p>);

  return (
    <div>
      <span className="label">Tags:</span>
      <span className="entry">{list}</span>
    </div>
  );
};

export default AnimalTags;
