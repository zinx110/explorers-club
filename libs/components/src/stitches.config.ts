// Understanding the scale https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
// Pulled from https://github.com/radix-ui/design-system/blob/master/stitches.config.ts
/**
 * Colors Step Use Cases
    1 App background
    2 Subtle background
    3 UI element background
    4 Hovered UI element background
    5 Active / Selected UI element background
    6 Subtle borders and separators
    7 UI element border and focus rings
    8 Hovered UI element border
    9 Solid backgrounds
    10 Hovered solid backgrounds
    11 Low-contrast text
    12 High-contrast text
 */

import {
  gray,
  mauve,
  slate,
  sage,
  olive,
  sand,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  sky,
  mint,
  cyan,
  teal,
  green,
  grass,
  lime,
  yellow,
  amber,
  orange,
  brown,
  bronze,
  gold,
  grayA,
  mauveA,
  slateA,
  sageA,
  oliveA,
  sandA,
  tomatoA,
  redA,
  crimsonA,
  pinkA,
  plumA,
  purpleA,
  violetA,
  indigoA,
  blueA,
  skyA,
  mintA,
  cyanA,
  tealA,
  greenA,
  grassA,
  limeA,
  yellowA,
  amberA,
  orangeA,
  brownA,
  bronzeA,
  goldA,
  whiteA,
  blackA,
  grayDark,
  mauveDark,
  slateDark,
  sageDark,
  oliveDark,
  sandDark,
  tomatoDark,
  redDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
  indigoDark,
  blueDark,
  skyDark,
  mintDark,
  cyanDark,
  tealDark,
  greenDark,
  grassDark,
  limeDark,
  yellowDark,
  amberDark,
  orangeDark,
  brownDark,
  bronzeDark,
  goldDark,
  grayDarkA,
  mauveDarkA,
  slateDarkA,
  sageDarkA,
  oliveDarkA,
  sandDarkA,
  tomatoDarkA,
  redDarkA,
  crimsonDarkA,
  pinkDarkA,
  plumDarkA,
  purpleDarkA,
  violetDarkA,
  indigoDarkA,
  blueDarkA,
  skyDarkA,
  mintDarkA,
  cyanDarkA,
  tealDarkA,
  greenDarkA,
  grassDarkA,
  limeDarkA,
  yellowDarkA,
  amberDarkA,
  orangeDarkA,
  brownDarkA,
  bronzeDarkA,
  goldDarkA,
} from '@radix-ui/colors';

