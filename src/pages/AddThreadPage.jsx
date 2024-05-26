// AddThreadPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ThreadInput from "../components/ThreadInput";
import { asyncCreateThread } from "../states/threads/action";

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
    navigate("/");
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <div
        style={{
          padding: "16px",
          marginBottom: "16px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ fontWeight: "bold", marginBottom: "16px" }}>
          Create Thread
        </h2>
        <ThreadInput addThread={onAddThread} />
      </div>
    </div>
  );
}
export default AddThreadPage;
