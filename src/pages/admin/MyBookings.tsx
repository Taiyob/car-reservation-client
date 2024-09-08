import BookingTable from "../../components/ui/admin/BookingTable";
import { useGetMyBookingsQuery } from "../../redux/api/booking/bookingApi";
import { TBookingInfoDetails } from "../../types/bookingType";

const MyBookings = () => {
  const { data, isLoading } = useGetMyBookingsQuery(undefined);
  const allBookings = data?.data || [];
  return (
    <div>
      <h1 className="flex items-center justify-center my-2 text-4xl font-bold text-center text-black underline">
        My Bookings
      </h1>
      <div className="px-20 my-10">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <table className="table table-lg">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input name='check-my-booking' type="checkbox" className="checkbox" />
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
                    />
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
