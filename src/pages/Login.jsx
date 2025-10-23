import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import "animate.css";
const Login = () => {
  const {
    signInWithEmailAndPasswordFunc,
    setUser,
    signInWithGoogle,
    setLoading,
    user,
    setControlledEmail,
    controlledEmail,
  } = use(AuthContext);
  console.log(controlledEmail)
  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();
 
  const [toggle, setToggle] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Signin successful");
        navigate(from);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Signin successful");
        navigate(from);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div data-aos="flip-up" data-aos-delay="100" data-aos-anchor=".example-selector" className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body w-full">
            <h1 className="animate__animated animate__bounce text-center text-2xl font-bold">
              Login
            </h1>
            <form action="" onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  value={controlledEmail}
                  onChange={(e) => setControlledEmail(e.target.value)}
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={toggle ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                  />
                  <span
                    className="absolute top-1/2 left-55 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setToggle(!toggle)}
                  >
                    {toggle ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <div>
                  <Link to="/forget-password" className="link link-hover">
                    Forgot password?
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                {/* <!-- Google --> */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
                <p className="text-center text-sm mt-4">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="text-blue-500 hover:underline font-semibold"
                  >
                    Register here
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
