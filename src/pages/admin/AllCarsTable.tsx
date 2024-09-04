import { useState } from "react";
import CarsTable from "../../components/ui/admin/CarsTable";
import { useGetAllCarsQuery } from "../../redux/api/car/carApi";
import Loader from "../../components/shared/Loader";

export type TCarData = {
  _id?: string;
  name: string;
  image?: string[];
  color?: string;
  description?: string;
  isElectric?: boolean;
  features: string[];
  pricePerHour?: number;
  status: string;
  isDeleted: boolean;
};

const AllCarsTable = () => {
  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const { data, isLoading } = useGetAllCarsQuery([
    { name: "limit", value: 5 },
    { name: "page", value: page },
    { name: "sort", value: `${sortField},${sortOrder}` },
  ]);

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

  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-white via-purple-600 to-black">
      <h1 className="my-2 text-4xl font-bold text-center text-black underline">
        All Cars List & Details
      </h1>
      <div className="w-full px-10 mt-10">
        <div className="w-full">
          <div className="overflow-x-auto">
            {isLoading ? (
              //<p>Loading...</p>
              <Loader smallHeight />
            ) : (
              <table className="table table-xs">
                <thead className="text-xl font-bold text-black">
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox"
                          title="table-checkbox"
                        />
                      </label>
                    </th>
                    <th>SL</th>
                    <th onClick={() => handleSort("name")}>Name & Pictures</th>
                    <th onClick={() => handleSort("isDeleted")}>Is Delete?</th>
                    <th onClick={() => handleSort("features")}>Features</th>
                    <th onClick={() => handleSort("status")}>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-lg text-black">
                  {data?.data?.map((car: TCarData, index: number) => (
                    <CarsTable
                      key={car?._id}
                      serialNumber={index + 1 + (page - 1) * 5}
                      name={car?.name}
                      isDeleted={car?.isDeleted}
                      features={car?.features}
                      status={car?.status}
                      _id={car?._id}
                    />
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="grid w-1/2 grid-cols-2 mt-8 join">
            <button
              className="join-item btn btn-outline"
              onClick={handlePreviousPage}
              disabled={page === 1 || isLoading}
            >
              Previous page
            </button>
            <button
              className="join-item btn btn-outline"
              onClick={handleNextPage}
              disabled={page >= totalPage || isLoading}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCarsTable;
