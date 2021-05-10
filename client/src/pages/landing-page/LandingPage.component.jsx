import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as HeaderImage } from "../../assets/images/headerImage.svg";
import Navbar from "../../components/navbar/Navbar.component";
import Footer from "../../components/footer/Footer.component";
import "./LandingPage.styles.css";
import img1 from '../../assets/images/easy.png';
import img2 from '../../assets/images/benefit.png';
import img3 from '../../assets/images/support.png';
import img4 from '../../assets/images/register2.png';
import img5 from '../../assets/images/userprofile.png';
import img6 from '../../assets/images/explore.png';
import video1 from '../../assets/images/video1.mp4'

const LandingPage = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Navbar />
      <main id="landing">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="text-container">
                <h1 className="title">Dribbble, but for web developers!</h1>
                <p className="subtitle has-text-grey">
                Gitgram is a portal for web developers and freelancers to showcase their
                  work to the world. Share and get inspired by creatives for
                  free!
                </p>
                <Link to="/signup" className="button primary-bg" style={{textDecoration: 'none'}}>
                  Get Started
                </Link>
              </div>
            </div>
            <div className="column">
              <HeaderImage id="landing-image" />
            </div>
          </div>
        </div>
      </main>

      <div className="build">
   <div className="container">
     <div className="row">
       <div className="col-lg-6">
            <video src={video1}  autoplay loop type="mp4"></video>
       </div>
       <div className="col-lg-4 text-center" >
         <br/>
        <h2><b>Build Your Team with us</b></h2>
        <p>
          This is a website where developers can share their work and explore other Developer' works.
This website provides you a chance to build connections with other developers, to explore new ideas, to learn, and a chance to work with them.
<br/>
 This website provides you an opportunity to team up with other developers to build something amazing.
        </p>
       </div>
     </div>
   </div>
   </div>

     <div className="works">
       <h2 className="display-2 text-center">How it's Works</h2>
          <div className="cont" >
            <div className="imgbx">
              <img src={img4}/>
            </div>
              <h1 >Register Yourself</h1>
              <p >Register Yourself with our website with your customized role  either as a buyer or seller and start exploring.
              </p>
          </div>
     

     <div className="cont2">
  <div className="imgbx">
  <img src={img5} /></div>
  <h1 >Upadte your Profile</h1>
<p >After successful registration now login to your respective account and update the details about yourself.
</p>
</div>

<div className="cont" >
            <div className="imgbx">
              <img src={img6}/>
            </div>
              <h1 >Start Exploring</h1>
              <p >Explore  the work of other developers and try to gain some knowledge along with building your connection.
              </p>
          </div>
     
</div>



      <div className="container text-center d-flex flex-direction:row">
        <div className="row ">
        <h1 className="display-5 my-5"><b>Gitgram Helps You in Building Connection</b></h1>
        <div className="box mx-auto" >
            <img src={img1}/>
            <h2>Easy to Use</h2>
            <p>The designed custom control panel of this website is easy and simple to use.</p>
        </div>
        <div className="box mx-auto">
            <img src={img2}/>
            <h2>Benefits</h2>
            <p>We do more than building connection with this website you can learn more about this field and will gain knowledge.</p>
        </div>
        <div className="box mx-auto">
            <img src={img3}/>
            <h2>24/7 Expert Support</h2>
            <p>We are available here to help when you get stuck — anytime, day or night.</p>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LandingPage);
