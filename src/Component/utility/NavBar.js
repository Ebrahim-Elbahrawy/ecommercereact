import { React, useState, useEffect } from "react";
import {

  Nav,
  NavDropdown,
} from "react-bootstrap";

import NavbarSearchHook from "../../hook/search/navbar-search-hook";
import GetAllUserCart from "./../../hook/cart/get-all-user-cart";
import { Link } from "react-router-dom";

function NavBar() {
  const [onChangeSearch] = NavbarSearchHook();
  const [cartNum] = GetAllUserCart();
  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord");
  const [user, setUser] = useState("");
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };
  useEffect(() => {
    let searchForm = document.querySelector(".search-form");
    document.querySelector("#search-btn").onclick = () => {
      searchForm.classList.toggle("active");

      loginForm.classList.remove("active");
      navbar.classList.remove("active");
    };
    document.querySelector("#cart-btn").onclick = () => {
      searchForm.classList.remove("active");
      loginForm.classList.remove("active");
      navbar.classList.remove("active");
    };

    let loginForm = document.querySelector(".login-form");

    document.querySelector("#login-btn").onclick = () => {
      loginForm.classList.toggle("active");
      searchForm.classList.remove("active");

      navbar.classList.remove("active");
    };

    let navbar = document.querySelector(".navbar");

    document.querySelector("#menu-btn").onclick = () => {
      navbar.classList.toggle("active");
      searchForm.classList.remove("active");

      loginForm.classList.remove("active");
    };

    window.onscroll = () => {
      searchForm.classList.remove("active");

      loginForm.classList.remove("active");
      navbar.classList.remove("active");
    };
  }, []);

  return (
   
<div className="header-fullwidth ">
    <header className="header container">
      <Link to="/" className="logo " style={{ textDecoration: "none" }}>
        <i class="fas fa-shopping-basket ">
          <span className="logo me-2">بيتكم بيتنا</span>{" "}
        </i>
      </Link>

      <nav className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          الرئيسيه
        </Link>
        {user.role === "admin" ? (
          <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
            الصفحه الشخصيه
          </Link>
        ) : (
          <Link to="/user/profile" style={{ textDecoration: "none" }}>
            الصفحه الشخصيه
          </Link>
        )}

        <Link to="/product" style={{ textDecoration: "none" }}>
          المنتجات
        </Link>
        <Link to="/allcategory" style={{ textDecoration: "none" }}>
          التصنيفات
        </Link>

        <Link to="user/favoriteproducts" style={{ textDecoration: "none" }}>
          المنتجات المفضله
        </Link>
      </nav>

      <div className="icons">
        <div className="fas fa-bars" id="menu-btn"></div>
        <div className="fas fa-search" id="search-btn"></div>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="fas fa-shopping-cart postion-relative" id="cart-btn">
            {cartNum}
          </div>
        </Link>
        <div className="fas fa-user" id="login-btn"></div>
      </div>

      <form action="" className="search-form">
        <input
          type="search"
          id="search-box"
          placeholder="ابحث هنا ..."
          value={word}
          onChange={onChangeSearch}
        />
        <label forhtml="search-box" className="fas fa-search ms-3"></label>
      </form>

      <form action="" className="login-form">
           {user != "" ? (
              <NavDropdown title={`اهلا${user.name}`} id="basic-nav-dropdown text-black">
             {user.role === "admin" ? (
               <NavDropdown.Item href="/admin/allproducts">
                 لوحة التحكم
               </NavDropdown.Item>
             ) : (
               <NavDropdown.Item href="/user/profile" className="text-dark">
                 الصفحه الشخصية
               </NavDropdown.Item>
             )}
             <NavDropdown.Divider />
             <NavDropdown.Item
               onClick={logOut}
               href="/"
               className="text-dark"
             >
               تسجيل خروج
             </NavDropdown.Item>
           </NavDropdown>
         ) : (
           <Nav.Link
             href="/login"
             className="nav-text d-flex mt-3 justify-content-center"
           >
             <i className="fa-solid fa-arrow-right-to-bracket  d-flex">
               {" "}
               <p style={{ color: "white" }}>دخول</p>
             </i>
           </Nav.Link>
         )} 

         
      </form>
      </header>
    </div>
  );
}

export default NavBar;
 // <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
    //   <Container>
    //     <Navbar.Brand>
    //       <a href="/">
    //         <img src={logo} className="logo" alt="not founding" />
    //       </a>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <FormControl
    //         value={word}
    //         type="search"
    //         placeholder="ابحث..."
    //         className="me-2 w-100 text-center"
    //         aria-label="Search"
    //         onChange={onChangeSearch}
    //       />
    //       <Nav className="me-auto">
    //         {user != "" ? (
    //           <NavDropdown title={user.name} id="basic-nav-dropdown">
    //             {user.role === "admin" ? (
    //               <NavDropdown.Item href="/admin/allproducts">
    //                 لوحة التحكم
    //               </NavDropdown.Item>
    //             ) : (
    //               <NavDropdown.Item href="/user/profile" className="text-dark">
    //                 الصفحه الشخصية
    //               </NavDropdown.Item>
    //             )}
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item
    //               onClick={logOut}
    //               href="/"
    //               className="text-dark"
    //             >
    //               تسجيل خروج
    //             </NavDropdown.Item>
    //           </NavDropdown>
    //         ) : (
    //           <Nav.Link
    //             href="/login"
    //             className="nav-text d-flex mt-3 justify-content-center"
    //           >
    //             <i className="fa-solid fa-arrow-right-to-bracket text-white d-flex">
    //               {" "}
    //               <p style={{ color: "white" }}>دخول</p>
    //             </i>
    //           </Nav.Link>
    //         )}

    //         <Nav.Link
    //           href="/cart"
    //           className="nav-text   position-relative mt-3"
    //           style={{ color: "white" }}
    //         >
    //           <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger ">
    //             {cartNum}
    //           </span>
    //           <i className="fa-solid fa-cart-shopping  d-flex   ">
    //             {" "}
    //             <p style={{ color: "white" }}>العربه</p>
    //           </i>
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    //