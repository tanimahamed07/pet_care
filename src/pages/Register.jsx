import React from 'react';

const Register = () => {
    const handleRegister = () => {

    }
    return (
          <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body w-full md:w-[400px]">
            <h1 className="text-center text-2xl font-bold">Register</h1>
            <form action="" onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text"  className="input" placeholder="Name" />
                <label className="label">Photo</label>
                <input type="photo" className="input" placeholder="Photo Url" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;