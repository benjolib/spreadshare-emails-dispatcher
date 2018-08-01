import React from 'react';
import UserProfileComponent from './UserProfileComponent';

function NewFollower(data) {
  const { fullName } = data;
  const subTitle = `${fullName} started following you`;
  const title = 'New Follower';
  const props = { ...data, title, subTitle };
  return <UserProfileComponent {...props} />;
}

export default NewFollower;
