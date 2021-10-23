import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grey50: string;
      grey100: string;
      grey200: string;
      grey300: string;
      grey400: string;
      grey500: string;
      grey600: string;
      grey700: string;
      grey800: string;
      grey900: string;

      primary50: string;
      primary100: string;
      primary200: string;
      primary300: string;
      primary400: string;
      primary500: string;
      primary600: string;
      primary700: string;

      success100: string;
      success500: string;

      error100: string;
      error500: string;
    };
    size: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      8: string;
      16: string;
      20: string;
      40: string;
    };
  }
}
