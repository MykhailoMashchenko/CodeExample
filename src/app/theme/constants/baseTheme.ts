import { createTheme, useTheme as useRestyleTheme } from '@shopify/restyle';
import { Palette } from 'src/app/theme/constants/colors';
import { getFontWithScaleFactor } from 'src/shared/utils/layout/layout';

export const shopifyTheme = createTheme({
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  colors: {
    black: Palette.black,
    blackOpacity: Palette.black50opacity,
    blue: Palette.blue,
    blue05: Palette.blue05,
    control: Palette.nepal,
    darkGrey: Palette.darkGrey,
    disabledButton: Palette.darkGrey,
    errorColor: Palette.mandy,
    green: Palette.green,
    grey: Palette.grey,
    linkText: Palette.blue,
    onPrimary: Palette.white,
    orange: Palette.orange,
    osloGray: Palette.osloGray,
    outline: Palette.black,
    pink: Palette.pink,
    primary: Palette.ronchi,
    primaryActive: Palette.oldGold,
    primaryBackground: Palette.white,
    primaryDisabled: Palette.alto,
    primaryDisabledIcon: Palette.black,
    primaryText: Palette.black,
    purple: Palette.purple,
    red: Palette.notification,
    secondary: Palette.nepal,
    secondaryText: Palette.shipGray,
    success: Palette.atlantis,
    transparent: Palette.transparent,
    white: Palette.white,
    yellow: Palette.yellow,
  },
  inputVariants: {
    regular: {
      color: 'primaryText',
      fontFamily: 'Spartan',
      fontSize: 16,
      fontWeight: 'medium',
      paddingVertical: 'm',
    },
  },
  spacing: {
    l: 24,
    m: 16,
    none: 0,
    s: 8,
    sm: 12,
    xl: 32,
    xs: 4,
    xxl: 40,
    xxxl: 60,
  },

  textVariants: {
    body: {
      fontFamily: 'Spartan',
      fontSize: getFontWithScaleFactor(20),
      lineHeight: getFontWithScaleFactor(22.4),
    },
    boldSubhead5: {
      fontFamily: 'SpartanBold',
      fontSize: getFontWithScaleFactor(14),
      lineHeight: getFontWithScaleFactor(16),
    },
    boldText: {
      fontFamily: 'SpartanBold',
      fontSize: getFontWithScaleFactor(20),
      lineHeight: getFontWithScaleFactor(22.4),
    },
    defaults: {
      fontFamily: 'Spartan',
      fontSize: getFontWithScaleFactor(16),
      lineHeight: getFontWithScaleFactor(18),
    },
    h1: {
      color: 'primaryText',
      fontFamily: 'SpartanMedium',
      fontSize: getFontWithScaleFactor(40),
      fontWeight: 600,
      lineHeight: getFontWithScaleFactor(44),
    },
    h2: {
      color: 'primaryText',
      fontFamily: 'SpartanMedium',
      fontSize: getFontWithScaleFactor(20),
      lineHeight: getFontWithScaleFactor(22.4),
    },
    h3: {
      color: 'primaryText',
      fontFamily: 'SpartanMedium',
      fontSize: getFontWithScaleFactor(16),
      lineHeight: getFontWithScaleFactor(24),
    },
    h4: {
      color: 'primaryText',
      fontFamily: 'Spartan',
      fontSize: getFontWithScaleFactor(16),
      lineHeight: getFontWithScaleFactor(20),
    },
    headingText: {
      fontFamily: 'SpartanMedium',
      fontSize: getFontWithScaleFactor(20),
      lineHeight: getFontWithScaleFactor(22.4),
    },
    headingText2: {
      fontFamily: 'Spartan',
      fontSize: getFontWithScaleFactor(29),
      lineHeight: getFontWithScaleFactor(29.4),
    },
    subhead: {
      color: 'black',
      fontFamily: 'Spartan',
      fontSize: getFontWithScaleFactor(16),
      lineHeight: getFontWithScaleFactor(20),
    },
    subhead2: {
      fontFamily: 'Spartan',
      fontSize: getFontWithScaleFactor(18),
      lineHeight: getFontWithScaleFactor(20),
    },
    subhead3: {
      fontFamily: 'Spartan',
      fontSize: getFontWithScaleFactor(20),
      lineHeight: getFontWithScaleFactor(24),
    },
    subhead4: {
      fontFamily: 'Spartan',
      fontSize: getFontWithScaleFactor(14),
      fontWeight: '300',
      lineHeight: getFontWithScaleFactor(16),
      opacity: 0.7,
    },
    subhead4bold: {
      fontFamily: 'SpartanMedium',
      fontSize: getFontWithScaleFactor(16),
      lineHeight: getFontWithScaleFactor(20),
    },
    subhead5: {
      fontFamily: 'Spartan',
      fontSize: getFontWithScaleFactor(14),
      lineHeight: getFontWithScaleFactor(16),
    },
    subheadBold: {
      color: 'black',
      fontFamily: 'SpartanBold',
      fontSize: getFontWithScaleFactor(16),
      lineHeight: getFontWithScaleFactor(20),
    },
    subheadLight: {
      color: 'primaryText',
      fontFamily: 'Spartan',
      fontSize: getFontWithScaleFactor(16),
      lineHeight: getFontWithScaleFactor(20),
    },
  },
  themeIcon: {
    size: {
      default: 18,
      huge: 28,
      large: 24,
      medium: 20,
      small: 16,
      tiny: 14,
    },
  },
});

export type ShopifyThemeType = typeof shopifyTheme;
export function useTheme() {
  return useRestyleTheme<ShopifyThemeType>();
}
export type Spacing = keyof ShopifyThemeType['spacing'];
export type Colors = keyof ShopifyThemeType['colors'];
