// import { UseStateDemo } from "./UseStateDemo";
// import {UseEffectDemo} from './UseEffectDemo'

// import { Box } from "./Box";
import { ThemeProvider } from "./context/ThemeContext";
// import UseIdDemo from "./UseIdDemo";
import UseLocalSrorageDemo from "./UseLocalSrorageDemo";
// import { UseTransitionDemo } from "./UseTransitionDemo";
// import { UseMemoDemo } from "./UseMemoDemo";
// import { UseRefDemo } from "./UseRefDemo";
// import {UseDebugValueDemo} from './UseDebugValueDemo'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* <UseStateDemo/> */}
        {/* <UseEffectDemo/> */}
        {/* <Box /> */} {/* <- for useContext demo */}
        {/* <UseRefDemo/> */}
        {/* <UseMemoDemo/> */}
        {/* <UseTransitionDemo/> */}
        {/* <UseDebugValueDemo/> */}
        {/* <UseIdDemo/> */}

        <UseLocalSrorageDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;
