import React from 'react';
import PropTypes from 'prop-types';
import UserProfileComponent from './UserProfileComponent';

function FriendJoined(data) {
  const { fullName } = data;
  const subTitle = `Your friend ${fullName} joined Spreadshare today`;
  const title = 'A Friend Joined';
  const props = { ...data, title, subTitle };
  return <UserProfileComponent {...props} />;
}

FriendJoined.propTypes = {
  fullName: PropTypes.string.isRequired,
  imageLink: PropTypes.string,
  tagline: PropTypes.string.isRequired,
  followLink: PropTypes.string.isRequired
};

export default FriendJoined;
