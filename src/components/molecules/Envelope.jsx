import React from 'react';
import PropTypes from 'prop-types';
import style from '../../style';
import Footer from './Footer';

function Envelope({ previewText, children }) {
  const inlineStyle = `
    a {
      color: #2DaD6B;
      font-weight: normal;
      text-align: left;
      line-height: 1.3;
      text-decoration: none;
    }
    
    .anchor-fix-width {
      width: 100px !important;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: text-bottom;
    }
    
    .sub-title-anchor {
      font-weight: 200px;
      line-height: 24px;
      letter-spacing: -0.5px;
      font-size: 24px;
      font-weight: 200;
    }
    
    .post-row {
      width: 100%;
      max-width: 630px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.18);
      border: 1px solid #f8f8fb;
      border-radius: 4px;
      overflow-x: auto;
      clear: both;
    }
    
    .post-image {
      width: 200px;
      min-height: 100%;
      min-width: 100%;
    }
    
    .boxed-anchor {
      border: 1px solid #2dad6b;
      border-radius: 2px;
      padding: 4px 6px;
      color: #2dad6b;
      text-decoration: none;
    }
  `;
  return (
    <mjml version="4.1.1">
      <mj-head>
        <mj-font
          name="Lato"
          href="https://fonts.googleapis.com/css?family=Lato|Roboto+Mono"
        />
        <mj-preview>{previewText}</mj-preview>
        <mj-style inline="inline">{inlineStyle}</mj-style>
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
            font-weight={style.fontWeights.light}
            color={style.colors.lightText}
          />

          <mj-class
            name="email-description-text"
            padding-top="0px"
            padding-left="24px"
            padding-right="24px"
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
            name="stream-name"
            align="left"
            font-weight={style.fontWeights.semiBold}
            font-family={style.fontFamily.default}
            color={style.colors.darkText}
            font-size="16px"
          />

          <mj-class
            name="stream-tagline"
            align="left"
            font-weight={style.fontWeights.light}
            font-family={style.fontFamily.default}
            color={style.colors.lightText}
            font-size="14px"
          />

          <mj-class
            name="stream-description"
            align="left"
            font-weight={style.fontWeights.default}
            font-family={style.fontFamily.default}
            color={style.colors.semidarkText}
            font-size="12px"
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

          <mj-class
            name="table-row"
            border="1px solid #e8e8e8"
            border-radius="4px"
            padding-top="0px"
            padding-bottom="0px"
          />

          <mj-class
            name="vote"
            align="left"
            padding-right="8px"
            vertical-align="middle"
            width={style.sizes.vote}
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
