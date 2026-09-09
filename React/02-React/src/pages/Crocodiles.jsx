import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Crocodiles = () => {
  return (
    <section
      id="crocodiles"
      className="crocodile relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">Crocodiles</h1>

      <p className="cdl relative z-10">
        Ancient predators built for patience, power, and stealth, ruling the
        rivers, wetlands, and waterways they call home.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>SALTWATER CROCODILE</h4>
          <p>The largest reptile on Earth</p>
          <Link to="/crocodiles/SALTWATER">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>NILE CROCODILE</h4>
          <p>The feared hunter of African waters</p>
          <Link to="/crocodiles/NILE">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>AMERICAN CROCODILE</h4>
          <p>A powerful survivor of the tropics</p>
          <Link to="/crocodiles/AMERICAN">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>MUGGER CROCODILE</h4>
          <p>The freshwater ambusher of South Asia</p>
          <Link to="/crocodiles/MUGGER">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>SIAMESE CROCODILE</h4>
          <p>A rare predator of Southeast Asia</p>
          <Link to="/crocodiles/SIAMESE">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>CUBAN CROCODILE</h4>
          <p>The fierce hunter of Caribbean wetlands</p>
          <Link to="/crocodiles/CUBAN">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>DWARF CROCODILE</h4>
          <p>The smallest guardian of African forests</p>
          <Link to="/crocodiles/DWARF">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>ORINOCO CROCODILE</h4>
          <p>A rare giant of South American rivers</p>
          <Link to="/crocodiles/ORINOCO">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Crocodiles content will go here */}
    </section>
  );
};

export default Crocodiles;
