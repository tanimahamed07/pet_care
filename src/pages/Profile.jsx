import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import userIcon from '../assets/icons8-user-48.png'
import { Link } from "react-router";
import "animate.css";
const Profile = () => {
    const {user} = use(AuthContext);

  return (
    <div  className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div data-aos="flip-up" data-aos-delay="100" data-aos-anchor=".example-selector" className="bg-base-100 shadow-lg rounded-xl p-6 w-full max-w-md text-center">
        <div className="avatar mx-auto mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary">
            <img
              src={user?.photoURL || userIcon}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-1">
          {user?.displayName}
        </h2>
        <p className="text-gray-500 mb-6">
          {user?.email}
        </p>
        <Link to='/profile-update'><button className="btn btn-primary w-full">Update Profile</button></Link>
      </div>
    </div>
  );
};

export default Profile;
