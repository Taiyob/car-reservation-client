import { useEffect, useState } from "react";
import { useUpdateStatusInApprovedMutation } from "../../../redux/api/booking/bookingApi";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/userCredentialSlice";
import { useReturnCarMutation } from "../../../redux/api/car/carApi";

export type TBookingTableProps = {
  _id?: string;
  name?: string;
  startTime: string;
  endTime: string;
  totalCost: number;
  image: string[];
  date?: Date | undefined;
  status?: string;
};

const BookingTable = ({
  _id,
  name,
  startTime,
  endTime,
  totalCost,
  image,
  date,
  status,
}: TBookingTableProps) => {
  const user = useAppSelector(selectCurrentUser);
  const [updateStatusInApproved] = useUpdateStatusInApprovedMutation();
  const [returnCar] = useReturnCarMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timer: number | null = null;

    if (error) {
      timer = window.setTimeout(() => setError(null), 3000);
    }

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [error]);

  const formatDate = (date: string | Date | undefined) => {
    if (!date) return "No Date Provided";

    const parsedDate = typeof date === "string" ? new Date(date) : date;
    return parsedDate instanceof Date && !isNaN(parsedDate.getTime())
      ? parsedDate.toLocaleDateString()
      : "Invalid Date";
  };

  const generateTimes = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return times;
  };

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
        {status === "approved" ? (
          user?.userRole === "admin" ? (
            <button
              disabled
              className="badge badge-neutral badge-outline text-white"
            >
              processing
            </button>
          ) : (
            <button
              disabled
              className="badge badge-neutral badge-outline text-white"
            >
              pending
            </button>
          )
        ) : (
          <>
            <button
              className="badge badge-secondary badge-outline"
              disabled={isLoading}
            >
              {status || "approved"}
            </button>
            <button className="badge badge-error gap-2 text-white">
              cancel
            </button>
          </>
        )}
      </th>
      {/* {error && (
          <tr>
            <td className="text-red-500">
              <p className="text-xs text-red-600 font-semibold">{error}</p>
            </td>
          </tr>
        )} */}
    </tr>
  );
};

export default BookingTable;
