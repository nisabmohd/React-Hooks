// import { UseStateDemo } from "./UseStateDemo";
// import {UseEffectDemo} from './UseEffectDemo'

// import { Box } from "./Box";
import { ThemeProvider } from "./context/ThemeContext";
import { UseMemoDemo } from "./UseMemoDemo";
// import { UseRefDemo } from "./UseRefDemo";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* <UseStateDemo/> */}
        {/* <UseEffectDemo/> */}
        {/* <Box /> */} {/* <- for useContext demo */}
        {/* <UseRefDemo/> */}
        <UseMemoDemo/>
      </div>
    </ThemeProvider>
  );
}

export default App;
