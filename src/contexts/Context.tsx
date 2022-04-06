import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ContextData {
  selectedPlayer: string;
  currentInput: number;
  setCurrentInput: (value: number) => void;
  currentRow: number;
  setCurrentRow: (value: number) => void;
  handleInputClick: (index: number) => void;
  checkAnswer: () => void;
}

export const Context = createContext({} as ContextData);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [currentInput, setCurrentInput] = useState(0);
  const [currentRow, setCurrentRow] = useState(0);

  useEffect(() => {
    setSelectedPlayer('TACO');
    setCurrentInput(0);
  }, []);

  const handleIfEnter = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setCurrentRow(currentRow + 1);
        setCurrentInput(0);
      }
    },
    [currentRow]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleIfEnter);

    return () => {
      document.removeEventListener('keydown', handleIfEnter);
    };
  }, [handleIfEnter]);

  const handleInputClick = (index: number) => {
    setCurrentInput(index);
  };
  //asdhujasjduasjduiasjdiasjdsiadaskmiodkmaiso
  const [allLetters, setAllLetters] = useState<(string | null)[]>([]);
  const [curRowLetters, setCurRowLetters] = useState([]);

  const checkAnswer = () => {
    const letters = document.getElementsByClassName('letter');
    const lettersArray = Array.from(letters);
    lettersArray.map((letter) => {
      const array = [];

      array.push(letter.textContent);

      setAllLetters(array);
    });
    console.log(allLetters[0]);
  };

  return (
    <Context.Provider
      value={{
        selectedPlayer,
        currentInput,
        setCurrentInput,
        currentRow,
        setCurrentRow,
        handleInputClick,
        checkAnswer,
      }}
    >
      {children}
    </Context.Provider>
  );
}
