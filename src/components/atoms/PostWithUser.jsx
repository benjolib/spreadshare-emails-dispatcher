import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import UserName from './UserName';

function PostWithUser(props) {
  const { contributor, stream } = props;
  let { imageLink } = contributor;
  if (!imageLink) {
    imageLink = `https://api.adorable.io/avatars/98/${contributor.name}`;
  }
  const userNameProps = {
    name: contributor.name,
    middleText: 'added a listing to',
    linkText: stream.name,
    link: stream.link,
    withImage: true,
    anchorStyle: 'simple'
  };

  return (
    <mj-section padding-top="0px" padding-bottom="24px">
      <mj-section
        padding-top="0px"
        padding-bottom="0px"
        padding-left="0px"
        padding-right="0px"
      >
        <mj-group width="100%">
          <mj-column width="15%" vertical-align="middle">
            <mj-image
              align="left"
              padding-bottom="8px"
              mj-class="avatar-small"
              width="28px"
              src={imageLink}
            />
          </mj-column>
          <mj-column
            width="70%"
            padding-bottom="8px"
            vertical-align="middle"
            padding-left="0px"
          >
            <UserName {...userNameProps} />
          </mj-column>
        </mj-group>
      </mj-section>
      <Post {...props} itemsInFirstRow={1} maxItemInARow={2} />
    </mj-section>
  );
}

PostWithUser.propTypes = {
  votesCount: PropTypes.number.isRequired,
  imageLink: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  ).isRequired,
  stream: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired,
  contributor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    imageLink: PropTypes.string
  }).isRequired
};

export default PostWithUser;
