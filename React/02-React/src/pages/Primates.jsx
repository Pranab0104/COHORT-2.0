import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Primates = () => {
  return (
    <section
      id="primates"
      className="primat relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">PRIMATES</h1>

      <p className="prime relative z-10">
        Primates are among nature's most complex creatures, known for their
        intelligence, communication, and strong social connections. From dense
        rainforests to open woodlands, they have evolved remarkable ways to
        survive, cooperate, and thrive.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>GORILLA</h4>
          <p>Powerful giants with gentle instincts</p>
          <Link to="/primates/gorilla">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>CHIMPANZEE</h4>
          <p>Brilliant minds of the forest</p>
          <Link to="/primates/cimpanzee">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>ORANGUTAN</h4>
          <p>The solitary thinker of the canopy</p>
          <Link to="/primates/ORANGUTAN">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>BABOON</h4>
          <p>Bold survivors of the open wild</p>
          <Link to="/primates/baboon">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>MANDRILL</h4>
          <p>A striking face of the rainforest</p>
          <Link to="/primates/mandrill">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>GIBBON</h4>
          <p>Acrobats of the treetops</p>
          <Link to="/primates/gibbon">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>RING-TAILED LEMUR</h4>
          <p>Curious wanderers of Madagascar</p>
          <Link to="/primates/ring">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>PROBOSCIS MONKEY</h4>
          <p>A peculiar primate of the mangroves</p>
          <Link to="/primates/proboscis">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Canine content will go here */}
    </section>
  );
};

export default Primates;
