import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function LayoutAdmin({children}) {
  return (
    <>
      <Header></Header>
      <div className="container">{children}</div>
      <Footer></Footer>
    </>
  );
}

export default LayoutAdmin;
