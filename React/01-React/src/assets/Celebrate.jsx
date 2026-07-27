import React from "react";

const Celebrate = () => {
  return (
    <div className="celeBrate">
      <h1>Baked for Every Special Moment !</h1>

      <p>
        " Whether it's your morning coffee or life's biggest celebrations, every
        bake is made to create memories. ".
      </p>
      <div className="cont">
        <div className="featCard">
          <div className="Baxa">
            <img src="./images/morning.png" alt="" />
          </div>

          <div className="boox">
            <h2>☀️ Morning Bliss</h2>
            <p>
              Start your day with buttery croissants, artisan breads, and
              freshly brewed coffee, bringing warmth and energy to every
              morning.
            </p>
          </div>
        </div>

        <div className="featCard">
          <div className="boox">
            <h2>🎂 Every birthday deserves something sweet.</h2>
            <p>
              From elegant cakes to delightful desserts, we create handcrafted
              treats that turn every celebration into a lasting memory.
            </p>
          </div>

          <div className="Baxa">
            <img src="./images/moment.jpg" alt="" />
            {/* <h1>Handmade Daily</h1> */}
          </div>
        </div>

        <div className="featCard">
          <div className="Baxa">
            <img src="./images/wedding.jpg" alt="" />
            {/* <h1>Fresh Ingredients</h1> */}
          </div>

          <div className="boox">
            <h2>💍 Wedding Moments</h2>
            <p>
              Celebrate love with handcrafted wedding cakes and elegant dessert
              collections designed to make your special day unforgettable.
            </p>
          </div>
        </div>

        <div className="featCard">
          <div className="boox">
            <h2>❤️ Family Gatherings</h2>
            <p>
              Fresh breads, pastries, and homemade goodness that bring everyone
              together around one table.
            </p>
          </div>

          <div className="Baxa">
            <img src="./images/family.jpg" alt="" />
            {/* <h1>Handmade Daily</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celebrate;
