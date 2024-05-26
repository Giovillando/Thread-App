// LeaderBoardItem.jsx
import React from "react";
import PropTypes from "prop-types";
import { userShape } from "./ThreadItem";

function LeaderBoardItem({ user, score }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
    >
      <div style={{ marginRight: "16px" }}>
        <img
          src={user.avatar}
          alt="Avatar Icon"
          style={{ width: "34px", height: "34px", borderRadius: "50%" }}
        />
      </div>
      <div>
        <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "medium" }}>
          {user.name}
        </h3>
      </div>
      <div
        style={{ marginLeft: "auto", fontSize: "20px", fontWeight: "medium" }}
      >
        {score}
      </div>
    </div>
  );
}

LeaderBoardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};
export default LeaderBoardItem;
