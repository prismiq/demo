import { useState } from "react";
import Catalog from "../../features/catalog/catalog";
import Header from "./Header";
import { CssBaseline, Container, createTheme, ThemeProvider } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark': 'light';
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: { 
        default: palleteType === 'light' ? 'eaeaea' : '#1212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container><Catalog/></Container>
    </ThemeProvider>
  )
}

export default App;
