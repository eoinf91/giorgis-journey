import React from "react";
import { Link } from "gatsby";

// Components
import SocialLinks from "./SocialLinks/SocialLinks.component";

// Styles
import "./Header.styles.scss";

// Assets
import Logo from "../../Assets/logo.asset";

const Header = () => (
  <header>
    <Logo />
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
    <SocialLinks />
  </header>
);

export default Header;
