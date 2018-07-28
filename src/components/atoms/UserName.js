import React from 'react';
import style from '../../style';

function UserName(props) {
  return (
    <mj-text
      align="left"
      padding-left="8px"
      padding-bottom="8px"
      font-weight={style.fontWeights.userName}
      font-family="lato"
      color={style.colors.userName}
    >
      {props.name} {props.middleText}&ensp;<a style={style.a} href={props.link}>
        {props.linkText}
      </a>
    </mj-text>
  );
}

UserName.propTypes = {
  name: React.PropTypes.string.isRequired,
  linkText: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  middleText: React.PropTypes.string
};

export default UserName;
