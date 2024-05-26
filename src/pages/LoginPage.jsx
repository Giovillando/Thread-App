// LoginPage.jsx
import React from "react";
import { SiRepublicofgamers } from "react-icons/si";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action.js";

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    // @TODO: dispatch async action to login
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <header className="login-page__hero">
        <h1>
          <SiRepublicofgamers />
        </h1>
      </header>
      <article className="login-page__main">
        <h2>
          Lets
          <strong>Play MLBB</strong>
          <br />
          Having Fun and Discussion in Here All.
        </h2>
        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          <Link to="/register">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
