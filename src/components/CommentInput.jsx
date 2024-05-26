// CommentInput.jsx
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput"; // Assuming useInput is defined elsewhere

function CommentInput({ addComment }) {
  const [comment, onCommentChange, setComment] = useInput("");

  const onCommentSubmit = () => {
    if (comment.trim()) {
      addComment(comment);
      setComment("");
    }
  };

  return (
    <div className="comment-input">
      <textarea
        placeholder="Add a comment..."
        value={comment}
        onChange={onCommentChange}
      />
      <p className="comment-input__char-left">
        <strong>{comment.length}</strong>
      </p>
      <button type="button" onClick={onCommentSubmit}>
        Comment
      </button>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
