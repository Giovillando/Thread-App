// HomePage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ThreadsList from "../components/ThreadsList";
import asyncPopulateUsersAndThreads from "../states/shared/action";
import {
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeturalizeVoteThread,
} from "../states/threads/action";
import { FaPlus } from "react-icons/fa";

function HomePage() {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const categories = new Set(threads.map((thread) => thread.category));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVoteThread = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteThread = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralizeVoteThread = (id) => {
    dispatch(asyncNeturalizeVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    threadOwner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <div className="container">
      <div className="category-buttons">
        {Array.from(categories).map((category) => (
          <button
            key={category}
            className={`btn ${
              filter === category ? "btn-primary" : "btn-outline-primary"
            } mr-2 mb-2`}
            onClick={() => setFilter(filter === category ? "" : category)}
          >
            {`#${category}`}
          </button>
        ))}
      </div>

      <ThreadsList
        threads={
          filter
            ? threadList.filter((thread) => thread.category === filter)
            : threadList
        }
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
        neutralizeVote={onNeutralizeVoteThread} // Make sure this prop is passed
      />

      <Link to="/new" className="add-thread-link">
        <div className="fab">
          <FaPlus />
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
