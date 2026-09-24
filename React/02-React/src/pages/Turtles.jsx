import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Turtles = () => {
  return (
    <section
      id="turtles"
      className="turtle relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">Turtles</h1>

      <p className="ttl relative z-10">
        Turtles have endured for millions of years, relying on their protective
        shells, resilience, and remarkable adaptations to survive across land
        and water.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>GREEN SEA </h4>
          <p>The graceful traveler of the oceans</p>
          <Link to="/turtles/GREEN">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>LEATHERBACK</h4>
          <p>The ocean's largest turtle</p>
          <Link to="/turtles/LEATHERBACK">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>LOGGERHEAD</h4>
          <p>The powerful-jawed ocean wanderer</p>
          <Link to="/turtles/LOGGERHEAD">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>HAWKSBILL</h4>
          <p>The reef's elegant explorer</p>
          <Link to="/turtles/HAWKSBILL">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>ALDABRA GIANT TORTOISE</h4>
          <p>The ancient giant of the islands</p>
          <Link to="/turtles/ALDABRA">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>GALÁPAGOS TORTOISE</h4>
          <p>A living symbol of longevity</p>
          <Link to="/turtles/GALAPAGOS">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>ALLIGATOR SNAPPING</h4>
          <p>The fierce ambusher of freshwater</p>
          <Link to="/turtles/SNAPPING">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>PAINTED</h4>
          <p>A colorful survivor of quiet waters</p>
          <Link to="/turtles/PAINTED">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Turtles content will go here */}
    </section>
  );
};

export default Turtles;
