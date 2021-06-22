import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import {
  authenticationUser,
  cleaningIncorrectData,
} from '../../store/auth/action';
import { incorrectDataSelector } from '../../selectors/auth';

import LogoNtu from '../../assets/img/logoNTU.png';

import './signin.scss';

export const Signin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const incorrectData = useSelector(incorrectDataSelector);

  const onSubmit = ({ email, password }) => {
    dispatch(authenticationUser(email, password));
    history.push('/schedule');
  };

  useEffect(() => {
    return () => {
      dispatch(cleaningIncorrectData());
    };
  }, [dispatch]);

  return (
    <div className="signin">
      <div className="signin-container">
        <div className="signin-logo">
          <img src={LogoNtu} alt="logo NTU" />
        </div>
        <div className="signin-text">
          Авторизация
          <br />
          администратора НТУ “ХПИ“
        </div>

        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.username = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} className="signin-form">
              <Field name="email">
                {({ input }) => (
                  <input
                    {...input}
                    type="text"
                    placeholder="Введите вашу почту"
                    className="signin-input"
                  />
                )}
              </Field>
              <Field name="password">
                {({ input }) => (
                  <input
                    {...input}
                    type="password"
                    placeholder="Введите пароль"
                    className="signin-input"
                  />
                )}
              </Field>
              <button
                type="submit"
                disabled={submitting}
                className="signin-button"
              >
                Войти
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
};
