// @flow

import React from 'react';
import style from '../../style';

function Header(props) {
  return (
    <mj-section>
      <mj-column width="80%">
        <mj-text mj-class="title">{props.title}</mj-text>
        <mjml-spacer height="16px" />
        {props.children}
      </mj-column>
    </mj-section>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  subTitle: React.PropTypes.string.isRequired
};

export default Header;
