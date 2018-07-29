import React from 'react';
import PropTypes from 'prop-types';
import style from '../../style';
import Footer from './Footer';

function Envelope({ previewText, children }) {
  return (
    <mjml version="4.1.1">
      <mj-head>
        <mj-font
          name="Lato"
          href="https://fonts.googleapis.com/css?family=Lato|Roboto+Mono"
        />
        <mj-preview>{previewText}</mj-preview>
        <mj-attributes>
          <mj-section
            background-color={style.colors.contentBackground}
            padding-top={style.padding.top}
            padding-bottom={style.padding.bottom}
          />
          <mj-column padding-top="0px" padding-bottom="0px" />
          <mj-text font-family={style.fonts.default} align="center" />
          <mj-table padding-top="0px" />

          <mj-class
            name="column-auto-width"
            width="auto"
            vertical-align="middle"
          />
          <mj-class
            name="column-left"
            width="auto"
            vertical-align="middle"
            padding-left="28px"
          />
          <mj-class
            name="title"
            line-height={style.lineHeights.title}
            font-size={style.textSizes.title}
            font-weight={style.fontWeights.bold}
            color={style.colors.darkText}
          />
          <mj-class
            name="sub-title"
            letter-spacing="-0.5px"
            line-height={style.lineHeights.subTitle}
            font-size={style.textSizes.subTitle}
            font-weight={style.fontWeights.thin}
            color={style.colors.lightText}
          />

          <mj-class
            name="email-text"
            color={style.colors.darkText}
            font-size={style.textSizes.emailText}
            letter-spacing="0.25px"
          />

          <mj-class
            name="detail-text"
            align="left"
            font-weight={style.fontWeights.default}
            font-family={style.fontFamily.default}
            line-height={style.lineHeights.default}
            color={style.colors.lightText}
            padding-left="8px"
            padding-top="0px"
          />

          <mj-class
            name="user-name"
            align="left"
            padding-left="8px"
            padding-bottom="0px"
            font-weight={style.fontWeights.semiBold}
            font-family={style.fontFamily.default}
            color={style.colors.darkText}
          />

          <mj-class
            name="avatar"
            align="right"
            padding-right="8px"
            vertical-align="middle"
            width={style.sizes.avatar}
            border-radius="9999px"
          />

          <mj-class
            name="avatar-small"
            align="right"
            padding-right="8px"
            width={style.sizes.avatarSmall}
            border-radius="9999px"
          />
        </mj-attributes>
      </mj-head>
      <mj-body background-color={style.colors.background}>
        {children}
        <Footer />
      </mj-body>
    </mjml>
  );
}

Envelope.propTypes = {
  previewText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Envelope;
