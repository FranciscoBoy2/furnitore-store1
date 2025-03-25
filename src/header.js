import React from "react";
import { Routes, Route, } from "react-router-dom";
import { Home } from "./Pages/HomePage";
import { Services } from "./Pages/Services";
import { AboutUs } from "./Pages/AboutUs";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { Layout } from "./Components/Layout";
function Header() {
  return (
    <div style={{minHeight:"200vh",backgroundColor:"#EFF2F1"}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      
        {/* <div className="buttons">
          <button>Shop Now</button>
          <button>Explore</button>
        </div> */}
    </div>
  );
}

export default Header;


