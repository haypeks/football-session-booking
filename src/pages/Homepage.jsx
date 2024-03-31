import React from "react";
import {
  Hero,
  Contact,
  Booking,
  Footer,
  Membership,
} from "../components/index";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Booking />
      <Membership />

      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
