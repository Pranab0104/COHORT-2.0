import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Canines = () => {
  return (
    <section
      id="canines"
      className="cann relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">CANINES</h1>

      <p className="cannie relative z-10">
        Canines are shaped by powerful instincts, strong social bonds. Whether moving as a coordinated pack or
        surviving alone, they play an essential role in maintaining the balance
        of the ecosystems they call home.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>GREY WOLF</h4>
          <p>The wild's ultimate pack hunter</p>
          <Link to="/canines/GWolf">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>RED FOX</h4>
          <p>Clever, elusive, and adaptable</p>
          <Link to="/canines/RFox">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>AFRICAN WILD DOG</h4>
          <p>The endurance hunter of the plains</p>
          <Link to="/canines/AFDog">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>COYOTE</h4>
          <p>A survivor built for change</p>
          <Link to="/canines/coyote">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>DINGO</h4>
          <p>The ancient wanderer of Australia</p>
          <Link to="/canines/dingo">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>GOLDEN JACKAL</h4>
          <p>The opportunist of open lands</p>
          <Link to="/canines/golden">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>ARCTIC FOX</h4>
          <p>A survivor beneath the frozen skies</p>
          <Link to="/canines/artic">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>MANED WOLF</h4>
          <p>The solitary ghost of the grasslands</p>
          <Link to="/canines/maned">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Canine content will go here */}
    </section>
  );
};

export default Canines;
