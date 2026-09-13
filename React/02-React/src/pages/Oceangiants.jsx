import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Oceangiants = () => {
  return (
    <section
      id="oceangiants"
      className="oceangiant relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">Ocean Giants</h1>

      <p className="ocg relative z-10">
        Massive creatures that rule the depths, from enormous whales to powerful
        predators that command the vastness of the open ocean.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>BLUE WHALE</h4>
          <p>The largest animal ever known</p>
          <Link to="/oceangiants/BLUEWHALE">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>SPERM WHALE</h4>
          <p>The deep-diving giant of the ocean</p>
          <Link to="/oceangiants/SPERMWHALE">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>ORCA</h4>
          <p>The apex predator of the seas</p>
          <Link to="/oceangiants/ORCA">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>WHALE SHARK</h4>
          <p>The gentle giant of warm waters</p>
          <Link to="/oceangiants/WHALESHARK">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>GIANT MANTA RAY</h4>
          <p>The graceful giant of the open sea</p>
          <Link to="/oceangiants/GIANTMANTARAY">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>GREAT WHITE SHARK</h4>
          <p>The legendary hunter of the ocean</p>
          <Link to="/oceangiants/GREATWHITESHARK">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>GIANT PACIFIC OCTOPUS</h4>
          <p>The intelligent giant of coastal waters</p>
          <Link to="/oceangiants/GIANTPACIFICOCTOPUS">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>HUMPBACK WHALE</h4>
          <p>The acrobat of the open ocean</p>
          <Link to="/oceangiants/HUMPBACKWHALE">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* oceangiants content will go here */}
    </section>
  );
};

export default Oceangiants;
