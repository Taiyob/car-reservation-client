/*

  const handleApproveClick = (id: string) => {
    setSelectedId(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to approve this booking!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const modal = document.getElementById(
          "my_modal_1"
        ) as HTMLDialogElement;
        if (modal) {
          modal.showModal();
        }
      }
    });
  };


  const onSubmit = async (data: TAcceptDataProp) => {
    if (!selectedId) return;

    const { endTime: pickTime } = data;

    try {
      await returnCar({ bookingId: selectedId, endTime: pickTime }).unwrap();
      reset();
      toast.success("Successfully approved this booking!!!");
    } catch (error) {
      console.log(error);
      toast.error("Booking approval failed");
    }
  };

  <button
              //onClick={handleApproved}
              onClick={() => {
                const modal = document.getElementById(
                  "my_modal_1"
                ) as HTMLDialogElement;
                if (modal) {
                  modal.showModal();
                }
              }}
              className="badge badge-secondary badge-outline"
              disabled={isLoading}
            >
              {status || "approved"}
            </button>

*/

{
  /* <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Customer name: {name}
          </h3>
          <div className="flex justify-between items-center">
            <p className="py-4">Booking date: {formatDate(date)}</p> */
}
{
  /* <p className="py-4">
              Booked date:{" "}
              {new Intl.DateTimeFormat("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date(formatDate(date)))}
              {
                ["st", "nd", "rd", "th"][
                  (new Date(formatDate(date)).getDate() - 1) % 10
                ]
              }
            </p> */
}
//       <p>Start time: {startTime}</p>
//     </div>
//     <h2 className="my-2 text-center font-semibold">
//       Car name: {carName}
//     </h2>
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="endTime">Pick return time: </label>
//       <select
//         id="endTime"
//         {...register("endTime", { required: true })}
//         className="p-2 border rounded-md shadow-md w-full"
//       >
//         {generateTimes().map((time) => (
//           <option key={time} value={time}>
//             {time}
//           </option>
//         ))}
//       </select>

//       <div className="modal-action flex justify-between items-center">
//         <button type="submit" className="btn">
//           Accept
//         </button>
//         <form method="dialog">
//           <button className="btn">Close</button>
//         </form>
//       </div>
//     </form>
//   </div>
// </dialog>

/*

import { useEffect, useState } from "react";
import { useUpdateStatusInApprovedMutation } from "../../../redux/api/booking/bookingApi";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/userCredentialSlice";
import { useReturnCarMutation } from "../../../redux/api/car/carApi";
import { Link } from "react-router-dom";

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
            <Link
              to={`/admin-dashboard/update-bookings/${_id}`}
              className="badge badge-secondary badge-outline"
            >
              {status || "approved"}
            </Link>
            <button className="badge badge-error gap-2 text-white">
              cancel
            </button>
          </>
        )}
      </th>
       {error && (
          <tr>
            <td className="text-red-500">
              <p className="text-xs text-red-600 font-semibold">{error}</p>
            </td>
          </tr>
        )} 
        </tr>
      );
    };
    
    export default BookingTable;
    

*/
{
  /* <img
            src="https://sb.kaleidousercontent.com/67418/960x550/d2745edc21/cars-no-bg-1.png"
            alt=""
            className="w-full h-60 sm:h-96 bg-gray-500"
          /> */
}
