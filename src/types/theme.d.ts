export interface ITheme {
    background:{
        primary: string,
        secondary: string,
    } ,
    highlight: string,
    font: string,
}
export interface IGlobalStyleProps {
    theme: ITheme;
  }
