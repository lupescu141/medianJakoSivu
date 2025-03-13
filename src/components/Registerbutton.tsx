import img from '../../public/button1.png';

const RegisterButton = (/*{value, onClick} */) => {
  return (
    <input
      /*value={value}
      onClick={onClick}*/
      type="image"
      alt="register"
      src={img}
      className="registerButton"
    />
  );
};

export default RegisterButton;
