import React from 'react';
import Link from './Link';
import './component-css/NavBar.css';

const NavBar = () => {
  return (
    <div className="navigation">
      <Link href="/" className="link">
        Neon Grenade
      </Link>
      <Link href="#" className="link">
        Profile
      </Link>
      <Link href="#" className="link">
        Work Experience
      </Link>
      <Link href="#" className="link">
        Education History
      </Link>
      <Link href="#" className="link">
        Contact
      </Link>
      <Link href="#" className="link">
        Destiny 2
      </Link>
    </div>
  );
};

export default NavBar;