import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Giants = () => {
  return (
    <section
      id="giants"
      className="giant relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">Giants</h1>

      <p className="gnt relative z-10">
        The largest creatures of the wild, defined by immense strength, size,
        and an enduring presence across Earth's diverse landscapes.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>ELEPHANT</h4>
          <p>The gentle giant of the land</p>
          <Link to="/giants/elephant">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>GIRAFFE</h4>
          <p>The tallest wanderer of the savanna</p>
          <Link to="/giants/giraffe">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>RHINOCEROS</h4>
          <p>An armored force of the wild</p>
          <Link to="/giants/rhino">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>HIPPOPOTAMUS</h4>
          <p>The river's powerful guardian</p>
          <Link to="/giants/hippo">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>POLAR BEAR</h4>
          <p>Master of the frozen north</p>
          <Link to="/giants/polar">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>BISON</h4>
          <p>The mighty giant of the grasslands</p>
          <Link to="/giants/bison">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>WALRUS</h4>
          <p>The tusked giant of icy waters</p>
          <Link to="/giants/walrus">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>MOOSE</h4>
          <p>The towering giant of the northern forests</p>
          <Link to="/giants/moose">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Canine content will go here */}
    </section>
  );
};

export default Giants;
