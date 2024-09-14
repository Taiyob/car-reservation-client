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
