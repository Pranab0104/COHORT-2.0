import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Baked for Every Special Moment !</h1>

      <p>
        " Whether it's your morning coffee or life's biggest celebrations, every
        bake is made to create memories. ".
      </p>
      <div className="conta">
        <div className="Card">
          <div className="Baxxaa">
            <div className="imgBox">
              <img src="./images/background.jpg" alt="" />
              <h1>WE'D LOVE TO HEAR FROM YOU !</h1>
              <h2>Let's make your next moment a little sweeter.</h2>
            </div>
          </div>

          <div className="contactForm">
            <div className="booxe">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="booxe">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="booxe">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>

            <div className="booxe">
              <label>Message</label>
              <textarea placeholder="Write your message..."></textarea>
            </div>

            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
