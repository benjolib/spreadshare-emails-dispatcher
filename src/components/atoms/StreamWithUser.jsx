import React from 'react';
import PropTypes from 'prop-types';
import UserName from './UserName';
import Stream from './Stream';
import { defaultUserImageSmall } from '../../utils/common';

function StreamWithUser({ creator, stream }) {
  const userNameProps = {
    name: creator.name,
    middleText: 'created',
    linkText: stream.name,
    link: stream.link,
    withImage: true,
    anchorStyle: 'simple'
  };

  let { imageLink } = creator;
  if (!imageLink) {
    imageLink = defaultUserImageSmall(creator.name);
  }

  return (
    <mj-section padding-top="0px" padding-bottom="24px">
      <mj-section
        padding-top="0px"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
      >
        <mj-group width="100%">
          <mj-column width="15%" vertical-align="middle">
            <mj-image
              align="middle"
              padding-bottom="8px"
              mj-class="avatar-small"
              width="28px"
              src={imageLink}
            />
          </mj-column>
          <mj-column
            width="85%"
            padding-bottom="8px"
            vertical-align="middle"
            padding-left="0px"
          >
            <UserName {...userNameProps} />
          </mj-column>
        </mj-group>
      </mj-section>
      <Stream {...stream} />
    </mj-section>
  );
}

StreamWithUser.propTypes = {
  creator: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    imageLink: PropTypes.string
  }).isRequired,
  stream: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default StreamWithUser;
