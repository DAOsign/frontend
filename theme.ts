import type { Theme } from 'theme-ui'

export const theme: Theme = {
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
    primary: '1px solid #EDEDF3',
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
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
  },
  
}