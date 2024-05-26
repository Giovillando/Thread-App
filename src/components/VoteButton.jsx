// VoteButton.jsx
import React from "react";
import PropTypes from "prop-types";
import {
  IoThumbsUpOutline,
  IoThumbsUpSharp,
  IoThumbsDownOutline,
  IoThumbsDownSharp,
} from "react-icons/io5";

function VoteButton({
  id,
  upVote,
  downVote,
  neutralizeVote, // Pastikan nama ini benar
  upVotesBy,
  downVotesBy,
  authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const onNeutralizeVoteClick = () => {
    // Pastikan nama fungsi ini benar
    neutralizeVote(id);
  };

  return (
    <div className="thread-item__likes">
      <div className="like">
        {isUpVoted ? (
          <IoThumbsUpSharp
            onClick={onNeutralizeVoteClick} // Pastikan nama ini benar
            style={{ cursor: "pointer", color: "red" }}
          />
        ) : (
          <IoThumbsUpOutline
            onClick={onUpVoteClick}
            style={{ cursor: "pointer" }}
          />
        )}
        {upVotesBy.length}
      </div>
      <div className="dislike">
        {isDownVoted ? (
          <IoThumbsDownSharp
            onClick={onNeutralizeVoteClick} // Pastikan nama ini benar
            style={{ cursor: "pointer", color: "red" }}
          />
        ) : (
          <IoThumbsDownOutline
            onClick={onDownVoteClick}
            style={{ cursor: "pointer" }}
          />
        )}
        {downVotesBy.length}
      </div>
    </div>
  );
}

VoteButton.propTypes = {
  id: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired, // Pastikan nama ini benar
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};

export default VoteButton;
