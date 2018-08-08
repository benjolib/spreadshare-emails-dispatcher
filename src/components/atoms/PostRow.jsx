import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';

function PostRow({ columns }) {
  const columnPercentage = 100 / columns.length;
  const columnWidth = `${columnPercentage}%`;

  return (
    <mj-section
      padding-left="0px"
      padding-right="0px"
      padding-top="0px"
      padding-bottom="0px"
    >
      <mj-divider border-width="1px" border-color="#e8e8e8" />
      <mj-section padding-top="8px" padding-bottom="8px">
        <mj-group>
          {columns.map((item, i) => (
            <Column item={item} columnWidth={columnWidth} key={i} />
          ))}
        </mj-group>
      </mj-section>
    </mj-section>
  );
}

PostRow.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  ).isRequired
};

export default PostRow;
