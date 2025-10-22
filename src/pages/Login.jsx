import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext, setUser } from "../provider/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const {signInWithEmailAndPasswordFunc} = use(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("User login info:", email, password);
    signInWithEmailAndPasswordFunc(email, password)
    .then(res => {
      console.log(res.user)
      setUser(res.user)
    })
    .catch(e => {
      toast.error(e.message)
    })

  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body w-full md:w-[400px]">
            <h1 className="text-center text-2xl font-bold">Login</h1>
            <form action="" onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
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
