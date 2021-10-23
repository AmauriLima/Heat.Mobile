import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      regular: string,
      bold: string,
    },
    colors: {
      gray: {
        light: string,
        medium: string,
        dark: string,
        darker: string,
      }
      black: {
        dark: string,
        medium: string,
        light: string,
      },
      yellow: string,
      pink: string,
      orange: string,
      white: string,
    },
  }
}
