import { useState } from "react";
import CarCard from "../../components/ui/public/CarCard";
import { useGetAllCarsQuery } from "../../redux/api/car/carApi";
import { TCarData } from "../admin/AllCarsTable";
import SearchInputField from "../../components/shared/SearchInputField";

const AllCars = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading } = useGetAllCarsQuery([
    { name: "limit", value: 9 },
    { name: "page", value: page },
    { name: "searchTerm", value: searchTerm || "" },
    // { name: "sort", value: `${sortField},${sortOrder}` },
  ]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const allCars = data?.data || [];
  const metaData = data?.meta;
  const { totalPage = 1 } = metaData || {};

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setPage(1); // Reset to the first page on a new search
  };

  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 my-10">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>

      <div
        role="status"
        className="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex"
      >
        <div className="w-full h-48 bg-[#f5f5f5] sm:w-96 dark:bg-gray-700">
          <h1 className="p-3 text-2xl font-bold">Filters</h1>
          {/* Filter components go here... */}
        </div>

        <div className="w-full bg-[#f5f5f5]">
          <h1 className="p-3 text-2xl font-bold">Products</h1>
          <div className="flex items-center justify-between px-3">
            {/* <h5>Showing 1-24 of {allCars.length} products</h5> */}
            <h5>
              Showing {allCars.length} of {data?.meta?.total || 0} products
            </h5>
            {/* Sorting select boxes go here... */}
            <SearchInputField onSearch={handleSearch} />
            <div className="items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
              <span className="block">
                Page {page} of {totalPage}
              </span>
              <div className="space-x-1">
                <button
                  onClick={handlePreviousPage}
                  disabled={page === 1 || isLoading}
                  title="previous"
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
                >
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={page >= totalPage || isLoading}
                  title="next"
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
                >
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-3 gap-10 mx-3 my-5">
            {allCars.length > 0 ? (
              allCars.map((car: TCarData, index) => (
                <CarCard car={car} key={index} />
              ))
            ) : (
              <p>No cars available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCars;
