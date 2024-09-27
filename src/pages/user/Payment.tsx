import { useParams } from "react-router-dom";
import {
  useBookingCompletionMutation,
  useGetSingleBookingQuery,
} from "../../redux/api/booking/bookingApi";
import { selectCurrentUser } from "../../redux/features/auth/userCredentialSlice";
import { useAppSelector } from "../../redux/hooks";

const Payment = () => {
  const user = useAppSelector(selectCurrentUser);
  const { id } = useParams();
  const { data: bookingInfo, isLoading } = useGetSingleBookingQuery(id);
  const [bookingCompletion] = useBookingCompletionMutation();

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const bookingDetails = bookingInfo?.data;
  const totalPrice = bookingDetails?.totalCost;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Booking ID from useParams:", id);
    if (!id) {
      console.error(
        "Booking ID is not defined. Cannot proceed with completion."
      );
      return;
    }

    const status = "completed";
    const billingDetails = {
      status: status,
    };
    console.log("Billing details to be sent:", billingDetails);

    try {
      const response = await bookingCompletion({
        id: id,
        data: billingDetails,
      });
      console.log(response);
      console.log("Response from bookingCompletion:", response?.data?.data);
      window.location.href = response?.data?.data?.payment_url;
    } catch (error) {
      console.error("Error completing booking:", error);
    }
  };

  return (
    <div className="p-4 font-sans">
      <div className="w-[600px]">
        <div className="w-full px-4 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Checkout Form</h2>
          <div className="bg-gray-100 p-5 rounded-lg border border-gray-300">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
                <label htmlFor="fname" className="block mb-2">
                  <i className="fa fa-user mr-2"></i> Full Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  value={user?.user?.name}
                  readOnly
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg font-bold"
                />
                <label htmlFor="email" className="block mb-2">
                  <i className="fa fa-envelope mr-2"></i> Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={user?.email}
                  readOnly
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg font-bold"
                />
                <label htmlFor="totalPrice" className="block mb-2">
                  <i className="fa fa-envelope mr-2"></i> Total Price
                </label>
                <input
                  type="text"
                  id="totalPrice"
                  name="totalPrice"
                  value={totalPrice}
                  readOnly
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg font-bold"
                />
                <label htmlFor="adr" className="block mb-2">
                  <i className="fa fa-address-card-o mr-2"></i> Address
                </label>
                <input
                  type="text"
                  id="adr"
                  name="address"
                  value={user?.user?.address}
                  readOnly
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                />
                {/* <label htmlFor="city" className="block mb-2">
                  <i className="fa fa-institution mr-2"></i> City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="city"
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                /> */}
                <label htmlFor="phone" className="block mb-2">
                  <i className="fa fa-phone mr-2"></i> Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={user?.user?.phone}
                  readOnly
                  className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
