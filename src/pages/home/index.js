import React, { useEffect, useState } from 'react';
import { getPets } from '../../api/petfinder';
import Hero from '../../components/hero';
import Pet from '../../components/pet';

import { useParams, Link } from 'react-router-dom';

const HomePage = (props) => {
  const [data, setData] = useState(null);
  //const { type } = useParams(); // Fix me!
  //let params = useParams(); // extract the URL parameters
  //console.log("Params: " + params);
  //for(let x in params) {
  //  console.log(x + ": " + params[x]);
  //  console.log(params['type']);
  //  console.log(typeof(params['type']));
  //}
  //const type = params['type'].replace("debugging-test", "");
  //const type = params.replace("debugging-test", ""); //set type equal to 'params' minus the 'debugging-test'
  const type = props.type;
  console.log('Type: ' + type);

  useEffect(() => {
    async function getPetsData() {
      let petsData = await getPets(type);
      console.log(petsData.animals);
      setData(petsData.animals);
    }

    getPetsData();
  }, [type]);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page">
      <Hero />
      <h3>
        <span className="pet-type-label">{type ? `${type}s` : 'Pets'}</span>{' '}
        available for adoption near you
      </h3>

      {data.length ? (
        <div className="grid">
          {data.map((animal) => (
            <Link // Change me to a Link!
              key={animal.id}
              to={`/${animal.type.toLowerCase()}/${animal.id}`}
              className="pet"
            >
              <article>
                <div className="pet-image-container">
                  {
                    <img
                      className="pet-image"
                      src={
                        animal.photos[0]?.medium ||
                        'https://chris-larham-1983.github.io/images/missing-animal.png'
                      }
                      alt=""
                    />
                  }
                </div>
                <h3>{animal.name}</h3>
                <p>Breed: {animal.breeds.primary}</p>
                <p>Color: {animal.colors.primary}</p>
                <p>Gender: {animal.gender}</p>
              </article>
            </Link> // Don't forget to change me!
          ))}
        </div>
      ) : (
        <p className="prompt">No {type}s available for adoption now.</p>
      )}
    </div>
  );
};

export default HomePage;
