// LoginInput.jsx
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  return (
    <form className="login-input">
      <input
        id="email"
        type="text"
        value={email}
        onChange={onEmailChange}
        placeholder="Username"
      />
      <input
        id="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <button type="button" onClick={() => login({ email, password })}>
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
