import React, {ReactNode} from 'react';
import {ViewStyle, TextStyle, ImageStyle, useColorScheme} from 'react-native';
import {
  ThemeProvider as ReStyleThemeProvider,
  createText,
  createBox,
  useTheme as useReTheme,
} from '@shopify/restyle';
export const palette = {
  darkMainBackground: '#111',
  darkMainForeground: '#EEE',
  darksSecondaryCardBackground: '#46923c',
  darkSecondaryCardText: '#2DC59F',
};

const theme = {
  colors: {
    text: '#FFFF',
    textDisabled: 'rgba(255, 255, 255, 0.6)',
    answer: '#2DC59F',
    mainBackground: '#BFEAF5',
    mainForeground: '#46923c',
    secondaryCardBackground: '#EEE',
    secondaryCardText: '#EEE',
    playlist: '#161616',
    transparent: 'transparent',
    buttonBackBackground: 'rgba(255, 255, 255, .5)',
    buttonCorrect: 'rgba(129, 198, 178, .5)',
    buttonWrong: 'rgba(168, 91, 83, .5)',
    rateButton1: '#F17D23',
    rateButton2: '#FBB668',
    rateButton3: '#FFD449',
    rateButton4: '#16624F',
    rateButton5: '#1F8A70',
    linearGradientTopLeft: '#0D2937',
    linearGradientTopRight: '#0B2532',
    linearGradientBottomLeft: '#163B50',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: 'background',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      color: 'secondary',
    },
    title3: {
      fontSize: 20,
      color: 'text',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    button: {
      fontSize: 15,
      color: 'text',
      textAlign: 'center',
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      color: 'secondary',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.darkMainBackground,
    mainForeground: palette.darkMainForeground,

    secondaryCardBackground: palette.darksSecondaryCardBackground,
    secondaryCardText: palette.darkSecondaryCardText,
  },
};

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const colorTheme = useColorScheme();
  const darkMode = colorTheme === 'dark' ? darkTheme : theme;
  return (
    <ReStyleThemeProvider {...{theme: darkMode}}>
      {children}
    </ReStyleThemeProvider>
  );
};

export type Theme = typeof theme;
export type DarkTheme = typeof darkTheme;
export const Box = createBox<DarkTheme>();
export const Text = createText<DarkTheme>();
export const useTheme = () => useReTheme<DarkTheme>();
type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: DarkTheme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
