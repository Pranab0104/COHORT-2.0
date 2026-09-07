import React from "react";
import Nav from "../components/Nav";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";

const Home = () => {
  return (
    <>
      <Nav />

      <section className="home relative h-screen w-full overflow-hidden before:absolute before:inset-0 before:bg-[url('./public/images/bgc.jpg')] before:bg-cover before:bg-center before:bg-no-repeat before:scale-105">
        <div className="outer-home relative z-10 h-[90%] w-[94%] rounded-4xl bg-[#010101b1]">
          <div className="inner-home relative h-full w-full">
            <h1 className="h-one">one planet</h1>

            <h2 className="h-two">countless stories!</h2>

            <p className="para">
              From the deepest forests to the vastest oceans, discover the
              creatures, landscapes, and stories that make our natural world
              extraordinary.
            </p>

            <h3>
              Explore the wild
              <i>
                <LiaLongArrowAltDownSolid />
              </i>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
