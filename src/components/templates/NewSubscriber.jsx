import React from 'react';
import PropTypes from 'prop-types';
import UserProfileWithStreamComponent from './UserProfileWithStreamComponent';

function NewSubscriber({ subscriber, stream }) {
  const props = {
    title: 'New Subscriber',
    subTitle: `${subscriber.name} subscribed to your Stream`,
    previewText: `${subscriber.name} subscribed to your Stream ${stream.name}`,
    person: subscriber,
    stream,
    personLink: subscriber.followLink,
    personLinkType: 'Follow',
    personDescription: subscriber.tagline
  };
  return <UserProfileWithStreamComponent {...props} />;
}

NewSubscriber.propTypes = {
  subscriber: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    imageLink: PropTypes.string,
    tagline: PropTypes.string.isRequired,
    followLink: PropTypes.string.isRequired
  }).isRequired,
  stream: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired
};

export default NewSubscriber;
