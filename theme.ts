import type { Theme } from 'theme-ui'

export const theme: Theme = {
  cards: {
   connect: {
     width: '550px',
     height: '390px',
     background: 'rgba(255, 255, 255, 0.24)',
     backdropFilter: 'blur(6px)',
     borderRadius: '10px',
     paddingTop: '32px',
     paddingX: '80px',
     textAlign: 'center'
   }
  },
  forms: {
    input : {
     height: '50px',
     width: '345px',
     background: 'rgba(255, 255, 255, 0.24)',
     borderRadius: '50px',
     backdropFilter: 'blur(6px)',
     fontFamily: 'InterMedium',
     fontStyle: 'normal',
     color: '#212121',
     opacity: 0.5,
     border: 'unset',
     paddingX: '20px'
    }
  },
  buttons: {
     primary: {
      width: '225px',
      height: '50px',
      borderRadius: '40px',
      backgroundColor: '#CA5CF2',
      color: '#fff',
      fontSize: '16px',
      lineHeight: '25.6px',
      fontFamily: 'InterBold',
      fontWeight: 700,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      cursor: 'pointer'
     },
     secondary: {
      height: '50px',
      width: '165px',
      borderRadius: '80px',
      border: '2px solid #CA5CF2',
      backgroundColor: 'inherit',
      color: '#CA5CF2',
      fontSize: '16px',
      lineHeight: '160%',
      fontFamily: 'InterBold',
      fontWeight: 700,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      cursor: 'pointer',
      textAlign: 'center'
     }
  },
  fonts: {
    fontMedium: 'InterMedium',
    fontBold: 'InterBold',
  },
  colors: {
    black: '#212121',
    pink: '#CA5CF2',
    green: '#44F268',
    red: '#FF5269',
    blue: '#5051F2',
    greyPrimary: '#F7F7FB',
    grey: '#EDEDF3',
    greySecondary: '#EDEDF3',
    white: '#fff'
  },
  fontSizes : {
    h1: '48px',
    h2: '32px',
    h3: '28px',
    h4: '24px',
    h5: '20px',
    h6: '16px',
    small: '14px',
    extraSmall: '12px'
  },
  lineHeights: {
    lineHeightPrimary: '120%',
    lineHeightSecondary: '160%'
  },
  fontWeights: {
    bold: 700,
    medium: 500
  },
  borders: {
    grey: '1px solid #EDEDF3',
    borderPink: '2px solid #CA5CF2'
  },
  radii: {
    primary: '40px',
    bigRadius: '80px',
    smallRadius: '8px'
  },
  shadows: {
    primary: 'inset 0px -1px 0px #EFEDF0'
  },
  text: {
    h1: {
      fontFamily: 'InterBold',
      fontWeight: 700,
      lineHeight: '120%',
      fontSize: '48px',
    },
    h2: {
      fontFamily: 'InterBold',
      fontWeight: 700,
      lineHeight: '120%',
      fontSize: '32px',
    },
    h3: {
      fontFamily: 'InterBold',
      fontWeight: 700,
      lineHeight: '120%',
      fontSize: '28px',
    },
    h4: {
      fontFamily: 'InterBold',
      fontWeight: 700,
      lineHeight: '28.8px',
      fontSize: '24px',
    },
    normalTextBold: {
      fontFamily: 'InterBold',
      fontWeight: 700,
      lineHeight: '25.6px',
      fontSize: '16px',
      color: '#212121'
    },
    smallTextMedium: {
      fontFamily: 'InterMedium',
      fontWeight: 500,
      lineHeight: '22.4px',
      fontSize: '14px',
      color: '#212121',
      opacity: 0.5,
    },
    secondary: {
      fontFamily: 'InterMedium',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '15px',
      color: '#212121',
      opacity: 0.5,
    }
  },
}