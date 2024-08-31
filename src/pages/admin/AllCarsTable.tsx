import CarsTable from "../../components/ui/admin/CarsTable";
import { useGetAllCarsQuery } from "../../redux/api/car/carApi";

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
  const { data } = useGetAllCarsQuery(undefined);
  console.log(data);
  return (
    <div className="w-full h-screen bg-gradient-to-br from-white via-purple-600 to-black">
      <h1 className="my-2 text-4xl font-bold text-center text-black underline">
        All Cars List & Details
      </h1>
      <div className="w-full px-10 mt-10">
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
                  <th>Is Delete?</th>
                  <th>Features</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-lg text-black">
                {data?.data?.map((car: TCarData, index: number) => (
                  <CarsTable
                    key={car?._id}
                    serialNumber={index + 1}
                    name={car?.name}
                    isDeleted={car?.isDeleted}
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
