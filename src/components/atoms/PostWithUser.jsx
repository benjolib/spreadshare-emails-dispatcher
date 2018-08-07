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
          <mj-column width="10%" vertical-align="middle">
            <mj-image
              padding-bottom="8px"
              mj-class="avatar-small"
              padding-left="0px"
              src={imageLink}
            />
          </mj-column>
          <mj-column width="90%" padding-bottom="8px" vertical-align="middle">
            <UserName {...userNameProps} />
          </mj-column>
        </mj-group>
      </mj-section>
      <Post
        {...props}
        className="column-length-three"
        itemsInFirstRow={2}
        maxItemInARow={3}
      />
      {/*<Post*/}
      {/*{...props}*/}
      {/*className="column-length-two"*/}
      {/*itemsInFirstRow={1}*/}
      {/*maxItemInARow={2}*/}
      {/*/>*/}
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
