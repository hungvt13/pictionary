import cloneDeep from "lodash/cloneDeep";

export const shuffleArray = (array) => {
  let clonedArr = cloneDeep(array);

  for (let i = clonedArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clonedArr[i], clonedArr[j]] = [clonedArr[j], clonedArr[i]];
  }

  return clonedArr;
};