// src/pages/Contact.jsx
import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

export default function Contact() {  
  return (
    <div>
      <Navigation />
      <ContactForm/>
      <Footer />
    </div>
  );
}