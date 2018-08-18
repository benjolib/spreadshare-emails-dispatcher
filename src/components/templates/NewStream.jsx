import React from 'react';
import PropTypes from 'prop-types';
import Envelope from '../molecules/Envelope';
import Header from '../molecules/Header';
import StreamWithUser from '../atoms/StreamWithUser';

function NewStream(props) {
  const { creator, stream } = props;
  const title = 'New Stream';
  const previewText = `${stream.name} was published by ${creator.name}`;
  const subTitle = `was published by ${creator.name}`;
  return (
    <Envelope previewText={previewText}>
      <Header title={title}>
        <mj-text mj-class="sub-title">
          <a className="sub-title-anchor" href={stream.link}>
            {stream.name}
          </a>
          &nbsp;
          {subTitle}
        </mj-text>
      </Header>
      <mj-section padding-top="0px">
        <StreamWithUser {...props} />
      </mj-section>
    </Envelope>
  );
}

NewStream.propTypes = {
  creator: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    imageLink: PropTypes.string
  }).isRequired,
  stream: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default NewStream;
