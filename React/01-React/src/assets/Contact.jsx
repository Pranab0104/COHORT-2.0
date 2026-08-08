import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>We'd Love to Hear From You !</h1>

      <p>
        " Every memorable celebration begins with a conversation. Whether you're
        ordering handcrafted pastries, planning a custom cake, or simply have a
        question, we'd love to hear from you. Share your ideas, and let's bake
        something unforgettable together. "
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
