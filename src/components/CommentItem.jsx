// CommentItem.jsx
import React from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import { userShape } from "./ThreadItem";
import VoteButton from "./VoteButton";
import postedAt from "../utils";

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neturalizeVote,
  authUser,
}) {
  return (
    <div className="comment-item">
      <div className="comment-content" style={{ paddingBottom: 0 }}>
        <div
          className="comment-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <div
            className="comment-owner"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FaUserCircle
              style={{ width: 20, height: 20, marginRight: "0.5rem" }}
            />
            <div style={{ fontWeight: "bold", color: "#000" }}>
              {owner.name}
            </div>
          </div>
          <div
            className="comment-time"
            style={{ marginLeft: "auto", color: "#000" }}
          >
            {postedAt(createdAt)}
          </div>
        </div>
        <div
          className="comment-text"
          style={{ marginTop: "1rem", fontWeight: "500", color: "#000" }}
        >
          {parse(content)}
        </div>
      </div>
      <div
        className="comment-actions"
        style={{
          marginLeft: "1rem",
          paddingBottom: "1rem",
          paddingTop: "1rem",
        }}
      >
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </div>
      <hr />
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neturalizeVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

export { commentShape };
