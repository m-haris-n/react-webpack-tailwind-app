import React from "react";
import { Link } from "react-router-dom";

import Layout from "./Layout";

const Home = () => {
  return (
    <div>
      <p className="text-7xl font-bold">
        Hello World of React and Webpack! (and now tailwindcss too X))
      </p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page with hot reload</Link>
      </p>
    </div>
  );
};

export default Home;
