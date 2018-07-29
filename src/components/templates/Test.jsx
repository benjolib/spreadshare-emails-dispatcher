import React from 'react';
import PropTypes from 'prop-types';
import Envelope from '../molecules/Envelope';
import SimpleHeader from '../molecules/SimpleHeader';

function Test({ greeting }) {
  const subTitle = `Spreadshare says ${greeting}`;
  return (
    <Envelope previewText="A test email from Spreadshare">
      <SimpleHeader title="A Test Email" subTitle={subTitle} />
    </Envelope>
  );
}

Test.propTypes = {
  greeting: PropTypes.string.isRequired
};

export default Test;
