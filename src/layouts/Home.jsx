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
      <nav className="bg-base-300 shadow-sm">
        <Navbar />
      </nav>
      <main>
        {state == 'loading' ? <Spinner/> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer />
      </footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Home;
