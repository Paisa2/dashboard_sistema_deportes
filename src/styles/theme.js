import { Colors } from "./colors";

export const palette = {
  primary: {
    main : Colors.primary,
    dark: Colors.primary_dark
  },
  seconday: {
    main : Colors.secondary,
    dark: Colors.secondary_dark
  }
};

const appTheme = {
    components : {
      MaiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'nome'
          }
        }
      }
    },
    shape: {
        searchbar: {
          borderRadius:50
        }
    }
}

export default appTheme;