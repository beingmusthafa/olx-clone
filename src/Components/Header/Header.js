import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/context";
function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  function handleLogout() {
    auth.signOut().then(() => {
      setUser(null);
      navigate("/login");
      console.log("logged out");
    });
  }
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div
          style={{ cursor: "pointer" }}
          className="brandName"
          onClick={() => navigate("/")}
        >
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        {user ? (
          <div className="loginPage" onClick={handleLogout}>
            <span>Logout</span>
            <hr />
          </div>
        ) : (
          <div className="loginPage" onClick={() => navigate("/login")}>
            <span>Login</span>
            <hr />
          </div>
        )}

        <div className="sellMenu" onClick={() => navigate("/create")}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
