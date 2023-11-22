import React from "react";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div className="about_us">
      <div className="about_us_container">
        <div className="about_us_content">
          <h2>About</h2>
          <p>
            This handbook compiles various techniques that can be applied in our
            everyday lives to enhance the efficiency of performing daily tasks.
            These methods contribute to improving user experiences with
            technology.
          </p>
        </div>
        <div className="about_us_links">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                  alt="fb"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                  alt="insta"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png"
                  alt="whatsapp"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="https://www.freepnglogos.com/uploads/twitter-x-logo-png/twitter-x-logo-png-9.png"
                  alt="x"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
