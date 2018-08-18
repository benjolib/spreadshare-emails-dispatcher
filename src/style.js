const anchorCommon = {
  color: '#2DaD6B',
  fontFamily:
    '"Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma, Sans-Serif',
  fontWeight: 'normal',
  textAlign: 'left',
  lineHeight: 1.3,
  textDecoration: 'none'
};

module.exports = {
  fontFamily: 'Lato',

  logoWidth: '48px',

  padding: {
    top: '64px',
    bottom: '64px'
  },

  colors: {
    background: '#F4F4F4',
    footer: '#F8F8FB',
    contentBackground: '#ffffff',
    darkText: '#2a1e3e',
    semidarkText: '#4a505b',
    lightText: '#9baabf'
  },

  sizes: {
    avatar: '64px',
    avatarSmall: '28px',
    vote: '24px'
  },

  textSizes: {
    title: '40px',
    subTitle: '24px',
    emailText: '16px'
  },

  fonts: {
    default:
      '"Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma, Sans-Serif'
  },

  fontWeights: {
    default: 'normal',
    bold: 'bold',
    thin: '200',
    light: '300',
    semiBold: '600'
  },

  lineHeights: {
    default: 1.3,
    title: '40px',
    subTitle: '28px'
  },

  aSimple: {
    ...anchorCommon
  },

  aFixedWidth: {
    width: '200px',
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    verticalAlign: 'text-bottom'
  },

  userBox: {
    marginLeft: '20px !important',
    marginTop: '5px !important',
    maxWidth: '500px',
    wordWrap: 'break-word'
  },

  userName: {
    color: '#2a1e3e',
    fontWeight: '600'
  },

  imageRowStyle: {
    background: '#f5f5f5',
    width: '82px',
    height: '82px',
    borderRadius: '10px',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '80px',
    fontSize: '40px',
    fontFamily:
      '"Roboto Mono", "monospace", "Lucida Grande", "Lucida Sans Unicode", Tahoma, Sans-Serif',
    fontStyle: 'normal',
    fontWeight: 300,
    color: '#ffffff'
  }
};
