import React from "react";
import { useParams } from "react-router-dom";
import creatures from "../data/creatures";

const Creature = () => {
  const { animal } = useParams();
  const creature = creatures[animal];
  return (
    <section className="creature-page">
      <h1>PORTRAITS OF THE WILD</h1>
      <div className="creature-box">
        {/* Left Side - Image */}
        <div className="creature-image">
          <img src={creature.image} alt={creature.name} />
        </div>

        {/* Right Side - Information */}
        <div className="creature-info">
          <div className="creature-title">
            <h1>{creature.name}</h1>
            <p className="scientific-name">{creature.scientificName}</p>
          </div>

          <div className="info-item">
            <span>Species </span>
            <p>{creature.species}</p>
          </div>

          <div className="info-item">
            <span>Habitat</span>
            <p>{creature.habitat}</p>
          </div>

          <div className="info-item">
            <span>Diet</span>
            <p>{creature.diet}</p>
          </div>

          <div className="info-item">
            <span>Lifespan</span>
            <p>{creature.lifespan}</p>
          </div>

          <div className="info-item">
            <span>Behavior</span>
            <p>{creature.behavior}</p>
          </div>

          <div className="info-item">
            <span>Danger Level</span>
            <p>{creature.dangerLevel}</p>
          </div>

          <div className="info-item">
            <span>Conservation</span>
            <p>{creature.conservationStatus}</p>
          </div>

          <div className="info-item">
            <span>Largest Population</span>
            <p>{creature.largestPopulation}</p>
          </div>

          <div className="info-item">
            <span>Found In</span>
            <p>{creature.foundIn.join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creature;
