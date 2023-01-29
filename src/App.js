import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Calc from './Calc';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Calc />
    </ChakraProvider>
    
  );
}

export default App;
