import React, { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import { debounce } from "../utils/debounce";
import { searchGarment } from "../utils/searchGarment";
import { parseArrayItem, transformArray } from "../utils/transformArray";

interface IProps {
  searchText: string;
}

const DATA_URL =
  "https://stylr-ai-engine-srv-data.s3.eu-west-1.amazonaws.com//srv/data/new_scrapes/shopstyle-1689-men-18-03-2019/garment_items.jl";

const DATA_LIMIT = 10;

function Home({ searchText }: IProps) {
  const [searchData, setSearchData] = useState<Array<Array<IGarmentData>>>([]);
  const [appData, setAppData] = useState<Array<string>>([]);
  const [isSearched, setSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(true);

  const debounceSearch = debounce(searchGarment, 500);

  useEffect(() => {
    if (appData.length && searchText) {
      setLoading(true);
      setSearched(true);
      debounceSearch(searchText, appData, setSearchData, setLoading);
    } else {
      setSearched(false);
    }
  }, [searchText]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(DATA_URL);
        const text = await res.text();
        setAppData(text.split("\n"));
        setLoading(false);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    })();
  }, []);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const getPaginatedData = (data: Array<Array<IGarmentData>>) => {
    const startIndex = currentPage * DATA_LIMIT - DATA_LIMIT;
    const endIndex = startIndex + DATA_LIMIT;
    return data.slice(startIndex, endIndex);
  };

  const getPageCount = () => {
    if (isSearched) {
      return Math.round(searchData.length / DATA_LIMIT);
    }
    return Math.round(appData.length / DATA_LIMIT);
  };

  if (isLoading && isSearched) {
    return (
      <div className="flex justify-center mt-28 ">
        Searching the inventory....
      </div>
    );
  }

  if (isLoading) {
    return <div className="flex justify-center mt-28 ">Loading....</div>;
  }

  if (isSearched && !searchData.length) {
    return <div className="flex justify-center mt-28 ">No results found!</div>;
  }

  return (
    <div>
      {getPaginatedData(
        isSearched ? searchData : transformArray(parseArrayItem(appData))
      )?.map((itemArr, index) => (
        <div className="flex my-5" key={index}>
          {itemArr?.map((item: IGarmentData, index) => (
            <CardComponent item={item} key={index} />
          ))}
        </div>
      ))}
      <div className="flex my-16 justify-center">
        <button
          className="mx-6 px-8 py-2 rounded-md text-blue-900 border-2 bg-white hover:shadow-lg disabled:opacity-50 disabled"
          disabled={currentPage === 1}
          onClick={previousPage}
        >
          Back
        </button>
        <button
          className="mx-6 px-8 py-2 rounded-md text-white bg-blue-800 hover:shadow-lg hover:bg-blue-900 disabled:opacity-50"
          disabled={currentPage === getPageCount()}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
