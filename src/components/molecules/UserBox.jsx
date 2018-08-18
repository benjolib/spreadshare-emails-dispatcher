import React from 'react';
import PropTypes from 'prop-types';
import UserName from '../atoms/UserName';
import { defaultUserImageLarge } from '../../utils/common';

function UserBox(props) {
  const { name, detail } = props;
  let { imageLink } = props;
  if (!imageLink) {
    imageLink = defaultUserImageLarge(name);
  }
  return (
    <mj-group width="80%">
      <mj-column width="20%">
        <mj-image mj-class="avatar" src={imageLink} />
      </mj-column>
      <mj-column width="80%">
        <UserName {...props} />
        <mj-text padding-top="8px" mj-class="detail-text">
          {detail}
        </mj-text>
      </mj-column>
    </mj-group>
  );
}

UserBox.propTypes = {
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  middleText: PropTypes.string,
  detail: PropTypes.string.isRequired
};

export default UserBox;
