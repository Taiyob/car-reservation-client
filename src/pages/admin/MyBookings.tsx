import BookingTable from "../../components/ui/admin/BookingTable";
import { useGetMyBookingsQuery } from "../../redux/api/booking/bookingApi";
import { TBookingInfoDetails } from "../../types/bookingType";

const MyBookings = () => {
  const { data, isLoading } = useGetMyBookingsQuery(undefined);
  const allBookings = data?.data || [];

  return (
    <div className="">
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-full">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : allBookings.length === 0 ? (
        <div className="mx-40 my-10">
          <p className="text-center text-xl font-semibold">
            Please wait for your booking confirmation here. It will be completed
            around 24 hours.
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-black underline mb-10">
            My Bookings
          </h1>
          <div className="px-20 w-full">
            <table className="table table-lg w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input
                        name="check-my-booking"
                        type="checkbox"
                        className="checkbox"
                      />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Total Cost</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allBookings.map((booking: TBookingInfoDetails) => {
                  const images = booking?.car?.image || ["No Image"];
                  return (
                    <BookingTable
                      key={booking._id}
                      name={booking?.user?.name}
                      startTime={booking?.startTime}
                      endTime={booking?.endTime}
                      totalCost={booking?.totalCost}
                      image={images}
                      status={booking?.status}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookings;
