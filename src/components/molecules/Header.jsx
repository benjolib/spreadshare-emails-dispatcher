import React from 'react';
import PropTypes from 'prop-types';

function Header({ title, children }) {
  return (
    <mj-section>
      <mj-column width="80%">
        <mj-text mj-class="title">{title}</mj-text>
        <mjml-spacer height="16px" />
        {children}
      </mj-column>
    </mj-section>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Header;
