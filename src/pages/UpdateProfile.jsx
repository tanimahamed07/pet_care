import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import toast from "react-hot-toast";


const UpdateProfile = () => {
  const { updateProfileFunc, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
      e.preventDefault()
    const name = e.target.name.value
    const photo = e.target.photo.value
    updateProfileFunc({ displayName: name, photoURL: photo })
              .then(() => {
                setUser((prev) => {
                  setUser({ ...prev, displayName: name, photoURL: photo });
                  navigate("/profile");
                });
                toast.success("Register successful");
              })
    .then()
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div data-aos="flip-up" data-aos-delay="100" data-aos-anchor=".example-selector" className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl">
          <div className="card-body w-full">
            <h1 className="text-center text-2xl font-bold">Update Profile</h1>
            <form action="" onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Update Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Update Photo</label>
                <div className="relative">
                  <input
                    name="photo"
                    type="text"
                    className="input w-[290px]"
                    placeholder="Photo"
                  />
                </div>
                <div></div>
                <button className="btn btn-neutral mt-4">Update Profile</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
