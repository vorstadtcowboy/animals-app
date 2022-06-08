const AnimalImage = ({ name }) => {
  //console.log(name);
  const imageUrl = `https://vorstadtcowboy.ga/images/${name.toLowerCase()}.webp`;
  return (
    <div className="animal_image">
      <img className="entry" src={imageUrl} alt={name} title={name} />
    </div>
  );
};

export default AnimalImage;
