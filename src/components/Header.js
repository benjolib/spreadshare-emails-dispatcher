import React from 'react';
import style from '../style';

function Header(props) {
  return (
    <mj-column>
      <mj-text
        align="center"
        line-height={style.lineHeights.title}
        font-family={style.fonts.default}
        font-size={style.textSizes.title}
        font-weight={style.fontWeights.title}
        color={style.colors.titleText}
      >
        {props.title}
      </mj-text>
      <mjml-spacer height="16px" />
      <mj-text
        align="center"
        letter-spacing="-0.5px"
        line-height={style.lineHeights.subTitle}
        font-family={style.fonts.default}
        font-size={style.textSizes.subTitle}
        font-weight={style.fontWeights.subTitle}
        color={style.colors.subTitleText}
      >
        {props.subTitle}
      </mj-text>
    </mj-column>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string.isRequired
};

export default Header;
