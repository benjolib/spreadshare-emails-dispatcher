import React from 'react';
import PropTypes from 'prop-types';
import style from '../../style';

function UserName({
  withImage,
  anchorStyle,
  name,
  middleText,
  link,
  linkText
}) {
  const paddingLeft = withImage ? '4px' : '8px';
  const anchorClass =
    anchorStyle === 'roboto' ? 'anchor-roboto' : 'anchor-fix-width';

  return (
    <mj-text mj-class="user-name" padding-left={paddingLeft}>
      {name}
      <span
        style={{
          color: style.colors.lightText,
          fontWeight: style.fontWeights.light
        }}
      >
        &nbsp;
        {middleText}
      </span>
      &nbsp;
      <a className={anchorClass} href={link}>
        {linkText}
      </a>
    </mj-text>
  );
}

UserName.propTypes = {
  name: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  middleText: PropTypes.string,
  withImage: PropTypes.bool,
  anchorStyle: PropTypes.oneOf(['simple', 'roboto'])
};

UserName.defaultProps = {
  withImage: false,
  anchorStyle: 'roboto'
};

export default UserName;
