export const sortScores = (arr: number[]): number[] => {
  const newArr = [...arr];
  newArr.sort((a, b) => b - a);
  return newArr;
};

export default{
  sortScores
}