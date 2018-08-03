import React from 'react';
import PropTypes from 'prop-types';
import UserProfileWithStreamComponent from './UserProfileWithStreamComponent';

function NewComment({ person, stream, replyLink, comment }) {
  const props = {
    title: 'New Comment',
    subTitle: `${person.name} added a comment to your Stream`,
    previewText: `${person.name} added a comment to your Stream ${stream.name}`,
    person,
    stream,
    personLink: replyLink,
    personLinkType: 'Reply',
    personDescription: comment
  };
  return <UserProfileWithStreamComponent {...props} />;
}

NewComment.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired
  }).isRequired,
  stream: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired,
  replyLink: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default NewComment;
