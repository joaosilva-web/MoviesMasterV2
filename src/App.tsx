import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";

function App() {

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
