export type TBookingTableProps = {
  name?: string;
  startTime: string;
  endTime: string;
  totalCost: number;
  image: string[];
  date?: Date | undefined;
};

const BookingTable = ({
  name,
  startTime,
  endTime,
  totalCost,
  image,
  date,
}: TBookingTableProps) => {
  const formatDate = (date: string | Date | undefined) => {
    if (!date) return "No Date Provided";

    const parsedDate = typeof date === "string" ? new Date(date) : date;
    return parsedDate instanceof Date && !isNaN(parsedDate.getTime())
      ? parsedDate.toLocaleDateString()
      : "Invalid Date";
  };

  const handleApproved = async () => {};

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              {Array.isArray(image) && image.length > 0 ? (
                image.map((img, index) =>
                  img !== "No Image" ? (
                    <img
                      key={index}
                      src={img}
                      alt={`Avatar ${index}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      key={index}
                      className="w-full h-full bg-gray-200 flex items-center justify-center"
                    >
                      No Image
                    </div>
                  )
                )
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  No Image
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            {/* <div className="text-sm opacity-50">{formatDate(date)}</div> */}
          </div>
        </div>
      </td>
      <td>
        {startTime}
        <br />
        <span className="badge badge-ghost badge-sm">{formatDate(date)}</span>
      </td>
      <td>{endTime}</td>
      <td>{totalCost}</td>
      <th className="flex justify-between items-center space-x-2">
        <button className="btn btn-ghost btn-xs">details</button>
        <button
          onClick={handleApproved}
          className="badge badge-secondary badge-outline"
        >
          approved
        </button>
        <button className="badge badge-error gap-2 text-white">cancel</button>
      </th>
    </tr>
  );
};

export default BookingTable;
