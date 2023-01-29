import {
  useState,
  useRef
} from "react"; 
import "./App.css";
import {
  ChakraProvider,
  theme,
  Center, 
  Square, 
  Circle,
  VStack,
  HStack,
  Heading,
  Divider,
  Text,
  Button, 
  ButtonGroup,
  SimpleGrid
} from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react'

function Calc() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value)); 
    }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault();
    setResult((result) => result/Number(inputRef.current.value)); 
  
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = 0 
  
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    setResult((preVal) => preVal*0); 

  };
  return ( 
    <Center h='650px'>
        <VStack>
          <Heading>
           Simplest Working Calculator 
          </Heading> 
            <Text ref={resultRef}> 
              {result}
            </Text> 
          <NumberInput>
           <NumberInputField ref={inputRef}/>
          </NumberInput> 
          <HStack>
            
            <Button onClick={plus}>add</Button> 
            <Button onClick={minus}>subtract</Button>
            <Button onClick={times}>multiply</Button>
            <Button onClick={divide}>divide</Button>
            <Button onClick={resetInput}>Reset Input</Button>
            <Button onClick={resetResult}>Reset Result</Button>
          </HStack>
        </VStack>
    </Center> 
  ); 
} 
 
export default Calc; 

