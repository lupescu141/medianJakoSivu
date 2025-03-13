import img from '../../public/button2.png';

const LoginButton = (/*{value, onClick} */) => {
  return (
    <input
      /*value={value}
      onClick={onClick}*/
      type="image"
      alt="register"
      src={img}
      className="LoginButton"
    />
  );
};

export default LoginButton;
