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

function Post(props) {
  const { columns, itemsInFirstRow, maxItemInARow, className } = props;
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
    <mj-wrapper padding="0px 24px" css-class={className}>
      <mj-section mj-class="table-row">
        <PostFirstRow {...firstRowProps} />
        {otherRows(columns, itemsInFirstRow, maxItemInARow).map((c, i) => (
          <PostRow columns={c} key={i} className="column-length-two" />
        ))}
      </mj-section>
    </mj-wrapper>
  );
}

Post.propTypes = {
  className: PropTypes.string,
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

Post.defaultProps = {
  className: 'column-length-three',
  itemsInFirstRow: 2,
  maxItemInARow: 3
};

export default Post;
