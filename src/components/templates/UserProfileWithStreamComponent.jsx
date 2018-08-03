import React from 'react';
import PropTypes from 'prop-types';
import Envelope from '../molecules/Envelope';
import Header from '../molecules/Header';
import UserBox from '../molecules/UserBox';
import style from '../../style';

function NewComment({
  title,
  subTitle,
  previewText,
  person,
  stream,
  personLink,
  personLinkType,
  personDescription
}) {
  const userBoxProps = {
    name: person.fullName,
    imageLink: person.imageLink,
    linkText: personLinkType,
    link: personLink,
    detail: personDescription
  };

  const anchorStyle = {
    ...style.aSimple,
    fontWeight: style.fontWeights.thin
  };

  return (
    <Envelope previewText={previewText}>
      <Header title={title}>
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
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  previewText: PropTypes.string.isRequired,
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    imageLink: PropTypes.string
  }).isRequired,
  stream: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired,
  personLink: PropTypes.string.isRequired,
  personLinkType: PropTypes.string.isRequired,
  personDescription: PropTypes.string.isRequired
};

export default NewComment;
