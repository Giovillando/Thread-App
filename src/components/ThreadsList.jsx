// ThreadList.jsx
import React from "react";
import PropTypes from "prop-types";
import ThreadItem from "./ThreadItem";
import { ThreadsListWrapper } from "./styled/StyledComponents";

function ThreadsList({ threads, upVote, downVote, neutralizeVote }) {
  return (
    <ThreadsListWrapper>
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          {...thread}
          upVote={upVote}
          downVote={downVote}
          neutralizeVote={neutralizeVote}
        />
      ))}
    </ThreadsListWrapper>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      totalComments: PropTypes.number.isRequired,
      threadOwner: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }).isRequired,
      authUser: PropTypes.string.isRequired,
      upVote: PropTypes.func.isRequired,
      downVote: PropTypes.func.isRequired,
      neutralizeVote: PropTypes.func.isRequired,
    })
  ).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
};

export default ThreadsList;
