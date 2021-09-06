import React from 'react';
import Link from './Link';
import './component-css/NavBar.css';

const NavBar = () => {
  return (
    <div className="navigation">
      <Link href="/">
        Neon Grenade
      </Link>
      <Link href="#">
        Profile
      </Link>
      <Link href="#">
        Work Experience
      </Link>
      <Link href="#">
        Education History
      </Link>
      <Link href="#">
        Contact
      </Link>
    </div>
  );
};

export default NavBar;