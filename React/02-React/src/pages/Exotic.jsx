import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Exoticbirds = () => {
  return (
    <section
      id="exoticbirds"
      className="exoticbird relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">Exotic Birds</h1>

      <p className="exb relative z-10">
        A spectacular collection of vibrant colors, unusual forms, and
        extraordinary adaptations found across the world's most diverse
        habitats.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>TOUCAN</h4>
          <p>The colorful icon of the rainforest</p>
          <Link to="/exoticbirds/TOUCAN">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>PEACOCK</h4>
          <p>The dazzling display of the wild</p>
          <Link to="/exoticbirds/PEACOCK">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>BIRD-OF-PARADISE</h4>
          <p>Nature's masterpiece of courtship</p>
          <Link to="/exoticbirds/BIRD-OF-PARADISE">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>SCARLET MACAW</h4>
          <p>A brilliant flash of the tropics</p>
          <Link to="/exoticbirds/SCARLETMACAW">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>KINGFISHER</h4>
          <p>A jewel of rivers and forests</p>
          <Link to="/exoticbirds/KINGFISHER">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>GOULDIAN FINCH</h4>
          <p>The striking hunter of the grasslands</p>
          <Link to="/exoticbirds/GOULDIANFINCH">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>HOATZIN</h4>
          <p>The bizarre bird of the Amazon</p>
          <Link to="/exoticbirds/HOATZIN">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>QUETZAL</h4>
          <p>The legendary jewel of the cloud forests</p>
          <Link to="/exoticbirds/QUETZAL">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Exoticbirds content will go here */}
    </section>
  );
};

export default Exoticbirds;
