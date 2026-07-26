import React from "react";

const Home = () => {
  return (
    <section className="homepage">
      <img
        src="https://i.pinimg.com/1200x/c6/0a/d6/c60ad60cd50bc7fe83011e727ab032ac.jpg"
        alt="Fresh bakery products"
      />

      <div className="heroContent">
        <h1>
          Crafted With <span>"Love",</span> Baked to <span>"Perfection".</span>
        </h1>
        <h2>Just for You!</h2>
        <p>Every loaf, pastry, and dessert is baked fresh each day using carefully selected ingredients, bringing warmth, flavor, and happiness to your table.</p>
        <button>Order Now</button>
      </div>
    </section>
  );
};

export default Home;
