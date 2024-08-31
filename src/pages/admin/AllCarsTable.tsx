import CarsTable from "../../components/ui/admin/CarsTable";
import { useGetAllCarsQuery } from "../../redux/api/car/carApi";

export type TCarData = {
  _id?: string;
  name: string;
  image?: string[];
  color: string;
  description?: string;
  isElectric?: boolean;
  features: string[];
  pricePerHour?: number;
  status: string;
  isDeleted?: boolean;
};

const AllCarsTable = () => {
  const { data } = useGetAllCarsQuery(undefined);
  console.log(data);
  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-300 via-purple-400 to-pink-200">
      <h1 className="my-2 text-4xl font-bold text-center text-white underline">
        All Cars List & Details
      </h1>
      <div className="w-full px-10 mt-5">
        <div className="w-full">
          <div className="overflow-x-auto">
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
                  <th>Name & Pictures</th>
                  <th>Color</th>
                  <th>Features</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-lg text-black">
                {data?.data?.map((car: TCarData) => (
                  <CarsTable
                    key={car?._id}
                    name={car?.name}
                    color={car?.color}
                    features={car?.features}
                    status={car?.status}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCarsTable;
