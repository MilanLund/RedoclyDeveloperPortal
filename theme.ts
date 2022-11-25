import { lighten, darken, readableColor } from 'polished';

export const theme = {
   spacing: {
    unit: 4,
  //   sectionHorizontal: ({ spacing }) => spacing.unit * 8,
    sectionVertical: 32,
   },
  // breakpoints: {
  //   xs: 0,
  //   small: '550px',
  //   medium: '900px',
  //   large: '1200px',
  // },
  colors: {
    // tonalOffset: 0.2,
    primary: {
      main: '#231F20',
      // light: ({ colors }) => lighten(colors.tonalOffset, colors.primary.main),
      // dark: 'yellow', ({ colors }) => darken(colors.tonalOffset, colors.primary.main),
      // contrastText: ({ colors }) => readableColor(colors.primary.main),
    },
    secondary: {
      contrastText: '#231F20',
      light: '#f3f3f3',
      //main: 'transparent',
    },
    success: {
       main: '#36A284',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 3, colors.success.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.success.main),
    //   contrastText: ({ colors }) => readableColor(colors.success.main),
    },
    error: {
       main: '#B72929',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.error.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.error.main),
    //   contrastText: ({ colors }) => readableColor(colors.error.main),
    },
    warning: {
      main: '#d4ad03',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.warning.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.warning.main),
    //   contrastText: ({ colors }) => readableColor(colors.warning.main),
    },
    info: {
      main: '#f5e1da',
    //   light: ({ colors }) => lighten(colors.tonalOffset * 2, colors.info.main),
    //   dark: ({ colors }) => darken(colors.tonalOffset, colors.info.main),
    //   contrastText: ({ colors }) => readableColor(colors.info.main),
    },
    text: {
      //light: '#231F20',
      primary: '#231F20',
      secondary: '#231F20',
    },
    border: {
      dark: 'transparent',
      light: '#e8e8e8',
    },
    accent: {
      dark: '#3195a6'
    },
    responses: {
      success: {
        //     color: ({ colors }) => colors.success.main,
        backgroundColor: '#ecf6f2',
        borderColor: '#44B77A'
      },
      error: {
        //     color: ({ colors }) => colors.error.main,
        backgroundColor: '#f7e9e9',
        borderColor: '#B72929'
      },
      redirect: {
        //     color: ({ colors }) => colors.warning.main,
        backgroundColor: '#fff9ee',
        borderColor: '#FBC15E'
      },
      info: {
        //     color: ({ colors }) => colors.info.main,
        backgroundColor: '#f5e1da',
        borderColor: '#F05A22'
      },
    },
    http: {
      get: '#44B77A',
      post: '#8054B4',
      put: '#1C60BF',
      options: '#EBB500',
      patch: '#F05A22',
      delete: '#C42D61',
      basic: '#96A236',
      link: '#908E8F',
      head: '#231F20',
    },
    // navbar: {
    //   main: ({ colors }) => colors.primary.main,
    //   gradient: ({ colors }) => darken(colors.tonalOffset / 2, colors.navbar.main),
    //   contrastText: 'white'
    // },
    // footer: {
      // main: ({ colors }) => colors.primary.main,
      // contrastText: 'white'
    // },
  },

  sidebar: {
    backgroundColor: 'transparent',
    width: '285px',
    activeBgColor: 'transparent',
    textColor: '#908E8F',
    activeTextColor: '#231F20',
    caretColor: '#3dcca8',
    rightLineColor: 'transparent',
  },
  // tocPanel: {
  //   width: '240px',
  // },

  typography: {
    fontSize: '16px',
    lineHeight: '1.5em',
    fontWeightRegular: '500',
    fontWeightBold: '700',
    fontWeightLight: '300',
    fontFamily: 'Work Sans, sans-serif',
    headings: {
      fontFamily: 'Work Sans, sans-serif',
      fontWeight: '700',
    },
    heading1: {
      fontSize: '2em',
    //   fontWeight: '600',
    //   fontFamily: ({ typography }) => typography.headings.fontFamily,
    //   lineHeight: ({ typography }) => typography.lineHeight,
      color: '#231F20',
    //   capitalize: true,
     },
    heading2: {
        fontSize: '1.375em',
    //   fontWeight: '600',
    //   color: ({ colors }) => colors.text.primary,
    //   fontFamily: ({ typography }) => typography.headings.fontFamily,
    //   lineHeight: ({ typography }) => typography.lineHeight,
    //   capitalize: false,
    },
    heading3: {
       fontSize: '1.125em',
    //   fontWeight: '600',
    //   color: ({ colors }) => colors.text.primary,
    //   fontFamily: ({ typography }) => typography.headings.fontFamily,
    //   lineHeight: ({ typography }) => typography.lineHeight,
    //   capitalize: false,
    },
    // heading4: {
    // // ...
    // },
    // heading5: {
    // // ...
    // },
    // heading6: {
    // // ...
    // },
    code: {
      fontSize: '14px',
      fontFamily: 'Inconsolata, Consolas, monospace',
      // fontWeight: ({ typography }) => typography.fontWeightRegular,
      color: '#393a34',
      backgroundColor: '#f3f3f3',
      wrap: false,
    },
    links: {
      color: '#6552c4',
      textDecoration: 'underline',
      // visited: ({ typography }) => typography.links.color,
      hover: ({ typography }) => '#6552c4',
    },
  },
  rightPanel: {
    backgroundColor: 'red',
    width: '40%',
    textColor: '#231F20',
  },
  schema: {
    labelsTextSize: '0.875em',
    linesColor: '#bcbbbb',
    nestedBackground: '#f3f3f3',
    requireLabelColor: '#C42D61',
    typeNameColor: '#908E8F',
    typeTitleColor: '#F05A22',
  },
   codeBlock: {
    borderRadius: '36px 36px 12px 36px',
    backgroundColor: '#fff'
   },
   components: {
    buttons: {
      borderRadius: '26px',
      hoverStyle: 'background-color:#231F20;color:#fff',
      fontWeight: '700',
      boxShadow: 'none',
      hoverBoxShadow: 'none',
    },
    httpBadges: {
      color: '#fff',
      fontFamily: 'Work Sans, sans-serif',
      fontWeight: '400',
      sizes: {
        small: {
          fontSize: '10px',
          lineHeight: '1.75em',
        },
        medium: {
          fontSize: '14px',
          lineHeight: '1.75em'
        }
      }
    },
    panels: {
      backgroundColor: 'transprent',
      borderRadius: '24px 24px 8px 24px',
    }
  },
  overrides: {
    DownloadButton: {
      custom: 'padding: 12px 32px;font-size: 16px;box-shadow: 0 0 0 2px #231f20;'
    }
  }
};