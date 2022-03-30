import { Flex, Text, HStack, Box, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { LetterInput } from '../components/LetterInput';

const Home: NextPage = () => {
  const [selectedPlayer, setSelectedPlayer] = useState('');

  const [currentInput, setCurrentInput] = useState(0);
  const [currentRow, setCurrentRow] = useState(0);

  const [keyPressed, setKeyPressed] = useState('');

  useEffect(() => {
    setSelectedPlayer('TACO');
    setCurrentInput(0);
  }, []);

  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputClick = (index: number) => {
    setCurrentInput(index);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    console.log(key, currentInput);

    // TODO
    // if (key === 'ENTER') {
    //   setCurrentRow(currentRow + 1);
    //   setCurrentInput(0);
    // }
  };

  return (
    <Flex
      mx="auto"
      align="center"
      h="100vh"
      flexDir="column"
      w="100%"
      px="2rem"
      maxWidth="520px"
    >
      <Text color="purple.50" fontSize={46} fontWeight="bold">
        csgooo
      </Text>
      <Text color="purple.50" fontWeight="semibold">
        Daily CS:GO wordle game
      </Text>

      <VStack spacing={4} mt="3rem">
        {[...Array(6)].map((_, row) => (
          <HStack key={row}>
            {Array.from(selectedPlayer).map((_, index) => (
              <LetterInput
                letter=""
                row={row}
                key={index}
                handleClick={() => handleInputClick(index)}
                {...(currentInput === index && { isFocused: true })}
                {...(currentRow === row && { isDisabled: false })}
              />
            ))}
          </HStack>
        ))}
      </VStack>
    </Flex>
  );
};

export default Home;
