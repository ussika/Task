import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/add-book">Add Book</Link></li>
          <li><Link to="/remove-book">Remove Book</Link></li>
          <li><Link to="/issue-book">Issue Book</Link></li>
          <li><Link to="/return-book">Return Book</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
