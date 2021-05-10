import React from "react";
import'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer id="footer">
      {/* <h1>
        Made with love by <span>Deepti Singh & Monika Singh</span>
      </h1> 
      
      */}
      <div className="conatiner">
        <div className="row mx-auto py-5">
          <div className="col-lg-3 ml-5">
          <h1>About US</h1>
        <p>Gitgram is an portal for web developers and freelancers to showcase their work to the world. Share and get inspired by creatives for free!</p>
          </div>
          <div className="col-lg-3 col-md-4 contact">
          <h1>Contact US</h1>
          <p>
          <i class="fa fa-map-marker mr-5" aria-hidden="true"></i> GLA UNIVERSITY,Mathura
          </p>
          <p>
          <i className="fa fa-phone mr-5"></i> 911234567
          </p>
          <p>
          <i className="fa fa-envelope mr-5 "></i> support@mail.com
          </p>
          </div>
          <div className="col-lg-3 ">
          <h1>Quick Links</h1>
          <div className="socialIcons">
          <a href="https://facebook.com">
          <i className="fab fa-facebook mr-5"></i> Facebook
        </a>
        <a href="https://instagram.com/singhmonika04">
          <i className="fab fa-instagram mr-5"></i> Instagram
        </a>
        <a href="https://twitter.com">
          <i className="fab fa-twitter mr-5"></i> Twitter
        </a>
        <a href="https://www.linkedin.com">
          <i className="fab fa-linkedin mr-5"></i>Linkedin
        </a>
       

      </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
