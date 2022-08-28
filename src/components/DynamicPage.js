import React from "react";
import { Header } from "semantic-ui-react";

import Layout from "./Layout";

const DynamicPage = () => {
  return (
    <Layout>
      <Header>Dynamic Page with hot reload</Header>
      <p>This page was loaded asynchronously!!!</p>
    </Layout>
  );
};

export default DynamicPage;
