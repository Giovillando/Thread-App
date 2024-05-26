// ThreadReplyInput.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";

function ThreadReplyInput({ replyThread }) {
  const [text, setText] = useState("");

  function replyThreadHandler() {
    if (text.trim()) {
      replyThread(text);
      setText("");
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="thread-reply-input">
      <textarea
        type="text"
        placeholder="Thread your reply"
        value={text}
        onChange={handleTextChange}
      />
      <p className="thread-reply-input__char-left">
        <strong>{text.length}</strong>
      </p>
      <button type="button" onClick={replyThreadHandler}>
        Reply
      </button>
    </div>
  );
}

ThreadReplyInput.propTypes = {
  replyThread: PropTypes.func.isRequired,
};

export default ThreadReplyInput;
