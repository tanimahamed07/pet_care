import React, { use, useState } from "react";
// import { AuthContext } from "../provider/AuthContext";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthContext";

const Register = () => {
  const [error, setError] = useState();
  const [toggle, setToggle] = useState();
  const { signUpWithEmailAndPassFunc , user, setUser} = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const passwordRegex = /^(?=.*[0-9]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters, include 1 uppercase and 1 lowercase letter"
      );
      return;
    }
    signUpWithEmailAndPassFunc(email, password)
      .then((res) => {
        setUser(res.user);
        // console.log(user);
        navigate("/");
      })
      .catch((error) => toast(error.message));
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body w-full md:w-[400px]">
            <h1 className="text-center text-2xl font-bold">Register</h1>
            <form action="" onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" />
                <label className="label">Photo</label>
                <input type="text" className="input" placeholder="Photo Url" />
                <label className="label">Email</label>

                <input
                  name="email"
                  className="input"
                  type="email"
                  placeholder="Email"
                />

                <label className="label">Password</label>
                {error && (
                  <p className="text-red-400">
                    Password must be at least 6 characters, include 1 uppercase
                    and 1 lowercase letter
                  </p>
                )}
                <div className="relative">
                  <input
                    name="password"
                    type={toggle ? "text" : "password"}
                    className="input w-full pr-10"
                    placeholder="Password"
                  />
                  <span
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                    onClick={() => setToggle(!toggle)}
                  >
                    {toggle ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
                <p className="text-center text-sm mt-4">
                  Already have an account?
                  <Link to="/login">
                    <span className="text-blue-500 hover:underline font-semibold">
                      {" "}
                      Login here
                    </span>
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

export default Register;
