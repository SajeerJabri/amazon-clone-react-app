import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import ContextData from "../../ContextData/ContextData";
import { auth } from "../../firebase";

const Header = () => {
  const { baskets, user } = useContext(ContextData);
  //handle authentication using function
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img src="img/logo.png" alt="logo" className="header__logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option_one">
              Hello, {!user ? "Guest" : user?.email}
            </span>
            <span className="header__option_two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option_one">Returns</span>
          <span className="header__option_two">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option_one">Your</span>
          <span className="header__option_two">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__option_two header__basketCount">
              {baskets?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
