import React from "react";
import { Button, InputElm } from "../../components";

const Login = () => {
  return (
    <>
      <div className="card rounded-none flex flex-col w-1/3 mx-auto py-5">
        <InputElm label="Username" placeholder="username" className="mb-5" />
        <InputElm
          label="Password"
          className="mb-5"
          type="password"
          placeholder="password"
        />
        <Button children="Login" />
      </div>
    </>
  );
};

export default Login;
