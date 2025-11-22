
import Display from "./Display.jsx";
import Symbol from "./Symbol.jsx";
import Box from "./Box.jsx";
import Button from "./Button.jsx";

const App = () => {
  return (
    <>
    <Box>
      <Display>
        <Symbol />
      </Display>
      <Box 
        Display="grid"
        columns="grid-cols-4"
        gap='gap-2'
        padding='py-3'
      >
        <Buttton 
          backgroundColor='bg-gray-700'
          />
        <Buttton 
          backgroundColor='bg-gray-700'
          />
        <Buttton 
          backgroundColor='bg-gray-700'
          />
        <Buttton 
          backgroundColor='bg-gray-700'
          />
      </Box>
    </Box>
    </>
  );
}

export default App;
