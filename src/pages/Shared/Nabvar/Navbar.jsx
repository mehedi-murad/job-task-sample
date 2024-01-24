import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
          .then(() => {})
          .catch((error) => console.log(error));
      };

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="navbar p-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">JOB TASK</h2>
          </div>
          <div className="flex-none">
            <ul className="flex gap-8 text-white font-semibold">
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
                <h2 className="bg-[#F92659] text-white font-bold px-4 py-2 rounded-xl">{user?.displayName}</h2>
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
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
