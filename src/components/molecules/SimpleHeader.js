// @flow

import React from 'react';
import Header from './Header';

function SimpleHeader(props) {
  return (
    <Header title={props.title}>
      <mj-text mj-class="sub-title">{props.subTitle}</mj-text>
    </Header>
  );
}

SimpleHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string.isRequired
};

export default SimpleHeader;
