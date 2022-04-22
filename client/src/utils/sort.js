export const sortScores = (arr) => {
  const newArr = [...arr];
  newArr.sort((a, b) => b - a);
  return newArr;
};
