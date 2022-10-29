// import { UseStateDemo } from "./UseStateDemo";
// import {UseEffectDemo} from './UseEffectDemo'

// import { Box } from "./Box";
import { ThemeProvider } from "./context/ThemeContext";
import { UseRefDemo } from "./UseRefDemo";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* <UseStateDemo/> */}
        {/* <UseEffectDemo/> */}
        {/* <Box /> */} {/* <- for useContext demo */}
        <UseRefDemo/>
      </div>
    </ThemeProvider>
  );
}

export default App;
