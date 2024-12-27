import React from "react";
import Navbar from "./Navbar";
import PropsTypes from "prop-types";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
Layout.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default Layout;
