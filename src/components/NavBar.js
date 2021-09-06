import React from 'react';
import Link from './Link';
import './component-css/NavBar.css';

const NavBar = () => {
  return (
    <div className="navigation">
      <Link href="/" className="link">
        Neon Grenade
      </Link>
      <Link href="/profile" className="link">
        Profile
      </Link>
      <Link href="/employment" className="link">
        Employment History
      </Link>
      <Link href="/education" className="link">
        Education History
      </Link>
      <Link href="/contact" className="link">
        Contact
      </Link>
      <Link href="/destiny" className="link">
        Destiny 2
      </Link>
    </div>
  );
};

export default NavBar;