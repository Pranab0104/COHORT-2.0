import React from "react";

const About = () => {
  return (
    <div className="chooseUs">
      <h1>Why Choose Us ?</h1>

      <p>
        " At our bakery, quality is never compromised. We carefully select the
        finest flour, farm-fresh dairy, premium butter, and natural ingredients
        to create handcrafted bakery delights. Every recipe is prepared in small
        batches and baked fresh daily, ensuring rich flavors, soft textures, and
        the comforting taste of homemade goodness in every bite ".
      </p>
      <div className="contain">
        <div className="featureCard">
          <div className="Boxes">
            <img src="./images/ingredients.png" alt="" />
            <h1>Fresh Ingredients</h1>
          </div>

          <p>
            Only premium flour, rich butter, farm-fresh dairy, and natural
            ingredients in every recipe.
          </p>
        </div>

        <div className="featureCard">
          <div className="Boxes">
            <img src="./images/made.jpg" alt="" />
            <h1>Handmade Daily</h1>
          </div>

          <p>
            Every loaf, pastry, and dessert is prepared in small batches and
            baked fresh each morning.
          </p>
        </div>

        <div className="featureCard">
          <div className="Boxes">
            <img src="./images/quality.jpg" alt="" />
            <h1>Premium Quality</h1>
          </div>

          <p>
            Traditional recipes, modern techniques, and attention to every
            detail create unforgettable flavors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
