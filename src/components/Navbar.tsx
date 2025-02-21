import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-left">
        <a href="/" className="logo">
          SKATE
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/account" className="user-icon">
          <FontAwesomeIcon icon={faCircleUser} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
