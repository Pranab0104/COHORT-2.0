import React from "react";
import { Link } from "react-router-dom";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";

const Marine = () => {
  return (
    <section
      id="marine"
      className="ocean relative h-screen w-full overflow-hidden before:absolute before:inset-0 before:bg-[url('./public/images/mr_bg.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:scale-105"
    >
      <h1 className="relative z-10 text-6xl">Marine</h1>

      <p className="first relative z-10 ">
        From enormous ocean giants to creatures hidden beneath the waves,
        discover the extraordinary life that thrives across the vast depths of
        our planet.
      </p>

      <div className="container z-10">
        <div id="box1" className="baxa ">
          <span>01</span>
          <h4>OCEAN GIANTS</h4>
          <p>The largest beings of the blue.</p>
          <Link to="/oceangiants">
            <i>↗</i>
          </Link>
        </div>
        <div id="box2" className="baxa ">
          <span>02</span>
          <h4>APEX PREDATORS</h4>
          <p>Hunters at the top of the food chain.</p>
          <Link to="/apex">
            <i>↗</i>
          </Link>
        </div>
        <div id="box3" className="baxa ">
          <span>03</span>
          <h4>REEF LIFE</h4>
          <p>Color beneath the waves.</p>
         <Link to="/reeflifes">
            <i>↗</i>
          </Link>
        </div>
        <div id="box4" className="baxa ">
          <span>04</span>
          <h4>DEEP SEA</h4>
          <p>Life in the darkness.</p>
          <Link to="/deepsea">
            <i>↗</i>
          </Link>
        </div>
      </div>

      <h3 className="relative z-10 text-3xl">THE DEEP BLUE</h3>

      <p className="second relative z-10 ">
        Beneath the surface lies a world shaped by currents, pressure, and
        endless movement. From powerful predators to delicate reef dwellers,
        marine life reveals a remarkable balance that keeps our oceans alive.
      </p>
    </section>
  );
};

export default Marine;
