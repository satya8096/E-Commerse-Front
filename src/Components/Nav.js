import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

export default function Nav() {
  let auth = localStorage.getItem("user");
  const [admin, setAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const isAdmin = async () => {
    if (auth === "65e8a40b32f3d9621fe3ac4e") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };
  useEffect(() => {
    isAdmin();
  });

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const navOpen = () => {
    document.querySelector("nav").style.scale = 1;
    setIsOpen(true);
  };

  const navClose = () => {
    document.querySelector("nav").style.scale = 0;
    setIsOpen(false)
  };
  return (
    <div className="d-flex align-items center justify-content-center">
      <header className="d-flex align-items-center justify-content-between">
        <h4>
          Shopy<span style={{ color: "red", fontSize: "1.8rem" }}>K</span>it
        </h4>
        <nav>
          <NavLink className="text-decoration-none" to={"/"}>
            Home
          </NavLink>
          <NavLink className="text-decoration-none" to={"/men"}>
            Men
          </NavLink>
          <NavLink className="text-decoration-none" to={"/women"}>
            Women
          </NavLink>
          <NavLink className="text-decoration-none" to={"/kids"}>
            Kids
          </NavLink>
          <NavLink className="text-decoration-none" to={"/kitchen"}>
            Home&Kitchen
          </NavLink>
          <NavLink className="text-decoration-none" to={"/order"}>
            Order
          </NavLink>
          {admin && (
            <NavLink
              className="text-decoration-none"
              to={"/shopykit/admin/dashboard/"}
            >
              Dashboard
            </NavLink>
          )}
          <Link className="text-decoration-none" to={"/bag"}>
            <i className="fa-solid fa-bag-shopping me-2"></i>
            Bag <span className="badge text-white p3 bg-primary">7</span>
          </Link>
          {auth ? (
            <Link
              className="text-decoration-none text-danger"
              to={"/login"}
              onClick={logout}
            >
              <i className="fa-solid fa-power-off"></i>{" "}
              Logout
            </Link>
          ) : (
            <Link className="text-decoration-none" to={"/signup"}>
              <i className="fa-solid fa-user me-2"></i>
              SignUp
            </Link>
          )}
        </nav>
        <div className="nav-bar-icon" id="nav-bar-icon">
          {isOpen ? (
            <i className="fa-solid fa-square-xmark" onClick={navClose}></i>
          ) : (
            <i
              className="fa-solid fa-bars nav-bar-icon"
              id="bar-icon"
              onClick={navOpen}
            ></i>
          )}
        </div>
      </header>
    </div>
  );
}
