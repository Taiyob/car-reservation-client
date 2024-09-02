import { MdOutlineAutoDelete } from "react-icons/md";
import { TCarData } from "../../../pages/admin/AllCarsTable";
import { FcEditImage } from "react-icons/fc";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDeleteCarMutation } from "../../../redux/api/car/carApi";
import Swal from "sweetalert2";

type CarsTableProps = TCarData & {
  serialNumber: number;
};

const CarsTable = ({
  _id,
  serialNumber,
  name,
  isDeleted,
  features,
  status,
}: CarsTableProps) => {
  const [isSwapped, setIsSwapped] = useState(isDeleted);
  const [deleteCar] = useDeleteCarMutation();

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
  };

  const handleDelete = async (id: string) => {
    //console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const deletedItem = await deleteCar(id).unwrap();
          if (deletedItem.success) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Car is deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } catch (error) {
          console.log(error);
          if ((error as any)?.status === 404) {
            Swal.fire({
              title: "Deleted!",
              text: "Already deleted this item.",
              icon: "error",
            });
          } else {
            Swal.fire({
              title: "Deleted!",
              text: "Something went wrong.",
              icon: "error",
            });
          }
        }
      }
    });
  };

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" title="table-checkbox" />
        </label>
      </th>
      <th>{serialNumber}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 h-12 mask mask-squircle">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      {/* <td>
        {isDeleted ? (
          <input type="checkbox" className="checkbox" disabled defaultChecked />
        ) : (
          <input type="checkbox" defaultChecked className="checkbox " />
        )}
      </td> */}
      <td>
        <label className="swap">
          <input type="checkbox" checked={isSwapped} onChange={handleSwap} />
          <div className="text-sm swap-on">Restore</div>
          <div className="text-sm swap-off">Delete</div>
        </label>
      </td>
      <td>
        {features.map((feature, index) => (
          <ul key={index}>
            <li>{feature}</li>
          </ul>
        ))}
      </td>
      <td>
        <div className="badge badge-accent">{status}</div>
      </td>
      <td className="space-x-2">
        <button className="px-4 py-1 text-white bg-purple-500 rounded-lg">
          <Link to={`/admin-dashboard/update-car/${_id}`}>
            <FcEditImage className="size-5" />
          </Link>
        </button>
        <button
          onClick={() => handleDelete(_id || "default-id")}
          className="px-4 py-1 text-white bg-red-500 rounded-lg"
        >
          <MdOutlineAutoDelete className="size-5" />
        </button>
      </td>
    </tr>
  );
};

export default CarsTable;
