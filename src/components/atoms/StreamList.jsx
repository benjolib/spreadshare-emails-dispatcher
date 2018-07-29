import React from 'react';
import PropTypes from 'prop-types';
import PostWithUser from './PostWithUser';

function StreamList({ name, link, digest }) {
  const stream = {
    name,
    link
  };

  return (
    <mj-section padding-top="0px">
      {digest.map(d => {
        const childProps = {
          ...d,
          stream
        };
        return <PostWithUser {...childProps} />;
      })}
    </mj-section>
  );
}

StreamList.propTypes = {
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
        imageLink: PropTypes.string.isRequired
      }).isRequired
    })
  )
};

export default StreamList;
