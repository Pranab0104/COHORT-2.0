import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Animals = () => {
  return (
    <section
      id="animals"
      className="sect relative h-screen w-full overflow-hidden before:absolute before:inset-0 before:bg-[url('./public/images/Animal_bg.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:scale-105"
    >
      <h1 className="relative z-10 text-6xl">Animals</h1>

      <p className="upper relative z-10 ">
        From fierce predators to gentle giants, discover the remarkable
        creatures that shape life across our planet.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>BIG CATS</h4>
          <p>Masters of stealth and power.</p>
          <Link to="/bigcat">
            <i>↗</i>
          </Link>
        </div>
        <div id="box2" className="box ">
          <span>02</span>
          <h4>CANINES</h4>
          <p>Pack hunters and survivors.</p>
          <Link to="/canine">
            <i>↗</i>
          </Link>
        </div>
        <div id="box3" className="box ">
          <span>03</span>
          <h4>PRIMATES</h4>
          <p>Intelligence shaped by the wild.</p>
          <Link to="/primates">
            <i>↗</i>
          </Link>
        </div>
        <div id="box4" className="box ">
          <span>04</span>
          <h4>GIANTS</h4>
          <p>The largest creatures of land.</p>
          <Link to="/giants">
            <i>↗</i>
          </Link>
        </div>
      </div>

      <h3 className="relative z-10 text-3xl">The Wild Within</h3>

      <p className="lower relative z-10 ">
        Every creature plays a part in the delicate balance of nature. From the
        smallest inhabitants to the most powerful predators, animals shape the
        ecosystems they call home and keep the rhythm of the wild alive.
      </p>
    </section>
  );
};

export default Animals;
