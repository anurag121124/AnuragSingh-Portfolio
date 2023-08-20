import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import anurag from "../Images/Anuragsingh.jpg";

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <main>
        <section>
          <div className="HeroContainer" data-aos="fade-left">
            <div className="LeftHeroContainer">
              <div className="HeroTitle">
                <div className="Heading">
                  <span>Hi, this is </span>
                  <br />
                  <h1>Anurag Singh</h1>
                </div>
                <div className="OurPosition">
                  <h2>Software Engineer</h2>
                </div>
              </div>
              <div className="Description">
                <p>
                I am a software engineer with a formidable background in multiple technologies and programming languages, including JavaScript, React, Node.js, and PHP custom theme and plugin development, as well as Android application design and development, and website management and development utilizing Oracle and SQL databases. My proficiency in website building and extensive knowledge in the creation and implementation of WordPress and Shopify websites, including design and plugin utilization, establishes me as a subject matter expert. My capability to conceive interactive and engaging websites and my comfort level in collaborating with teams and assuming leadership positions make me an ideal candidate. My meticulous attention to detail and proficiency in multiple programming languages further solidify my worth as a valuable asset to any organization. Additionally, my expertise in e-commerce portal management, combined with my proficiency in utilizing tools such as WooCommerce, email marketing, Facebook campaigns, and logistics management, serve to augment my skill set and make me an indispensable contributor to any team.
                  <br />
                  <br />
                  Working for myself to imporve my skills.
                </p>

                <div className="HeroSectionButton">
                  <button className="HeroSectionButton1">Download CV</button>
                  <a href="#getintouch">
                    <button className="HeroSectionButton2">Contact</button>
                  </a>
                  <Link to="/contact"></Link>
                </div>
              </div>
            </div>

            <div className="RightHeroContainer">
              <img src={anurag}alt="OurImage" />
            </div>

            
          </div>

          {/* <div className="HeroContainer" data-aos="fade-left">
            <div className="LeftHeroContainer">
              <div className="RightHeroIntro">
                <div className="Heading">
                  <span>Hi, my name is </span>
                  <br />
                  <h1>Rajiv Ranjan</h1>
                </div>
                <div className="OurPosition">
                  <h2>Frontend developer</h2>
                </div>
              </div>
              <div className="Description">
                <p>
                  I'm a WebDeveloper with learing experience of 1 year.
                  Currently pursing BCA from Vinoba Bhave University. I am very
                  passionate about improving my coding skill & developing
                  website and applications.
                  <br />
                  <br />
                  Working for myself to imporve my skills.
                </p>
              </div>
              <div className="HeroSectionButton">
                <button className="HeroSectionButton1">Download CV</button>
                <a href="#getintouch">
                  <button className="HeroSectionButton2">Contact</button>
                </a>
                {/* <Link to="/contact"></Link> */}
          {/* </div>
            </div>

            <div className="RightHeroContainer">
              <div className="Image">
                <img src={Rajiv} alt="OurImage" />
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </>
  );
}

export default HeroSection;
