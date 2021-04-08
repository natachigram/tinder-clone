import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Drake',
      url:
        'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQ3NTI2OTA4NzY5MjE2MTI4/drake_photo_by_prince_williams_wireimage_getty_479503454.jpg',
    },
    {
      name: 'Elon Musk',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen');
  };

  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => {
          return <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: 'url(' + person.url + ')' }}
              className='card'
            ><h3>{person.name}</h3>
            </div>
          </TinderCard>;
        })}
      </div>
    </div>
  );
}

export default TinderCards;
