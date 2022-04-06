import { Flex, Text, HStack, VStack, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import { LetterInput } from '../components/LetterInput';
import { Context } from '../contexts/Context';

const Home: NextPage = () => {
  const {
    selectedPlayer,
    currentInput,
    currentRow,
    handleInputClick,
    checkAnswer,
  } = useContext(Context);

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
                realLetter={selectedPlayer[index]}
                id={index}
                row={row}
                key={index}
                handleClick={() => handleInputClick(index)}
                {...(currentInput === index && { isFocused: true })}
                {...(currentRow === row && { isDisabled: false })}
                {...(currentRow > row && { isSubmitted: true })}
              />
            ))}
          </HStack>
        ))}
      </VStack>
      <Button onClick={checkAnswer}>aqui</Button>
    </Flex>
  );
};

export default Home;
