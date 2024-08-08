export const anagrams = (payload: string[]) => {
  return [payload];
};

export const sortArrayOfStrings = (payload: string[]) => {
  return [payload];
};

export const formatName = (payload: string[]) => {
  return [payload];
};

export const sortAndDedupArratOfNumberStrings = (payload: string[]) => {
  return [payload];
};

export const fizzBuzz = (payload: string[]) => {
  return [payload];
};

interface App {
  process(
    dataIn: () => string[],
    dataOut: (payload: string[]) => string[][]
  ): string[][];
}

export const AppRunner: App = {
  process: (dataIn, dataOut) => dataOut(dataIn()),
};
