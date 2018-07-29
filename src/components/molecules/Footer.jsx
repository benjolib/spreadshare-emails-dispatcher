import React from 'react';
import style from '../../style';

function Footer() {
  return (
    <mj-section background-color={style.colors.footer}>
      <mj-column>
        <mj-image
          width={style.logoWidth}
          alt="logo"
          src="https://s3.eu-central-1.amazonaws.com/spreadshare-public-assets/logo48x48.png"
        />
        <mj-spacer height="24px" />
        <mj-text
          align="center"
          font-size="28px"
          font-weight="bold"
          color="#2a1e3e"
        >
          Follow your Stream
        </mj-text>
        <mj-text align="center" font-weight="300" color="#9baabf">
          Spreadshare Inc.
        </mj-text>
        <mj-spacer height="24px" />
        <mj-text
          align="center"
          font-size="14px"
          font-weight="bold"
          font-family="Roboto"
          line-height="24px"
          color="#2DaD6B"
          letter-spacing="normal"
        >
          <a style={style.a} href="https://spreadshare.co">
            Change your email preferences
          </a>
        </mj-text>
      </mj-column>
    </mj-section>
  );
}

export default Footer;
