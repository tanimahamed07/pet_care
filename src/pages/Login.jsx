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
    setControlledEmail,
    controlledEmail,
  } = use(AuthContext);
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
    <div className="hero min-h-screen flex items-center justify-center">
      <div className="hero-content flex-col w-full">
        <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-center text-2xl font-bold mb-4">Login</h1>

            <form onSubmit={handleLogin} className="space-y-3">
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  value={controlledEmail}
                  onChange={(e) => setControlledEmail(e.target.value)}
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="email@example.com"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative w-full">
                  <input
                    name="password"
                    type={toggle ? "text" : "password"}
                    className="input input-bordered w-full pr-10"
                    placeholder="Password"
                    required
                  />
                  <span
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                    onClick={() => setToggle(!toggle)}
                  >
                    {toggle ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </span>
                </div>
                <label className="label">
                  <Link
                    to="/forget-password"
                    class="label-text-alt link link-hover text-blue-600"
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>

              {/* Login Button */}
              <div className="form-control mt-6">
                <button className="btn btn-neutral w-full">Login</button>
              </div>

              {/* Google Login */}
              <div className="form-control">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="btn w-full bg-white text-black border-[#e5e5e5] hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <svg
                    aria-label="Google logo"
                    width="18"
                    height="18"
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
              </div>
            </form>

            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:underline font-semibold"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
