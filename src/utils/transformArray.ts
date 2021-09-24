export const transformArray = (
  arr: Array<IGarmentData>,
) => {
  let transformedArr: Array<Array<IGarmentData>> = [];
  while (arr.length > 0) {
    transformedArr.push(arr.splice(0, 2));
  }
  return transformedArr;
};

export const parseArrayItem = (arr: Array<string>) => {
  return arr.map((item) => JSON.parse(item || "{}"));
};
