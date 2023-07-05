import logoPaws from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FC } from "react";
import { HeaderProps } from "./header.interface";
import { HeaderStyled } from "./header.styles";
import { Button } from "../button";

export const Header: FC<HeaderProps> = ({ children, className, ...props }) => {
  return (
    <>
      <HeaderStyled {...props} className={className}>
        {children}
        <header className="header">
          <Link to={"/"}>
            <img
              className="header__img"
              src={logoPaws}
              alt="Amazon's logo"
              title="Amazon's logo"
            />
          </Link>
          <nav className="nav">
            <ul className="nav__listsHeader">
              <li>
                <Button className="nav__link">
                  <i className="fa-regular fa-user"></i> Login account
                </Button>
              </li>
            </ul>
          </nav>
        </header>
      </HeaderStyled>
    </>
  );
};
