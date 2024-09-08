import BookingTable from "../../components/ui/admin/BookingTable";
import { useGetAllBookingsQuery } from "../../redux/api/booking/bookingApi";
import { TBookingInfoDetails } from "../../types/bookingType";

const AllBookings = () => {
  const { data } = useGetAllBookingsQuery(undefined);

  console.log("Data =>", data);

  return (
    <>
      <div className="px-20 my-10">
        <table className="table table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
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
            {data?.data.map((booking: TBookingInfoDetails) => {
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
      </div>
    </>
  );
};

export default AllBookings;
