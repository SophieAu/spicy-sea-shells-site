import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Profiles from "./Profiles/Profiles.js";
import Sidebar from "./Sidebar/Sidebar.js";
import "./index.scss";

const App = () => (
  <>
    <Header />
    <Sidebar />
    <Profiles />
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
