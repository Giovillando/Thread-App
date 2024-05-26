// ThreadInput.jsx
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput("");
  const [category, onCategoryChange] = useInput("");
  const [body, onBodyChange] = useInput("");

  return (
    <div style={{ marginLeft: "16px", marginTop: "8px", marginBottom: "40px" }}>
      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="title"
          style={{ display: "block", marginBottom: "8px" }}
        >
          Judul
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={onTitleChange}
          style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="category"
          style={{ display: "block", marginBottom: "8px" }}
        >
          Kategori
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={onCategoryChange}
          style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="body" style={{ display: "block", marginBottom: "8px" }}>
          Masukkan Ide Kamu
        </label>
        <textarea
          id="body"
          value={body}
          onChange={onBodyChange}
          rows="4"
          style={{ padding: "8px", width: "100%", boxSizing: "border-box" }}
        />
      </div>
      <button
        onClick={() => addThread({ title, body, category })}
        style={{
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Kirim
      </button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
export default ThreadInput;
