import React from 'react';
import Link from './Link';

const NavBar = () => {
  return (
    <div>
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