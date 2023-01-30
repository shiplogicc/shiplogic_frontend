import { grey, red } from '@mui/material/colors';
import { createTheme, ThemeProvider, styled, th, useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';



export default function DefaultTheme({ children }) {
  const muiDefaultTheme = useTheme();
  const thememode = "light"//useSelector(state => state.theme.mode);
  const navColor = "#222f3e"//useSelector(state => state.theme.nav);
  const darkColor = "#222f3e";
  const lightColor = "#fff";

  const customTheme = createTheme({
    palette: {
      mode: thememode,
      background: {
        paper: thememode === "dark" ? darkColor : lightColor,
        default : thememode === "dark" ? "#35424fd6" : "#eef2f6"
      },
      text:{
        primary: thememode === "dark" ? lightColor : darkColor,
        secondary: thememode === "dark" ? lightColor : darkColor,
        disabled: thememode === "dark" ? lightColor : darkColor,
        icon: thememode === "dark" ? lightColor : darkColor
      },
      header: {
        bg: navColor
      }
      
      /*
      header: {
        bg: navColor
      },
      icon:{
        inactive:"#637381",
        active:"red",
      },
      navLink: {
        bg: navColor
      },
      action: {
        hover: "rgba(34,47,62,0.30)"//"#222f3e"//"rgba(0,0,0,0.9)",

      },
      background: {
        paper: '#fff',//thememode == "light" ? "#fff" : "rgb(49,53,63)",
        default: '#eef2f6',//thememode == "light" ? "#fff" : "rgb(49,53,63)",
      }
       */      
    },
  })
  const theme = {...muiDefaultTheme, ...customTheme}
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}