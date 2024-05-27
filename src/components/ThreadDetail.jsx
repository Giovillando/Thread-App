// ThreadDetail.jsx
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import {
  ThreadDetailWrapper,
  ThreadDetailContent,
  Category,
  Title,
  Body,
  Actions,
  UserInfo,
  UserIcon,
  CreatedAt,
} from "./styled/StyledComponents";
import VoteButton from "./VoteButton";
import postedAt from "../utils";

function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVoteThreadDetail,
  downVoteThreadDetail,
  neturalizeVoteThreadDetail,
  authUser,
}) {
  return (
    <ThreadDetailWrapper>
      <ThreadDetailContent>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Body>{parse(body)}</Body>
      </ThreadDetailContent>
      <Actions>
        <VoteButton
          id={id}
          authUser={authUser}
          upVote={upVoteThreadDetail}
          downVote={downVoteThreadDetail}
          neturalizeVote={neturalizeVoteThreadDetail}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <UserInfo>
          <UserIcon />
          <span>{owner.name}</span>
        </UserInfo>
        <CreatedAt>{postedAt(createdAt)}</CreatedAt>
      </Actions>
    </ThreadDetailWrapper>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThreadDetail: PropTypes.func.isRequired,
  downVoteThreadDetail: PropTypes.func.isRequired,
  neturalizeVoteThreadDetail: PropTypes.func.isRequired,
};

export default ThreadDetail;
