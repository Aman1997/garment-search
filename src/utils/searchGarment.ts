import { Dispatch } from "react";
import { transformArray } from "./transformArray";

export const searchGarment = (
  searchQuery: string,
  data: Array<string>,
  setSearchData: Dispatch<Array<Array<IGarmentData>>>,
  setLoading: Dispatch<boolean>
) => {
  if (!searchQuery || !data.length) return;
  const query = searchQuery?.split(" ").map((query) => query?.toLowerCase());
  const reqdArr = data
    ?.map((item) => JSON.parse(item || "{}"))
    .filter((item) => item)
    .filter((garment: IGarmentData) =>
      checkForInclusion(
        `${garment?.brand?.toString()} ${garment?.product_title?.toString()} ${garment?.product_description?.toString()}`,
        query
      )
    );
  setSearchData(transformArray(reqdArr));
  setLoading(false)
};

export const checkForInclusion = (
  mainString: string = "",
  arr: Array<string>
) => {
  return arr?.filter((item) => mainString?.toLowerCase()?.includes(item))
    ?.length === arr.length
    ? true
    : false;
};
