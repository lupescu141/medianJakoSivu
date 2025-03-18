import './Home.css';
import RegisterButton from '../components/Registerbutton.tsx';
import LoginButton from '../components/Loginbutton.tsx';
import RegisterDialog from '../components/RegisterDialog.tsx';
import {useState} from 'react';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fullscreen">
      <RegisterDialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
      ></RegisterDialog>
      <div className="container">
        <h1>Welcome to the skaters media sharing platform!</h1>
        <div className="register">
          <ul>
            <li>
              <p>
                start posting awesome pics or videos of your skate sessions by
                registering.
              </p>
            </li>
            <li>
              <RegisterButton></RegisterButton>
            </li>
          </ul>
        </div>
        <div className="login">
          <ul>
            <li>
              <p>Continue showing off your growing legacy!</p>
            </li>
            <li>
              <LoginButton></LoginButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
