import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";

const Birds = () => {
  return (
    <section
      id="bird"
      className="bird relative h-screen w-full overflow-hidden before:absolute before:inset-0 before:bg-[url('./public/images/Birds_bg.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:scale-105"
    >
      <h1 className="relative z-10 text-6xl">Birds</h1>

      <p className="up relative z-10 ">
        From soaring predators to vibrant songbirds, discover the remarkable
        species that fill our skies, forests, wetlands, and wild landscapes.
      </p>

      <div className="container z-10">
        <div id="box1" className="boxee ">
          <span>01</span>
          <h4>RAPTORS</h4>
          <p>Hunters of the open sky.</p>
          <i>↗</i>
        </div>
        <div id="box2" className="boxee ">
          <span>02</span>
          <h4>SONGBIRDS</h4>
          <p>Voices of the wild sky.</p>
          <i>↗</i>
        </div>
        <div id="box3" className="boxee ">
          <span>03</span>
          <h4>WATERFOWL</h4>
          <p>Life between land and water.</p>
          <i>↗</i>
        </div>
        <div id="box4" className="boxee ">
          <span>04</span>
          <h4>EXOTIC BIRDS</h4>
          <p>Color beyond imagination.</p>
          <i>↗</i>
        </div>
      </div>

      <h3 className="relative z-10 text-3xl">MASTERS OF THE SKY</h3>

      <p className="below relative z-10 ">
        Built for flight, birds have evolved remarkable ways to survive and
        thrive. From silent hunters gliding through the night to colorful
        species moving through dense forests, each plays an essential role in
        the rhythm of nature.
      </p>
    </section>
  );
};

export default Birds;
