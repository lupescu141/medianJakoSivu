import img from '../../public/button1.png';
import {useState} from 'react';

const RegisterButton = (/*{value, onClick} */) => {
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
      <img src={img} className="registerButton" alt="folder" />
    </button>
  );
};

export default RegisterButton;
