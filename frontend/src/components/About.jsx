import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import HeaderForPages from "./HeaderForPages";
function About() {
  return (
    <>
      <Navbar />
      <HeaderForPages heading={"ABOUT US"} para={"We Are the best scented candles business in Lahore."}/>
      <Testimonial/>
      <Footer />
    </>
  );
}

export default About;
