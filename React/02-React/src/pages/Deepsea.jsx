import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Deepsea = () => {
  return (
    <section
      id="deepsea"
      className="deeps relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">deep sea</h1>

      <p className="dps relative z-10">
        Far beyond the reach of sunlight lies a mysterious world of strange
        forms, bioluminescent hunters, and creatures adapted to extreme depths.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>GIANT SQUID</h4>
          <p>The mysterious giant of the deep</p>
          <Link to="/deepsea/GIANTSQUID">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>ANGLERFISH</h4>
          <p>The glowing hunter of the darkness</p>
          <Link to="/deepsea/ANGLERFISH">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>GOBLIN SHARK</h4>
          <p>The strange predator of the depths</p>
          <Link to="/deepsea/GOBLINSHARK">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>VAMPIRE SQUID</h4>
          <p>The elusive drifter of the deep</p>
          <Link to="/deepsea/VAMPIRESQUID">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>GIANT ISOPOD</h4>
          <p>The armored scavenger of the seafloor</p>
          <Link to="/deepsea/GIANTISOPOD">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>DUMBO OCTOPUS</h4>
          <p>The gentle explorer of the abyss</p>
          <Link to="/deepsea/DUMBOOCTOPUS">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>FRILLED SHARK</h4>
          <p>The ancient hunter of deep waters</p>
          <Link to="/deepsea/FRILLEDSHARK">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>BARRELEYE FISH</h4>
          <p>The transparent-eyed watcher of the dark</p>
          <Link to="/deepsea/BARRELEYEFISH">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Deepsea content will go here */}
    </section>
  );
};

export default Deepsea;
