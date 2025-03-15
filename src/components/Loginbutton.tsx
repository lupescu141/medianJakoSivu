import img from '../../public/button2.png';
import {useState} from 'react';

const LoginButton = (/*{value, onClick} */) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const pointer = isHovered ? 'pointer' : 'auto';

  return (
    <button
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'none',
        border: 'none',
        cursor: `${pointer}`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      /*onClick={console.log('click')}*/
    >
      <img src={img} className="LoginButton" alt="folder" />
    </button>
  );
};

export default LoginButton;
