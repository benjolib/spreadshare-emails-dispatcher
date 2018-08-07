import R from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
import PostFirstRow from './PostFirstRow';
import PostRow from './PostRow';

const otherRows = (columns, firstRowCount, rowCount) => {
  const remainingItems = R.drop(firstRowCount, columns);
  const groupBy = R.addIndex(R.groupBy);
  return R.values(groupBy((_, i) => Math.floor(i / rowCount), remainingItems));
};

function PostNew(props) {
  const { columns, itemsInFirstRow, maxItemInARow } = props;
  if (columns.length === 0) {
    throw new Error('At least one column value expected');
  }
  const firstRowItemCount = Math.min(itemsInFirstRow, columns.length);
  const firstRow = columns.slice(0, firstRowItemCount);
  const firstRowProps = {
    ...props,
    columns: firstRow
  };

  return (
    <mj-wrapper padding="10px 12px">
      <mj-section mj-class="table-row">
        <PostFirstRow {...firstRowProps} />
        {otherRows(columns, itemsInFirstRow, maxItemInARow).map((c, i) => (
          <PostRow columns={c} key={i} />
        ))}
      </mj-section>
    </mj-wrapper>
  );
}

PostNew.propTypes = {
  itemsInFirstRow: PropTypes.number,
  maxItemInARow: PropTypes.number,
  votesCount: PropTypes.number.isRequired,
  imageLink: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  ).isRequired
};

PostNew.defaultProps = {
  itemsInFirstRow: 3,
  maxItemInARow: 4
};

export default PostNew;
