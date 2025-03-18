import React, {useState} from 'react';

const RegisterDialog = ({open, onClose}) => {
  return (
    <dialog open={open} onClose={onClose}>
      <div>
        <form action="submit">
          <input type="email" name="email" />
          <input type="username" name="username" />
          <input type="password" name="password" />
          <input type="password" name="confirm_password" />
        </form>

        <button onClick={onClose}>Cancel</button>
      </div>
    </dialog>
  );
};

export default RegisterDialog;
