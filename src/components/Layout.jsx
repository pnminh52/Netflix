import React from "react";
import Navbar from "./Navbar";
import PropsTypes from "prop-types";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
Layout.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default Layout;
