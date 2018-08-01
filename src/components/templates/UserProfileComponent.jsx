import React from 'react';
import PropTypes from 'prop-types';
import Envelope from '../molecules/Envelope';
import SimpleHeader from '../molecules/SimpleHeader';
import UserBox from '../molecules/UserBox';

function UserProfileComponent({
  title,
  subTitle,
  fullName,
  imageLink,
  tagline,
  followLink
}) {
  const userBoxProps = {
    name: fullName,
    imageLink,
    linkText: 'Follow',
    link: followLink,
    detail: tagline
  };
  return (
    <Envelope previewText={subTitle}>
      <SimpleHeader title={title} subTitle={subTitle} />
      <mj-section padding-top="0px">
        <UserBox {...userBoxProps} />
      </mj-section>
    </Envelope>
  );
}

UserProfileComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  imageLink: PropTypes.string,
  tagline: PropTypes.string.isRequired,
  followLink: PropTypes.string.isRequired
};

export default UserProfileComponent;
