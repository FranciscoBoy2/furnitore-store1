import { NavLink, Outlet } from "react-router-dom";
import "./general.css";
import { CiUser } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import couch from '../assets/images/couch.png';
const Layout = () => {
  return (
    <>
      <header style={{ display: "flex", flexDirection: "column", height: "600px", backgroundColor: "#3B5D50" }}>
        <div className="zona1" style={{ display: "flex", flexDirection: "column", gap: "100px", padding: "0 150px", paddingTop: "50px" }}>
          <div className="furni" style={{ display: "flex", fontFamily: "inherit", fontSize: "32px", color: "white", fontWeight: "600", justifyContent: "space-between" }}>Furni.
            <div style={{ display: "flex", gap: "60px", fontSize: "16px", color: "white", justifyContent: "end", alignItems: "end" }}>
              <NavLink to="home" className="nav-button">Home</NavLink>
              <NavLink to="aboutUs" className="nav-button">About us</NavLink>
              <NavLink to="services" className="nav-button">Services</NavLink>
              <NavLink to="users" className="nav-button">Blog</NavLink>
              <NavLink to="contact" className="nav-button">Contact us</NavLink>
              <div>
                <CiUser size={25} color="white" />
                <CgShoppingCart size={25} color="white" />
              </div>
            </div>
          </div>
        </div>
        <div className="zona2" style={{ display: "flex", justifyContent: "space-between", padding: "0 150px" }}>
          <div className="zona1" style={{ paddingTop: "100px", display: "flex", flexDirection: "column", gap: "80px" }}>
            <div className="modern" style={{ fontSize: "54px", color: "white", fontWeight: "600" }}>Modern Interior<br />Design Studio</div>
            <div className="buttons">
              <button>Shop Now</button>
              <button>Explore</button>
            </div>
          </div>
          <div className="zona2">
            <img src={couch} alt='Couch' style={{ width: "700px" }} />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export { Layout }