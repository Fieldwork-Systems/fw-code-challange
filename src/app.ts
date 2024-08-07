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

export const AppRunner = (
  dataIn: () => string[],
  dataOut: (payload: string[]) => string[][]
) => dataOut(dataIn());
