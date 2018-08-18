import React from 'react';
import PropTypes from 'prop-types';
import style from '../../style';

function Stream({ name, imageLink, tagline, description }) {
  const paddingBottom = description ? '8px' : '0px';
  return (
    <mj-section padding-top="0px" padding-bottom="24px">
      <mj-column padding-top="0px" padding-bottom="0px">
        <mj-section padding-top="0px" padding-bottom="0px">
          <mj-column padding-top="0px" padding-bottom="0px">
            <mj-image src={imageLink} padding-bottom="0px" padding-top="0px" />
          </mj-column>
        </mj-section>
        <mj-section
          padding-top="0px"
          padding-bottom="0px"
          padding-left="12px"
          padding-right="12px"
        >
          <mj-column
            background-color={style.colors.footer}
            padding-bottom="12px"
            padding-top="12px"
          >
            <mj-text
              mj-class="stream-name"
              padding-top="12px"
              padding-bottom="4px"
              background-color="#f2f2f2"
            >
              {name}
            </mj-text>
            <mj-text
              mj-class="stream-tagline"
              padding-top="4px"
              padding-bottom={paddingBottom}
            >
              {tagline}
            </mj-text>
            <mj-text mj-class="stream-description">{description}</mj-text>
          </mj-column>
        </mj-section>
      </mj-column>
    </mj-section>
  );
}

Stream.propTypes = {
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Stream;
