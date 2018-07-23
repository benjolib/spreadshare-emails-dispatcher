const React = require('react');

const style = require('../../style');

const Header = require('./header');
const Social = require('./social');
const Contact = require('./contact');

const Envelope = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    showHeaderDivider: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      showHeaderDivider: true
    };
  },

  render() {
    return (
      <mjml version="4.1.1">
        <mj-head>
          <mj-font
            name="Lato"
            href="https://fonts.googleapis.com/css?family=Lato|Roboto"
          />
        </mj-head>
        <mj-body>
          <mj-container background-color={style.colors.tertiary} width="500px">
            <Header />
            {this.props.children}
            <Contact />
            <Social />
          </mj-container>
        </mj-body>
      </mjml>
    );
  }
});

module.exports = Envelope;
