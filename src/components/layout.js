import * as React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Header />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
