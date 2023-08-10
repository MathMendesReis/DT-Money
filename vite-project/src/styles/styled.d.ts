import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      circular: string;
    };
    breakpoints?: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    spacing?: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      white100: string
      white200: string
      black: string
      red: string
      redDark: string
      green: string
      greenLigth: string
      greenDark: string
      gray100: string
      gray200: string
      gray300: string
      gray400: string

    }
    fontFamily: {
      heading: string
      sans: string
      mono: string
    }
    fontSize: {
      xs: string
      sm: string
      md: string
      base: string
      lg: string
    }
  }
}
