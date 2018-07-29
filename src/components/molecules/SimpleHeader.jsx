import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function SimpleHeader({ title, subTitle }) {
  return (
    <Header title={title}>
      <mj-text mj-class="sub-title">{subTitle}</mj-text>
    </Header>
  );
}

SimpleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

export default SimpleHeader;
