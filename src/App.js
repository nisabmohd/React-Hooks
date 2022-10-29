// import { UseStateDemo } from "./UseStateDemo";
// import {UseEffectDemo} from './UseEffectDemo'

import { Box } from "./Box";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* <UseStateDemo/> */}
        {/* <UseEffectDemo/> */}
        <Box />
      </div>
    </ThemeProvider>
  );
}

export default App;
