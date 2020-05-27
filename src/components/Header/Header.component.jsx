import React from 'react';
import { Link } from 'gatsby';

// Components
import SocialLinks from './SocialLinks/SocialLinks.component';
import Cart from '../Navigation/index';

// Styles
import './Header.styles.scss';

// Assets
import Logo from '../../Assets/logo.asset';

const Header = () => (
    <header>
        <Logo />
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Cart />
                </li>
            </ul>
        </nav>
        <SocialLinks />
    </header>
);

export default Header;