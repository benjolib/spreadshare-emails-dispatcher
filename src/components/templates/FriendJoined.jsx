import React from 'react';
import PropTypes from 'prop-types';
import Envelope from '../molecules/Envelope';
import SimpleHeader from '../molecules/SimpleHeader';
import UserBox from '../molecules/UserBox';

function FriendJoined({ fullName, imageLink, tagline, followLink }) {
  const subTitle = `Your friend ${fullName} joined Spreadshare today`;
  const userBoxProps = {
    name: fullName,
    imageLink,
    linkText: 'Follow',
    link: followLink,
    detail: tagline
  };
  return (
    <Envelope previewText={subTitle}>
      <SimpleHeader title="A Friend Joined" subTitle={subTitle} />
      <mj-section padding-top="0px">
        <UserBox {...userBoxProps} />
      </mj-section>
    </Envelope>
  );
}

FriendJoined.propTypes = {
  fullName: PropTypes.string.isRequired,
  imageLink: PropTypes.string,
  tagline: PropTypes.string.isRequired,
  followLink: PropTypes.string.isRequired
};

export default FriendJoined;
