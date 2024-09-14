import { useForm } from "react-hook-form";
import { useGetSingleBookingQuery } from "../../../redux/api/booking/bookingApi";
import ReactDOM from "react-dom";
import { useReturnCarMutation } from "../../../redux/api/car/carApi";
import { toast } from "sonner";
import { useEffect } from "react";
import formatDate from "../../../utils/date";
import { filterTimes } from "../../../utils/time";

type UpdateBookingModalProps = {
  bookingId: string;
  onClose: () => void;
};

export type UpdateBookingInfoProps = {
  endTime: string;
};

const UpdateBookingModal = ({
  bookingId,
  onClose,
}: UpdateBookingModalProps) => {
  const { register, handleSubmit, reset, setValue, watch } =
    useForm<UpdateBookingInfoProps>();
  const { data: bookingData, isFetching } = useGetSingleBookingQuery(
    bookingId,
    { skip: !bookingId }
  );
  const [returnCar] = useReturnCarMutation();

  useEffect(() => {
    if (bookingData?.data?.startTime) {
      setValue("endTime", bookingData.data.startTime); // Set default end time if needed
    }
  }, [bookingData, setValue]);

  const onSubmit = async (data: UpdateBookingInfoProps) => {
    const { endTime } = data;

    try {
      await returnCar({
        bookingId: bookingData?.data?._id,
        endTime: endTime,
      }).unwrap();
      reset();
      toast.success("Successfully approved this booking!!!");
    } catch (error) {
      console.log(error);
      toast.error("Booking approval failed");
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg w-11/12 max-w-lg">
        <h3 className="font-bold text-lg mb-4">Booking Details</h3>
        {isFetching ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : bookingData ? (
          <div>
            <div role="alert" className="alert alert-success mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                <strong>Name:</strong> {bookingData?.data?.user?.name}
              </span>
            </div>
            <div role="alert" className="alert alert-success mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                <strong>Date:</strong> {formatDate(bookingData?.data?.date)}
              </span>
            </div>
            <div role="alert" className="alert alert-success mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                <strong>Start Time:</strong> {bookingData?.data?.startTime}
              </span>
            </div>
            <div role="alert" className="alert alert-success mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                <strong>Car:</strong> {bookingData?.data?.car?.name}
              </span>
            </div>
            <div>
              <img
                src={bookingData?.data?.car?.image[0] || ""}
                alt="Booking Image"
                className="w-full max-h-60 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        ) : (
          <p>No data available</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="py-3">
          <label htmlFor="endTime" className="text-base font-semibold">
            Pick return time:{" "}
            <span className="text-xs text-red-500">
              (If you accept this booking, please give the return time of car)
            </span>{" "}
          </label>
          <select
            id="endTime"
            {...register("endTime", { required: true })}
            className="p-2 border rounded-md shadow-md w-full mt-3"
          >
            {filterTimes({ watch }).map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <div className="mt-4 flex justify-between items-center">
            <button type="submit" className="btn btn-outline btn-secondary">
              Accept
            </button>
            <button
              type="button"
              className="btn btn-outline btn-accent"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default UpdateBookingModal;
