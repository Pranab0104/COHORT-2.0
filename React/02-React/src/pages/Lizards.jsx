import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Lizards = () => {
  return (
    <section
      id="lizards"
      className="lizard relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">Lizards</h1>

      <p className="lzd relative z-10">
        Lizards have evolved remarkable defenses, hunting strategies, and
        survival skills, allowing them to conquer some of the wild's most
        challenging environments.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>KOMODO DRAGON</h4>
          <p>The giant predator of the islands</p>
          <Link to="/lizards/KOMODO">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>GREEN IGUANA</h4>
          <p>The colorful climber of the tropics</p>
          <Link to="/lizards/IGUANA">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>CHAMELEON</h4>
          <p>The master of camouflage</p>
          <Link to="/lizards/CHAMELEON">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>BEARDED DRAGON</h4>
          <p>The bold survivor of the outback</p>
          <Link to="/lizards/BEARDED">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>GECKO</h4>
          <p>The tiny master of the night</p>
          <Link to="/lizards/GECKO">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>GILA MONSTER</h4>
          <p>The venomous desert wanderer</p>
          <Link to="/lizards/GILA">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>FRILLED LIZARD</h4>
          <p>The dramatic runner of Australia</p>
          <Link to="/lizards/FRILLED">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>THORNED DEVIL</h4>
          <p>The spiky survivor of the desert</p>
          <Link to="/lizards/THORNED">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Lizards content will go here */}
    </section>
  );
};

export default Lizards;
