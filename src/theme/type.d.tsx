import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      Primary100: string;
      Primary200: string;
      Primary300: string;
      Primary400: string;
      Primary350: string;
      Primary430: string;

      Black100: string;
      Black200: string;
      Black300: string;
      Black400: string;
      Black350: string;
      Black430: string;

      White: string;
      Black: string;

      Gray100: string;
      Gray200: string;
      Gray300: string;
      Gray400: string;
      Gray500: string;

      Blue100: string;
      Blue200: string;
      Blue270: string;

      Green100: string;
      Green200: string;
      Green370: string;

      Yellow100: string;
      Yellow200: string;
      Yellow270: string;

      Red100: string;
      Red200: string;
      Red300: string;

      Pink100: string;
      Pink200: string;
    };
    typography: {
      Tajawal200: {
        fontFamily: string;
        fontWeight: number;
      };
      Tajawal300: {
        fontFamily: string;
        fontWeight: number;
      };
      Tajawal400: {
        fontFamily: string;
        fontWeight: number;
      };
      Tajawal500: {
        fontFamily: string;
        fontWeight: number;
      };
      Tajawal700: {
        fontFamily: string;
        fontWeight: number;
      };
      Tajawal800: {
        fontFamily: string;
        fontWeight: number;
      };
      Tajawal900: {
        fontFamily: string;
        fontWeight: number;
      };
    };
    breakpoint: {
      tablet: string;
      tabletM: string;
      laptop: string;
      laptopM: string;
      desktop: string;
      desktopM: string;
      desktopL: string;
      desktopG: string;
      desktopGG: string;
      desktopX: string;
    };
  }
}
