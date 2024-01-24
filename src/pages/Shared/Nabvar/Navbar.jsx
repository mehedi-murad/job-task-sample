import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">JOB TASK</h2>
          </div>
          <div className="flex-none">
            <ul className="flex gap-8">
              <li>
                <Link>
                    Homepage
                </Link>
              </li>
              <li>
                <Link>
                    login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
