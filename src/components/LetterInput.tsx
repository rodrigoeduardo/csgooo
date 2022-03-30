import { Flex, Text } from '@chakra-ui/react';

interface LetterInputProps {
  letter: string;
  row: number;
  isFocused?: boolean;
  isDisabled?: boolean;
  handleClick: () => void;
}

export const LetterInput = ({
  letter,
  isFocused = false,
  isDisabled = true,
  handleClick,
}: LetterInputProps) => {
  return (
    <Flex
      onClick={isDisabled ? undefined : handleClick}
      boxSize={20}
      borderRadius={10}
      bgColor="purple.50"
      align="center"
      justify="center"
      filter={isDisabled ? 'brightness(50%)' : 'none'}
      borderBottom={
        isFocused && !isDisabled ? '8px solid #322659' : '4px solid #44337A'
      }
      transition="all 0.2s"
      _hover={{ cursor: 'pointer', filter: 'brightness(80%)' }}
    >
      <Text fontSize="3rem" fontWeight="bold" userSelect="none">
        {letter}
      </Text>
    </Flex>
  );
};
