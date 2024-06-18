import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>
        Error: {error.status} : {error.statusText}
      </h1>
      <Link to="/">Back 2 Home</Link>
    </div>
  );
};

export default Error;
