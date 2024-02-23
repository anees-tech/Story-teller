import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import HeaderForPages from "./HeaderForPages";

function Contact() {
  return (
    <>
      <Navbar />
      <HeaderForPages heading={"CONTACT US"} para={"We are here for your service and we will LOVE you hear out from you!"}/>
      <ContactForm/>
      <Footer />
    </>
  );
}

export default Contact;
