import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import profileImg from "../../../assets/Profile/user.png"

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
          .then(() => {})
          .catch((error) => console.log(error));
      };

  return (
    <div className="glass">
      <div className="max-w-7xl mx-auto">
        <div className="navbar p-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">JOB TASK</h2>
          </div>
          <div className="flex-none">
            <ul className="flex gap-8 font-semibold">
              <li>
                <Link>
                    Homepage
                </Link>
              </li>
              
                <li>
                    {user ?
                        <li>
                            <p onClick={handleLogOut}>Logout</p>
                        </li>
                        :
                        <li>
                            <Link to="/login">
                                login
                            </Link>
                        </li>
                    }
                </li>
              

              <li>
                <h2 className="bg-[#F92659] text-white font-bold px-4 py-2 rounded-xl">
                    {
                        user ?
                        <p>{user?.displayName}</p>
                        :
                        <p>User Name</p>
                    }
                </h2>
              </li>
            </ul>
            <div>
            <div className="avatar ml-6">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {/* Showing user profile image */}
                { 
                    user ?
                    <img src={user?.photoURL} />
                    :
                    <img src={profileImg} />
                }
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
