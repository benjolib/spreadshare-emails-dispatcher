const React = require('react');

const FullWidthSection = require('./fullWidthSection');
const Text = require('./text');
const Envelope = require('./Envelope');

const UpdateMail = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <Envelope>
        <FullWidthSection>
          <Text>Hi {this.props.name},</Text>
          <Text>{this.props.body}</Text>
        </FullWidthSection>
      </Envelope>
    );
  }
});

module.exports = UpdateMail;
