import React from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Bigcat = () => {
  return (
    <section
      id="bigcats"
      className="cat relative min-h-screen w-full overflow-hidden"
    >
      <h1 className="relative z-10 text-6xl">BIG CATS</h1>

      <p className="upp relative z-10">
        Powerful predators shaped by stealth, strength, and survival.
      </p>

      <div className="container z-10">
        <div id="box1" className="box">
          <span>01</span>
          <h4>LION</h4>
          <p>The pride's powerful leader</p>
          <Link to="/bigcat/lion">
            <i>↗</i>
          </Link>
        </div>

        <div id="box2" className="box">
          <span>02</span>
          <h4>TIGER</h4>
          <p>Solitary master of the wild</p>
          <Link to="/bigcat/tiger">
            <i>↗</i>
          </Link>
        </div>

        <div id="box3" className="box">
          <span>03</span>
          <h4>LEOPARD</h4>
          <p>The stealthy survivor</p>
          <Link to="/bigcat/leopard">
            <i>↗</i>
          </Link>
        </div>

        <div id="box4" className="box">
          <span>04</span>
          <h4>JAGUAR</h4>
          <p>Power of the rainforest</p>
          <Link to="/bigcat/jaguar">
            <i>↗</i>
          </Link>
        </div>

        <div id="box5" className="box">
          <span>05</span>
          <h4>CHEETAH</h4>
          <p>Built for incredible speed</p>
          <Link to="/bigcat/cheetah">
            <i>↗</i>
          </Link>
        </div>

        <div id="box6" className="box">
          <span>06</span>
          <h4>SNOW LEOPARD</h4>
          <p>Ghost of the mountains</p>
          <Link to="/bigcat/snow-leopard">
            <i>↗</i>
          </Link>
        </div>

        <div id="box7" className="box">
          <span>07</span>
          <h4>COUGAR</h4>
          <p>Silent mountain hunter</p>
          <Link to="/bigcat/cougar">
            <i>↗</i>
          </Link>
        </div>

        <div id="box8" className="box">
          <span>08</span>
          <h4>LYNX</h4>
          <p>Elusive forest predator</p>
          <Link to="/bigcat/lynx">
            <i>↗</i>
          </Link>
        </div>
      </div>

      {/* Big Cat content will go here */}
    </section>
  );
};

export default Bigcat;
