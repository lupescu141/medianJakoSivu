import './Home.css';
import RegisterButton from '../components/Registerbutton.tsx';
import LoginButton from '../components/Loginbutton.tsx';

const Home = () => {
  return (
    <div className="fullscreen">
      <div className="container">
        <h1>Welcome to the skaters media sharing platform!</h1>
        <div className="middle">
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
                <p>Continue showing off your growing legacy! Login to post.</p>
              </li>
              <li>
                <LoginButton></LoginButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
