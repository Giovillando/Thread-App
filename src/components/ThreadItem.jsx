// ThreadItem.jsx
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { FaComment } from "react-icons/fa";
import VoteButton from "./VoteButton";
import postedAt from "../utils"; // Pastikan impor ini benar

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neutralizeVote, // Pastikan nama ini benar
  threadOwner,
  authUser,
}) {
  const navigate = useNavigate();
  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  return (
    <div
      className="thread-item"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "16px",
        padding: "16px",
      }}
    >
      <div className="thread-item__user-photo">
        <img src={threadOwner.avatar} alt={threadOwner} />
      </div>
      <div
        className="thread-item__detail"
        onClick={onThreadClick}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            onThreadClick();
          }
        }}
        style={{ cursor: "pointer" }}
        role="button"
        tabIndex="0"
      >
        <span className="thread-item__created-at" style={{ marginLeft: "1px" }}>
          {postedAt(createdAt)}
        </span>
        <span style={{ marginLeft: "16px" }}>
          <p className="thread-item__user-name">
            {" "}
            Created By
            {threadOwner.name}
          </p>
        </span>
        <p style={{ fontSize: "16px", color: "#666" }}>{category}</p>
        <h3 style={{ fontWeight: "bold", color: "#333" }}>{title}</h3>
        <div style={{ color: "#333" }}>{parse(body)}</div>
      </div>

      <div
        className="thread-item__likes"
        style={{ marginTop: "16px", display: "flex", alignItems: "center" }}
      >
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neutralizeVote={neutralizeVote} // Make sure this prop is passed
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <FaComment style={{ marginLeft: "8px" }} />
        <span style={{ marginLeft: "4px" }}>{totalComments}</span>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired, // Pastikan nama ini benar
};

export { threadItemShape, userShape };
export default ThreadItem;
