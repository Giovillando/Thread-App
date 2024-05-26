import React from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { FaUserCircle } from "react-icons/fa";
import {
  CommentItemWrapper,
  CommentHeader,
  CommentOwner,
  CommentTime,
  CommentText,
  CommentActions,
} from "./styled/StyledComponents";
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
    <CommentItemWrapper>
      <div className="comment-content">
        <CommentHeader>
          <CommentOwner>
            <FaUserCircle
              style={{ width: 20, height: 20, marginRight: "0.5rem" }}
            />
            <div style={{ fontWeight: "bold", color: "#000" }}>
              {owner.name}
            </div>
          </CommentOwner>
          <CommentTime>{postedAt(createdAt)}</CommentTime>
        </CommentHeader>
        <CommentText>{parse(content)}</CommentText>
      </div>
      <CommentActions>
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVote}
          downVote={downVote}
          neturalizeVote={neturalizeVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
      </CommentActions>
      <hr />
    </CommentItemWrapper>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
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
