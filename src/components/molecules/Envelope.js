import React from 'react';
import style from '../../style';
import Header from './Header';
import Footer from './Footer';

function Envelope(props) {
  return (
    <mjml version="4.1.1">
      <mj-head>
        <mj-font
          name="Lato"
          href="https://fonts.googleapis.com/css?family=Lato|Roboto+Mono"
        />
        <mj-preview>{props.previewText}</mj-preview>
        <mj-attributes>
          <mj-section
            background-color={style.colors.contentBackground}
            padding-top={style.padding.top}
            padding-bottom={style.padding.bottom}
          />
          <mj-column padding-top="0px" padding-bottom="0px" />
          <mj-text font-family={style.fonts.default} align="center" />
          <mj-class
            name="title"
            line-height={style.lineHeights.title}
            font-size={style.textSizes.title}
            font-weight={style.fontWeights.title}
            color={style.colors.titleText}
          />
          <mj-class
            name="sub-title"
            letter-spacing="-0.5px"
            line-height={style.lineHeights.subTitle}
            font-size={style.textSizes.subTitle}
            font-weight={style.fontWeights.subTitle}
            color={style.colors.subTitleText}
          />

          <mj-class
            name="avatar"
            align="right"
            padding-right="8px"
            width={style.sizes.avatar}
            border-radius="9999px"
            src={props.imageLink}
          />

          <mj-class
            name="detail-text"
            align="left"
            font-weight={style.fontWeights.default}
            font-family={style.fontFamily.default}
            line-height={style.lineHeights.default}
            color={style.colors.detailText}
            padding-left="8px"
            padding-top="0px"
          />
        </mj-attributes>
      </mj-head>
      <mj-body background-color={style.colors.background}>
        {props.children}
        <Footer />
      </mj-body>
    </mjml>
  );
}

Envelope.propTypes = {
  previewText: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
};

export default Envelope;
