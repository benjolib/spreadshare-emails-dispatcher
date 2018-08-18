import React from 'react';
import PropTypes from 'prop-types';
import PostWithUser from './PostWithUser';

const maxNoOfPost = 20;

function PostList({ name, link, digest }) {
  const stream = {
    name,
    link
  };

  if (digest.length === 0) {
    throw new Error('At least one digest value expected');
  }

  const maxDigestLength = Math.min(maxNoOfPost, digest.length);
  const digestToShow = digest.slice(0, maxDigestLength);
  const trimmingContent = maxDigestLength !== digest.length;

  return (
    <mj-section padding-top="0px">
      {digestToShow.map((d, i) => {
        const childProps = {
          ...d,
          stream
        };
        return <PostWithUser {...childProps} key={i} />;
      })}
      {trimmingContent && (
        <mj-section padding-top="24px" padding-bottom="0px">
          <mj-column>
            <mj-text font-size="18px">
              <a href={link}>See More Posts...</a>
            </mj-text>
          </mj-column>
        </mj-section>
      )}
    </mj-section>
  );
}

PostList.propTypes = {
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

export default PostList;
