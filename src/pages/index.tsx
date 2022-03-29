import { Flex, Text, HStack, Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
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

      <HStack mt="4rem">
        <Flex
          boxSize={20}
          borderRadius={10}
          bgColor="green.200"
          align="center"
          justify="center"
          _hover={{ cursor: 'pointer' }}
        >
          <Text fontSize="3rem" fontWeight="bold" userSelect="none">
            A
          </Text>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Home;
