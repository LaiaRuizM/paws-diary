// import logoPaws from "../public/PawsDiaryLogo4.png";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <header className="header">
        <Link to={"/"}>
          {/* <img
            className="header__img"
            // src={logoPaws}
            alt="Amazon's logo"
            title="Amazon's logo"
          /> */}
        </Link>
      </header>
      <nav className="nav">
        <ul className="nav__listsHeader">
          <li>
            <Link className="nav__link" to={"/products"}>
              <i className="fa-solid fa-list"></i> Products
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/loginAccount"}>
              <i className="fa-regular fa-user"></i> Login account
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/shoppingCart"}>
              <i className="fa-solid fa-cart-shopping"></i> Shopping cart
            </Link>
          </li>
        </ul>
      </nav>
      <p className="header__text">
        Discover amazing deals, unbeatable prices and exclusive offers on
        Amazon!
      </p>
    </>
  );
};
