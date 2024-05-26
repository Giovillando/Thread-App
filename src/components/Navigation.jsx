// Navigation.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { SiRepublicofgamers } from "react-icons/si";

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  return (
    <div className="navigation">
      <img src={avatar} alt={id} title={name} />
      <nav>
        <Link to="/">
          <FiHome />
        </Link>
        <Link to="/leaderboard">
          <MdOutlineLeaderboard />
        </Link>
        <Link to="/" onClick={signOut}>
          <BiLogIn />
        </Link>
      </nav>
      <div className="logo">
        <Link to="/">
          <SiRepublicofgamers alt="Logo" />
          <p>Forum ML</p>
        </Link>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
