import { Flex, Text } from '@chakra-ui/react';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Context } from '../contexts/Context';

interface LetterInputProps {
  realLetter: string;
  id: number;
  row: number;
  isFocused?: boolean;
  isDisabled?: boolean;
  isSubmitted?: boolean;
  handleClick: () => void;
}

const regex = /[a-zA-Z0-9-_\.$]/;

export const LetterInput = ({
  realLetter,
  id,
  row,
  isFocused = false,
  isDisabled = true,
  isSubmitted = false,
  handleClick,
}: LetterInputProps) => {
  const {
    selectedPlayer,
    currentInput,
    currentRow,
    setCurrentRow,
    setCurrentInput,
  } = useContext(Context);

  const [letter, setLetter] = useState('');

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();

      if (currentInput === id && currentRow === row) {
        if (key === 'ENTER') {
          //TODO
        }

        if (key === 'BACKSPACE') {
          setLetter('');

          if (currentInput !== 0) {
            setCurrentInput(id - 1);
          }
        }

        if (!regex.test(key) || key.length > 1) {
          return;
        }

        setLetter(key);
        if (currentInput !== selectedPlayer.length - 1) {
          setCurrentInput(id + 1);
        }
      }
    },
    [currentInput, currentRow, id, row, selectedPlayer.length, setCurrentInput]
  );

  const bgColor = () => {
    if (isSubmitted) {
      if (letter === realLetter) {
        return 'green.100';
      } else if (selectedPlayer.includes(letter)) {
        return 'yellow.200';
      } else {
        return 'gray.400';
      }
    } else {
      return 'purple.50';
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Flex
      id={id.toString()}
      onClick={isDisabled ? undefined : handleClick}
      boxSize={20}
      borderRadius={10}
      bgColor={bgColor()}
      align="center"
      justify="center"
      filter={isDisabled && !isSubmitted ? 'brightness(50%)' : 'none'}
      borderBottom={
        isFocused && !isDisabled ? '8px solid #322659' : '4px solid #44337A'
      }
      transition="all 0.2s"
      _hover={{
        cursor: 'pointer',
        filter:
          isDisabled && !isSubmitted ? 'brightness(40%)' : 'brightness(85%)',
      }}
    >
      <Text
        className="letter"
        fontSize="3rem"
        fontWeight="bold"
        userSelect="none"
      >
        {letter}
      </Text>
    </Flex>
  );
};
