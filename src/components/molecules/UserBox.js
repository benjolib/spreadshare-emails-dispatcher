// @flow

import React, { PropTypes } from 'react';
import style from '../../style';
import UserName from '../atoms/UserName';

function UserBox(props) {
  return (
    <mj-group width="80%">
      <mj-column width="20%">
        <mj-image mj-class="avatar" src={props.imageLink} />
      </mj-column>
      <mj-column width="80%">
        <UserName {...props} />
        <mj-text mj-class="detail-text">{props.detail}</mj-text>
      </mj-column>
    </mj-group>
  );
}

UserBox.propTypes = {
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  middleText: PropTypes.string,
  detail: PropTypes.string.isRequired
};

export default UserBox;
