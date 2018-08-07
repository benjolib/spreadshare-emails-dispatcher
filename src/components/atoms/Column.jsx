import React from 'react';
import PropTypes from 'prop-types';

const anchorStyle = {
  border: '1px solid #2dad6b',
  borderRadius: '2px',
  padding: '4px 6px',
  color: '#2dad6b',
  textDecoration: 'none'
};

const truncatedText = (text, maxTextLength) => {
  if (text.length > maxTextLength) {
    return `${text.slice(0, maxTextLength)}...`;
  }
  return text;
};

function Column({ item, columnWidth }) {
  if (item.link) {
    return (
      <mj-column width={columnWidth} vertical-align="middle">
        <mj-text align="center">
          <a style={anchorStyle} href={item.link}>
            {truncatedText(item.text, 10)}
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
  columnWidth: PropTypes.string.isRequired,
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired
};

export default Column;
