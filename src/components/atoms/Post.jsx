import React from 'react';
import PropTypes from 'prop-types';
import style from '../../style';

const rowItemStyle = {
  padding: '8px 16px 8px 0',
  color: '#2a1e3e',
  fontSize: '14px',
  height: '72px',
  verticalAlign: 'medium',
  fontFamily: 'Lato',
  fontWeight: '400',
  fontStyle: 'normal',
  fontStretch: 'normal',
  lineHeight: '1.33',
  letterSpacing: '-.4px',
  borderCollapse: 'collapse',
  borderSpacing: '0 !important'
};

const fixWidthRow = {
  ...rowItemStyle,
  overflow: 'hidden',
  minWidth: '100px'
};

const votesStyle = {
  verticalAlign: 'middle',
  padding: '8px 16px 8px 0',
  paddingLeft: '12px',
  borderCollapse: 'collapse',
  borderSpacing: '0 !important'
};

const anchorStyle = {
  border: '1px solid #2dad6b',
  borderRadius: '2px',
  padding: '4px 6px',
  color: '#2dad6b',
  textDecoration: 'none'
};

function Post({ imageLink, votesCount, columns }) {
  const imageRowStyle = {
    background: `#f5f5f5 url(${imageLink}) center / cover`,
    width: '82px',
    height: '82px',
    borderRadius: '10px'
  };

  const imagePresent = imageLink !== null && imageLink !== undefined;

  return (
    <mj-table table-layout="fixed">
      <tr className="post-row">
        <td style={votesStyle}>
          <img
            style={{ width: '14px' }}
            src="https://s3.eu-central-1.amazonaws.com/spreadshare-public-assets/vote-lightning-34x42.png"
            alt="Votes"
          />
          <div
            style={{
              color: style.colors.lightText
            }}
          >
            {votesCount}
          </div>
        </td>
        {imagePresent && (
          <td style={rowItemStyle}>
            <div style={imageRowStyle}>
              <img alt="" data-name="Post" />
            </div>
          </td>
        )}
        {columns.map(c => {
          if (c.link) {
            return (
              <td style={fixWidthRow}>
                <a style={anchorStyle} href={c.link}>
                  {c.text}
                </a>
              </td>
            );
          }
          return <td style={fixWidthRow}>{c.text}</td>;
        })}
      </tr>
    </mj-table>
  );
}

Post.propTypes = {
  votesCount: PropTypes.number.isRequired,
  imageLink: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string
    })
  ).isRequired
};

export default Post;
