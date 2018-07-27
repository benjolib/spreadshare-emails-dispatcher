import React from 'react';
import style from '../style';
import Header from './Header';
import Footer from './Footer';

function Envelope(props) {
  return (
    <mjml version="4.1.1">
      <mj-head>
        <mj-font
          name="Lato"
          href="https://fonts.googleapis.com/css?family=Lato|Roboto"
        />
        <mj-preview>{props.previewText}</mj-preview>
      </mj-head>
      <mj-body background-color={style.colors.background}>
        <mj-section
          background-color={style.colors.contentBackground}
          padding-top={style.padding.top}
          padding-bottom={style.padding.bottom}
        >
          <Header title={props.title} subTitle={props.subTitle} />
        </mj-section>
        <Footer />
      </mj-body>
    </mjml>
  );
}

Envelope.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string.isRequired,
  previewText: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
};

export default Envelope;
