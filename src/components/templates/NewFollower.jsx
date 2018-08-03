import React from 'react';
import PropTypes from 'prop-types';
import UserProfileComponent from './UserProfileComponent';

function NewFollower(data) {
  const { fullName } = data;
  const subTitle = `${fullName} started following you`;
  const title = 'New Follower';
  const props = { ...data, title, subTitle };
  return <UserProfileComponent {...props} />;
}

NewFollower.propTypes = {
  fullName: PropTypes.string.isRequired,
  imageLink: PropTypes.string,
  tagline: PropTypes.string.isRequired,
  followLink: PropTypes.string.isRequired
};

export default NewFollower;
