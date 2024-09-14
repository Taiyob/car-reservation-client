import { useState } from "react";
import BookingTable from "../../components/ui/admin/BookingTable";
import { useGetAllBookingsQuery } from "../../redux/api/booking/bookingApi";
import { TBookingInfoDetails } from "../../types/bookingType";

const AllBookings = () => {
  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const { data, isLoading } = useGetAllBookingsQuery([
    { name: "limit", value: 5 },
    { name: "page", value: page },
    { name: "sort", value: `${sortField},${sortOrder}` },
  ]);

  const metaData = data?.meta;
  const { totalPage = 1 } = metaData || {};

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const allBookings = data?.data || [];

  return (
    <div className="px-20 my-10">
      {isLoading ? (
        <div className="flex items-center justify-center h-full w-full">
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
                    <input
                      name="check-all-booking"
                      type="checkbox"
                      className="checkbox"
                    />
                  </label>
                </th>
                <th onClick={() => handleSort("name")}>Name</th>
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
                    date={booking?.date}
                    _id={booking?._id}
                    status={booking?.status}
                  />
                );
              })}
            </tbody>
          </table>
          <div className="grid w-1/2 grid-cols-2 mt-8 join">
            <button
              className="join-item btn btn-outline"
              onClick={handlePreviousPage}
              disabled={page === 1 || isLoading}
              aria-label="Previous page"
            >
              Previous page
            </button>
            <button
              className="join-item btn btn-outline"
              onClick={handleNextPage}
              disabled={page >= totalPage || isLoading}
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AllBookings;
