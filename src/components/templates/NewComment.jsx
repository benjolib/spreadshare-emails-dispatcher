import React from 'react';
import PropTypes from 'prop-types';
import Envelope from '../molecules/Envelope';
import Header from '../molecules/Header';
import UserBox from '../molecules/UserBox';
import style from '../../style';

function NewComment({ person, stream, replyLink, comment }) {
  const subTitle = `${person.name} added a comment to your Stream`;
  const previewText = `${person.name} added a comment to your Stream ${
    stream.name
  }`;
  const userBoxProps = {
    name: person.fullName,
    imageLink: person.imageLink,
    linkText: 'Reply',
    link: replyLink,
    detail: comment
  };

  const anchorStyle = {
    ...style.aSimple,
    fontWeight: style.fontWeights.thin
  };

  return (
    <Envelope previewText={previewText}>
      <Header title="New Comment">
        <mj-text mj-class="sub-title">
          {subTitle}
          &nbsp;
          <a style={anchorStyle} href={stream.link}>
            {stream.name}
          </a>
        </mj-text>
      </Header>
      <mj-section padding-top="0px">
        <UserBox {...userBoxProps} />
      </mj-section>
    </Envelope>
  );
}

NewComment.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    imageLink: PropTypes.string.isRequired
  }).isRequired,
  stream: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired,
  replyLink: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default NewComment;
