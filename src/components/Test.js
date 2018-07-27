import React from 'react';
import Envelope from './Envelope';

function Test(props) {
  const subTitle = `Spreadshare says ${props.greeting}`;
  return (
    <Envelope
      title="Test Email"
      subTitle={subTitle}
      previewText="Ignore this! A test email from spreadshare"
    />
  );
}

Test.propTypes = {
  title: React.PropTypes.string.isRequired,
  greeting: React.PropTypes.string.isRequired
};

export default Test;
