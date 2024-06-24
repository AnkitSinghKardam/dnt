import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Logo } from "../../components";
import AdminLinks from "../../utils/adminLinks";
const Admin = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b flex justify-between items-center">
          <Logo className="" />
          <h1 className="text-2xl pe-4">Hi Admin</h1>
        </div>
        <div className="flex">
          <div className="w-1/5 border-e py-3 ps-5">
            {AdminLinks.map((item) => (
              <div className="mb-1" key={item.path}>
                <Link to={item.path} className="capitalize">
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
          <div className="w-4/5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
