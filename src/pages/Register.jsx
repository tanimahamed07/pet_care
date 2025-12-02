import React, { use, useState } from "react";
// import { AuthContext } from "../provider/AuthContext";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthContext";
import "animate.css";

const Register = () => {
  const [error, setError] = useState();
  const [toggle, setToggle] = useState();
  const {
    signUpWithEmailAndPassFunc,
    updateProfileFunc,
    setUser,
    setLoading,
    signInWithGoogle,
    user,
  } = use(AuthContext);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
    return;
  }
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name?.value;
    const photo = e.target.photo?.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[0-9]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters, include 1 uppercase and 1 lowercase letter"
      );
      return;
    }
    signUpWithEmailAndPassFunc(email, password)
      .then((res) => {
        setLoading(false);
        const user = res.user;
        updateProfileFunc({ displayName: name, photoURL: photo })
          .then(() => {
            setUser((prev) => {
              setLoading(false);
              setUser({ ...prev, displayName: name, photoURL: photo });
              navigate("/");
            });
            toast.success("Register successful");
          })
          .catch((error) => {
            toast.error(error.message);
            setUser(user);
          });
      })
      .catch((error) => toast.error(error.message));
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        setLoading(false);
        setUser(res.user);
        toast.success("Register successful");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="hero min-h-screen flex justify-center items-center">
      <div
        className="hero-content flex-col w-full"
      >
        <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-center text-2xl font-bold">Register</h1>

            <form onSubmit={handleRegister} className="space-y-3">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Photo URL Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="https://example.com/photo.jpg"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
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

                {/* Error Message Display */}
                {error && <p className="text-red-500 text-xs mb-2">{error}</p>}

                <div className="relative w-full">
                  <input
                    name="password"
                    type={toggle ? "text" : "password"}
                    className="input input-bordered w-full pr-10"
                    placeholder="Password"
                    required
                  />
                  {/* Icon Fix: right-3 ব্যবহার করা হয়েছে */}
                  <span
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                    onClick={() => setToggle(!toggle)}
                  >
                    {toggle ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                  </span>
                </div>
              </div>

              {/* Register Button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full">Register</button>
              </div>

              {/* Google Register */}
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
                  Register with Google
                </button>
              </div>
            </form>

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:underline font-semibold"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
