const AdminHome = () => {
  return (
    <div className="px-10">
      <h4 className="py-3 font-bold text-blue-500">Overview</h4>
      <div className="flex flex-wrap mb-10 space-x-5">
        <div className="p-3 space-y-6 rounded-lg bg-purple-50 h-28">
          <h5 className="text-xl text-gray-800">Total Bookings</h5>
          <h3 className="text-3xl font-extrabold text-purple-500">56</h3>
        </div>
        <div className="p-3 space-y-6 rounded-lg bg-purple-50 h-28">
          <h5 className="text-xl text-gray-800">Available Car</h5>
          <h3 className="text-3xl font-extrabold text-purple-500">36</h3>
        </div>
        <div className="p-3 space-y-6 rounded-lg bg-purple-50 h-28">
          <h5 className="text-xl text-gray-800">Revenue</h5>
          <h3 className="text-3xl font-extrabold text-purple-500">09</h3>
        </div>
        <div className="p-3 space-y-6 rounded-lg bg-purple-50 h-28">
          <h5 className="text-xl text-gray-800">Total Clients</h5>
          <h3 className="text-3xl font-extrabold text-purple-500">25</h3>
        </div>
        <div className="p-3 space-y-6 rounded-lg bg-purple-50 h-28">
          <h5 className="text-xl text-gray-800">Total Payment</h5>
          <h3 className="text-3xl font-extrabold text-purple-500">20</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
