import React from 'react';
import PropTypes from 'prop-types';
import randomMc from 'random-material-color';
import style from '../../style';
import Column from './Column';

function PostFirstRow({ imageLink, votesCount, columns }) {
  const { imageRowStyle } = style;
  imageRowStyle.background = `#f5f5f5 url(${imageLink}) center / cover`;

  const columnPercentage = 65 / columns.length;
  const columnWidth = `${columnPercentage}%`;
  const [firstItem, secondItem, thirdItem] = columns;

  if (!imageLink) {
    imageRowStyle.background = randomMc.getColor({
      text: firstItem.text.charAt(0)
    });
  }

  const imageDivContent = () => {
    if (imageLink) {
      return <img alt="" data-name="Post" />;
    }
    return firstItem.text.charAt(0);
  };

  return (
    <mj-section padding-top="8px" padding-bottom="8px">
      <mj-group width="100%" padding="0px">
        <mj-column
          padding-left="14px"
          padding-right="14px"
          width="15%"
          vertical-align="middle"
        >
          <mj-image
            mj-class="vote"
            width="15px"
            src="https://s3.eu-central-1.amazonaws.com/spreadshare-public-assets/vote-lightning-34x42.png"
            alt="Votes"
            padding="0px"
          />
          <mj-text
            align="left"
            padding="0px"
            padding-top="8px"
            color={style.colors.lightText}
          >
            {votesCount}
          </mj-text>
        </mj-column>
        <mj-column padding="0px" width="20%" vertical-align="middle">
          <mj-raw>
            <div style={imageRowStyle}>{imageDivContent()}</div>
          </mj-raw>
        </mj-column>
        <Column item={firstItem} columnWidth={columnWidth} />
        {secondItem && <Column item={secondItem} columnWidth={columnWidth} />}
        {thirdItem && <Column item={thirdItem} columnWidth={columnWidth} />}
      </mj-group>
    </mj-section>
  );
}

PostFirstRow.propTypes = {
  votesCount: PropTypes.number.isRequired,
  imageLink: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  ).isRequired
};

export default PostFirstRow;