import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      primary1: cyan.cyan1,
      primary2: cyan.cyan2,
      primary3: cyan.cyan3,
      primary4: cyan.cyan4,
      primary5: cyan.cyan5,
      primary6: cyan.cyan6,
      primary7: cyan.cyan7,
      primary8: cyan.cyan8,
      primary9: cyan.cyan9,
      primary10: cyan.cyan10,
      primary11: cyan.cyan11,
      primary12: cyan.cyan12,

      secondary1: amber.amber1,
      secondary2: amber.amber2,
      secondary3: amber.amber3,
      secondary4: amber.amber4,
      secondary5: amber.amber5,
      secondary6: amber.amber6,
      secondary7: amber.amber7,
      secondary8: amber.amber8,
      secondary9: amber.amber9,
      secondary10: amber.amber10,
      secondary11: amber.amber11,
      secondary12: amber.amber12,

      neutral1: slate.slate1,
      neutral2: slate.slate2,
      neutral3: slate.slate3,
      neutral4: slate.slate4,
      neutral5: slate.slate5,
      neutral6: slate.slate6,
      neutral7: slate.slate7,
      neutral8: slate.slate8,
      neutral9: slate.slate9,
      neutral10: slate.slate10,
      neutral11: slate.slate11,
      neutral12: slate.slate12,

      success1: green.green1,
      success2: green.green2,
      success3: green.green3,
      success4: green.green4,
      success5: green.green5,
      success6: green.green6,
      success7: green.green7,
      success8: green.green8,
      success9: green.green9,
      success10: green.green10,
      success11: green.green11,
      success12: green.green12,

      error1: red.red1,
      error2: red.red2,
      error3: red.red3,
      error4: red.red4,
      error5: red.red5,
      error6: red.red6,
      error7: red.red7,
      error8: red.red8,
      error9: red.red9,
      error10: red.red10,
      error11: red.red11,
      error12: red.red12,

      warning1: yellow.yellow1,
      warning2: yellow.yellow2,
      warning3: yellow.yellow3,
      warning4: yellow.yellow4,
      warning5: yellow.yellow5,
      warning6: yellow.yellow6,
      warning7: yellow.yellow7,
      warning8: yellow.yellow8,
      warning9: yellow.yellow9,
      warning10: yellow.yellow10,
      warning11: yellow.yellow11,
      warning12: yellow.yellow12,

      info1: blue.blue1,
      info2: blue.blue2,
      info3: blue.blue3,
      info4: blue.blue4,
      info5: blue.blue5,
      info6: blue.blue6,
      info7: blue.blue7,
      info8: blue.blue8,
      info9: blue.blue9,
      info10: blue.blue10,
      info11: blue.blue11,
      info12: blue.blue12,

      // Semantic colors, pulled from primary
      background: '$primary1',
      panel1: '$primary2',
      panel2: '$primary3',
      border1: '$primary6',
      border2: '$primary7',
      border3: '$primary8',

      // Direct colors, pulled from radix
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...sky,
      ...mint,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...lime,
      ...yellow,
      ...amber,
      ...orange,
      ...brown,
      ...bronze,
      ...gold,

      ...grayA,
      ...mauveA,
      ...slateA,
      ...sageA,
      ...oliveA,
      ...sandA,
      ...tomatoA,
      ...redA,
      ...crimsonA,
      ...pinkA,
      ...plumA,
      ...purpleA,
      ...violetA,
      ...indigoA,
      ...blueA,
      ...skyA,
      ...mintA,
      ...cyanA,
      ...tealA,
      ...greenA,
      ...grassA,
      ...limeA,
      ...yellowA,
      ...amberA,
      ...orangeA,
      ...brownA,
      ...bronzeA,
      ...goldA,

      ...whiteA,
      ...blackA,

      // Semantic colors
      hiContrast: '$slate12',
      // loContrast: '$slate1',
      loContrast: 'white',
      canvas: 'hsl(0 0% 93%)',
      panel: 'white',
      transparentPanel: 'hsl(0 0% 0% / 97%)',
      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',
    },
    fonts: {
      sans: 'Inter, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
      // add a "brand" or artistic font? and a serif one?
    },
    shadows: {
      shadow4:
        '0px 4px 6px -1px rgba(0, 0, 0, .1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      shadow5:
        '0px 10px 15px -3px rgba(0, 0, 0, .1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {
    primary1: cyanDark.cyan1,
    primary2: cyanDark.cyan2,
    primary3: cyanDark.cyan3,
    primary4: cyanDark.cyan4,
    primary5: cyanDark.cyan5,
    primary6: cyanDark.cyan6,
    primary7: cyanDark.cyan7,
    primary8: cyanDark.cyan8,
    primary9: cyanDark.cyan9,
    primary10: cyanDark.cyan10,
    primary11: cyanDark.cyan11,
    primary12: cyanDark.cyan12,

    secondary1: amberDark.amber1,
    secondary2: amberDark.amber2,
    secondary3: amberDark.amber3,
    secondary4: amberDark.amber4,
    secondary5: amberDark.amber5,
    secondary6: amberDark.amber6,
    secondary7: amberDark.amber7,
    secondary8: amberDark.amber8,
    secondary9: amberDark.amber9,
    secondary10: amberDark.amber10,
    secondary11: amberDark.amber11,
    secondary12: amberDark.amber12,

    neutral1: slateDark.slate1,
    neutral2: slateDark.slate2,
    neutral3: slateDark.slate3,
    neutral4: slateDark.slate4,
    neutral5: slateDark.slate5,
    neutral6: slateDark.slate6,
    neutral7: slateDark.slate7,
    neutral8: slateDark.slate8,
    neutral9: slateDark.slate9,
    neutral10: slateDark.slate10,
    neutral11: slateDark.slate11,
    neutral12: slateDark.slate12,

    success1: greenDark.green1,
    success2: greenDark.green2,
    success3: greenDark.green3,
    success4: greenDark.green4,
    success5: greenDark.green5,
    success6: greenDark.green6,
    success7: greenDark.green7,
    success8: greenDark.green8,
    success9: greenDark.green9,
    success10: greenDark.green10,
    success11: greenDark.green11,
    success12: greenDark.green12,

    error1: redDark.red1,
    error2: redDark.red2,
    error3: redDark.red3,
    error4: redDark.red4,
    error5: redDark.red5,
    error6: redDark.red6,
    error7: redDark.red7,
    error8: redDark.red8,
    error9: redDark.red9,
    error10: redDark.red10,
    error11: redDark.red11,
    error12: redDark.red12,

    warning1: yellowDark.yellow1,
    warning2: yellowDark.yellow2,
    warning3: yellowDark.yellow3,
    warning4: yellowDark.yellow4,
    warning5: yellowDark.yellow5,
    warning6: yellowDark.yellow6,
    warning7: yellowDark.yellow7,
    warning8: yellowDark.yellow8,
    warning9: yellowDark.yellow9,
    warning10: yellowDark.yellow10,
    warning11: yellowDark.yellow11,
    warning12: yellowDark.yellow12,

    info1: blueDark.blue1,
    info2: blueDark.blue2,
    info3: blueDark.blue3,
    info4: blueDark.blue4,
    info5: blueDark.blue5,
    info6: blueDark.blue6,
    info7: blueDark.blue7,
    info8: blueDark.blue8,
    info9: blueDark.blue9,
    info10: blueDark.blue10,
    info11: blueDark.blue11,
    info12: blueDark.blue12,

    // Semantic colors, pulled from primary
    background: '$primary1',
    panel1: '$primary2',
    panel2: '$primary3',
    border1: '$primary6',
    border2: '$primary7',
    border3: '$primary8',

    // Direct colors, pulled from radix
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...skyDark,
    ...mintDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...grassDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,
    ...orangeDark,
    ...brownDark,
    ...bronzeDark,
    ...goldDark,

    ...grayDarkA,
    ...mauveDarkA,
    ...slateDarkA,
    ...sageDarkA,
    ...oliveDarkA,
    ...sandDarkA,
    ...tomatoDarkA,
    ...redDarkA,
    ...crimsonDarkA,
    ...pinkDarkA,
    ...plumDarkA,
    ...purpleDarkA,
    ...violetDarkA,
    ...indigoDarkA,
    ...blueDarkA,
    ...skyDarkA,
    ...mintDarkA,
    ...cyanDarkA,
    ...tealDarkA,
    ...greenDarkA,
    ...grassDarkA,
    ...limeDarkA,
    ...yellowDarkA,
    ...amberDarkA,
    ...orangeDarkA,
    ...brownDarkA,
    ...bronzeDarkA,
    ...goldDarkA,

    // Semantic colors
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',
  },
});

export type TeamColor = 'magenta' | 'cyan' | 'gold';

export type PlayerColor =
  | 'yellow'
  | 'purple'
  | 'green'
  | 'blue'
  | 'orange'
  | 'red'
  | 'pink'
  | 'brown';

export const colorBySlotNumber: Record<number, PlayerColor> = {
  1: 'yellow',
  2: 'purple',
  3: 'green',
  4: 'blue',
  5: 'orange',
  6: 'red',
  7: 'pink',
  8: 'brown',
};
