import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      primary: string;
      black: string;
      linen: string;
      darkslategrey: string;
      darkgrey: string;
      ghostwhite: string;
      lightgrey: string;
    };
  }
}
