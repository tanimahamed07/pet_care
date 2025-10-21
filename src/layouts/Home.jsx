import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Home = () => {
 
  return (
    <div>
      <nav className="">
        <Navbar />
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
