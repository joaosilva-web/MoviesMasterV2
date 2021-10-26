import { useState } from "react";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  };


  return (
   <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle/>
        <h1>Hello World</h1>
      </div>
   </ThemeProvider>
  )
}

export default App
