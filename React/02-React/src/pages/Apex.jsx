import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Apex = () => {
  return (
    <section
      id="apex"
      className="ape relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">APEX PREDATORS</h1>

      <p className="aps relative z-10">
        Fearsome hunters that command the marine food chain, using speed,
        strength, intelligence, and precision to dominate the ocean.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>TIGER SHARK</h4>
          <p>The opportunistic hunter of tropical seas</p>
          <Link to="/apex/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>SHORTFIN MAKO SHARK</h4>
          <p>The speedster of the open ocean</p>
          <Link to="/apex/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>GREAT HAMMERHEAD</h4>
          <p>The powerful hunter of coastal waters</p>
          <Link to="/apex/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>BULL SHARK</h4>
          <p>The fearless predator of warm waters</p>
          <Link to="/apex/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>LEOPARD SEAL</h4>
          <p>The fierce hunter of Antarctic waters</p>
          <Link to="/apex/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>GIANT TREVALLY</h4>
          <p>The powerful ambush predator of the reefs</p>
          <Link to="/apex/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>BLUEFIN TUNA</h4>
          <p>The swift hunter of the open seas</p>
          <Link to="/apex/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>MORAY EEL</h4>
          <p>The stealthy predator of the reef</p>
          <Link to="/apex/">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Apex content will go here */}
    </section>
  );
};

export default Apex;
