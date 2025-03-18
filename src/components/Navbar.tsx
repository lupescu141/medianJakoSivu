import {useState} from 'react';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {DropdownMenu, DropdownMenuNotLoggedIn} from './DropdownMenu';
import {Link} from 'react-router-dom';

const Navbar = (profileImg) => {
  /* Handles the visibility of dropdown vindow */
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  /* will be replaced by user context */
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-left">
        <Link to="/" className="logo">
          SKATE
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/posts" className="link">
              Posts
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="navbar-right"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!isLoggedIn && <FontAwesomeIcon icon={faCircleUser} />}
        {/* Image will be replaced with ProfileImg prop*/}
        {isLoggedIn && (
          <img
            className="profileImg"
            src="src\mockup_delete_on_build\shrek.jpg"
            alt="Profile picture"
          ></img>
        )}
        {/* <DropdownMenuNotLoggegIn /> */}
        {!isLoggedIn && isDropdownVisible && <DropdownMenuNotLoggedIn />}
        {/* <DropdownMenu /> */}
        {isLoggedIn && isDropdownVisible && <DropdownMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
