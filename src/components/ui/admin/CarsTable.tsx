import { TCarData } from "../../../pages/admin/AllCarsTable";

const CarsTable = ({ name, color, features, status }: TCarData) => {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" title="table-checkbox" />
        </label>
      </th>
      <th>1</th>
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
      <td>{color}</td>
      <td>
        {features.map((feature) => (
          <ul>
            <li>{feature}</li>
          </ul>
        ))}
      </td>
      <td>{status}</td>
      <td className="space-x-2">
        <button className="px-6 py-3 text-white bg-purple-500 rounded-lg">
          update
        </button>
        <button className="px-6 py-3 text-white bg-red-500 rounded-lg">
          delete
        </button>
      </td>
    </tr>
  );
};

export default CarsTable;
