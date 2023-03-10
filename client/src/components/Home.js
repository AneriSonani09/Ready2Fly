import React from 'react'
import NavBar from "./NavBar";
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Appointment from './Appointment';
import Search from './Search';
import Footer from './Footer';
import Rules from './Rules';

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Rules />
      <Services />
      <Appointment />
      {/* <Keyur/> */}
      <Search />
      <Footer />
    </div>
  );
}

export default Home
