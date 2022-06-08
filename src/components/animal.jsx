import AnimalAge from './animalAge';
import AnimalBody from './AnimalBody';
import AnimalImage from './animalImage';
import AnimalRace from './animalRace';
import AnimalSex from './AnimalSex';
import AnimalSpecies from './AnimalSpecies';
import AnimalTags from './animalTags';
import AnimalTitle from './AnimalTitle';
import styled from 'styled-components';

const Animal = ({ tier }) => {
  //console.log(tier);

  // url = https://vorstadtcowboy.ga/images/<name des tieres in kleinbuchtaben>.wbp
  return (
    <div className="animal">
      {/**Bitte die AnimalImage Komponente extrahieren */}
      <AnimalImage name={tier.name} />
      <AnimalTitle name={tier.name} />

      {/**Diese Komponente erwartet children */}
      <AnimalBody>
        <AnimalSpecies species={tier.species} />
        <AnimalSex sex={tier.sex} />
        <AnimalRace race={tier.race} />
        <StyledAnimalAge birthday={tier.birthday} />
        <AnimalTags tags={tier.tags} />
      </AnimalBody>
    </div>
  );
};

export default Animal;

const StyledAnimalAge = styled(AnimalAge)`
  background: red;
  color: red;
`;
