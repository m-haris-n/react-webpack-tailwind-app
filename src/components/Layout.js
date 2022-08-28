import React from "react";
import { Link } from "react-router-dom";
import { Header, Container, Divider, Icon } from "semantic-ui-react";

const Layout = ({ children }) => {
  return (
    <div>
      <Link to="/">
        <h1>webpack-for-react</h1>
      </Link>
      {children}
      <hr />
    </div>
  );
};

export default Layout;
