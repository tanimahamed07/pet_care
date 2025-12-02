import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import Spinner from "../pages/Spinner";

const Home = () => {
  const { state } = useNavigation();
  return (
    <div>
      <nav className="fixed top-0 bg-base-200 w-full z-50">
        <Navbar />
      </nav>
      <main>{state == "loading" ? <Spinner /> : <Outlet></Outlet>}</main>
      <footer>
        <Footer />
      </footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Home;
