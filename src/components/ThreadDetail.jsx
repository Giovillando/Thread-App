// ThreadDetail.jsx
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { FaUserCircle } from "react-icons/fa";
import { userShape } from "./ThreadItem";
import VoteButton from "./VoteButton";
import postedAt from "../utils";

function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neturalizeVoteThreadDetail,
  authUser,
}) {
  return (
    <div
      className="thread-detail"
      style={{
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    >
      <div className="thread-detail__content" style={{ marginBottom: "16px" }}>
        <p style={{ fontSize: "16px", color: "#666" }}>{category}</p>
        <h3 style={{ fontWeight: "bold", color: "#333" }}>{title}</h3>
        <div style={{ color: "#333" }}>{parse(body)}</div>
      </div>
      <div
        className="thread-detail__actions"
        style={{ display: "flex", alignItems: "center" }}
      >
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVoteThreadDetail}
          downVote={downVoteThreadDetail}
          neturalizeVote={neturalizeVoteThreadDetail}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "8px" }}
        >
          <FaUserCircle style={{ marginRight: "4px" }} />
          <span>{owner.name}</span>
        </div>
        <span style={{ marginLeft: "16px" }}>{postedAt(createdAt)}</span>
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neturalizeVoteThreadDetail: PropTypes.func.isRequired,
};
export default ThreadDetail;
