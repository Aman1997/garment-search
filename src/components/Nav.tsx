import { ChangeEvent, Dispatch } from "react";

interface IProps {
  searchText: string;
  setSearchText: Dispatch<string>;
}

function Nav({ searchText, setSearchText }: IProps) {
  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="w-full ml-8">
          <div className="flex">
            <div className="flex space-x-7 w-full">
              <div className="mr-12">
                {/* <!-- Website Logo --> */}
                <a href="/" className="flex items-center py-4">
                  <span className="font-semibold text-blue-900 text-lg">
                    Assignment
                  </span>
                </a>
              </div>
              <div className=" flex items-center w-1/2">
                <input
                  className="focus:border-blue-600 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-5"
                  type="text"
                  aria-label="Search Garments"
                  placeholder="Search from the collection of 5400+ garments"
                  value={searchText}
                  onChange={handleTextChange}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
