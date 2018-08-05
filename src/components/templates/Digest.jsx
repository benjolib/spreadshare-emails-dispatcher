import React from 'react';
import PropTypes from 'prop-types';
import Envelope from '../molecules/Envelope';
import Header from '../molecules/Header';
import StreamList from '../atoms/StreamList';
import style from '../../style';

const frequencyPrefixMap = {
  daily: 'Today',
  weekly: 'This Week',
  monthly: 'This Month'
};

const frequencySuffixMap = {
  daily: 'today',
  weekly: 'last week',
  monthly: 'last month'
};

function Digest(props) {
  const { frequency, name, link } = props;

  const title = `${frequencyPrefixMap[frequency]}`;
  const previewText = `${title} in ${name}`;

  const descriptionAnchorStyle = {
    ...style.aSimple,
    fontWeight: style.fontWeights.default
  };

  return (
    <Envelope previewText={previewText}>
      <Header title={title}>
        <mj-text mj-class="sub-title">in {name}</mj-text>
      </Header>
      <mj-section mj-class="email-description-text">
        <mj-text mj-class="email-text">
          This is a summary of all the new listings to&nbsp;
          <a style={descriptionAnchorStyle} href={link}>
            {name}
          </a>
          &nbsp;from&nbsp;
          {frequencySuffixMap[frequency]}
        </mj-text>
      </mj-section>
      <StreamList {...props} />
    </Envelope>
  );
}

Digest.propTypes = {
  frequency: PropTypes.oneOf(['daily', 'weekly', 'monthly']),
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  digest: PropTypes.arrayOf(
    PropTypes.shape({
      votesCount: PropTypes.number.isRequired,
      imageLink: PropTypes.string,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          link: PropTypes.string
        })
      ).isRequired,
      contributor: PropTypes.shape({
        name: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        imageLink: PropTypes.string
      }).isRequired
    })
  )
};

export default Digest;
