import React from 'react';
import PropTypes from 'prop-types';

const truncatedText = (text, maxTextLength) => {
  if (text.length > maxTextLength) {
    return `${text.slice(0, maxTextLength)}...`;
  }
  return text;
};

function Column({ item, columnWidth, linkTextWidth }) {
  if (item.link) {
    return (
      <mj-column width={columnWidth} vertical-align="middle">
        <mj-text align="center">
          <a className="boxed-anchor" href={item.link}>
            {truncatedText(item.text, linkTextWidth)}
          </a>
        </mj-text>
      </mj-column>
    );
  }
  return (
    <mj-column width={columnWidth} vertical-align="middle">
      <mj-text align="center">{truncatedText(item.text, 50)}</mj-text>
    </mj-column>
  );
}

Column.propTypes = {
  linkTextWidth: PropTypes.number,
  columnWidth: PropTypes.string.isRequired,
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired
};

Column.defaultProps = {
  linkTextWidth: 10
};

export default Column;
