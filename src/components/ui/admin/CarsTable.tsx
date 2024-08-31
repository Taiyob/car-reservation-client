import { MdOutlineAutoDelete } from "react-icons/md";
import { TCarData } from "../../../pages/admin/AllCarsTable";
import { FcEditImage } from "react-icons/fc";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  const handleSwap = () => {
    setIsSwapped(!isSwapped);
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
        <button className="px-4 py-1 text-white bg-red-500 rounded-lg">
          <MdOutlineAutoDelete className="size-5" />
        </button>
      </td>
    </tr>
  );
};

export default CarsTable;
