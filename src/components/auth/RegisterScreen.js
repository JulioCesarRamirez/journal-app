import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: 'Jose',
    email: 'jose@gmail.com',
    password: '123456',
    confirm: '123456',
  });

  const { name, email, password, confirm } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email not valid'));
      return false;
    } else if (password !== confirm || password.length < 5) {
      dispatch(
        setError(
          'Password should be at least 6 characters and match echa other'
        )
      );
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form
        className="animate__animated animate__fadeIn animate__faster"
        onSubmit={handleRegister}
      >
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirm"
          value={confirm}
          onChange={handleInputChange}
          className="auth__input"
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to="/auth/login">
          Already regustered ?
        </Link>
      </form>
    </>
  );
};
