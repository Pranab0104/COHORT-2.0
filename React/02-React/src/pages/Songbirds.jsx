import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Songbirds = () => {
  return (
    <section
      id="songbirds"
      className="songbird relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">SONGBIRDS</h1>

      <p className="sgb relative z-10">
        Through complex songs and calls, songbirds communicate, attract mates,
        defend territories, and bring life to the landscapes they inhabit.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>NIGHTINGALE</h4>
          <p>The legendary voice of the night</p>
          <Link to="/songbirds/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>CANARY</h4>
          <p>A bright singer of the wild</p>
          <Link to="/songbirds/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>ROBIN</h4>
          <p>The cheerful voice of the woodland</p>
          <Link to="/songbirds/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>NORTH AMERICAN CARDINAL</h4>
          <p>A striking songster of the forests</p>
          <Link to="/songbirds/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>BLUE JAY</h4>
          <p>The bold voice of the woodland</p>
          <Link to="/songbirds/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>GOLDEN ORIOLE</h4>
          <p>A flash of color among the trees</p>
          <Link to="/songbirds/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>COMMON BLACKBIRD</h4>
          <p>The melodic singer of the gardens</p>
          <Link to="/songbirds/">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>MOCKINGBIRD</h4>
          <p>The master of nature's many voices</p>
          <Link to="/songbirds/">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Songbirds content will go here */}
    </section>
  );
};

export default Songbirds;
