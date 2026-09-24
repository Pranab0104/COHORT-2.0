import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Waterfowl = () => {
  return (
    <section
      id="waterfowls"
      className="waterfowl relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">Waterfowl</h1>

      <p className="wtf relative z-10">
        Water-loving birds perfectly adapted to life around rivers, lakes,
        wetlands, and coastal waters, where they feed, swim, and thrive.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>MALLARD</h4>
          <p>The familiar wanderer of quiet waters</p>
          <Link to="/waterfowls/MALLARD">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>SWAN</h4>
          <p>The graceful giant of the wetlands</p>
          <Link to="/waterfowls/SWAN">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>CANADA GOOSE</h4>
          <p>The powerful traveler of open waters</p>
          <Link to="/waterfowls/CANADAGOOSE">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>FLAMINGO</h4>
          <p>The vibrant wader of shallow waters</p>
          <Link to="/waterfowls/FLAMINGO">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>PELICAN</h4>
          <p>The master of fishing waters</p>
          <Link to="/waterfowls/PELICAN">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>MANDARIN DUCK</h4>
          <p>A jewel of woodland waters</p>
          <Link to="/waterfowls/MANDARINDUCK">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>COMMON LOON</h4>
          <p>The haunting voice of northern lakes</p>
          <Link to="/waterfowls/COMMONLOON">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>GREAT CRESTED GREBE</h4>
          <p>An elegant diver of freshwater lakes</p>
          <Link to="/waterfowls/GREATCRESTEDGREBE">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Waterfowl content will go here */}
    </section>
  );
};

export default Waterfowl;
