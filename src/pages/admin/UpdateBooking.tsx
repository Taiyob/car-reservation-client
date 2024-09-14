import { useParams } from "react-router-dom";

const UpdateBooking = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Update</h1>
    </div>
  );
};

export default UpdateBooking;
