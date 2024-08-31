import { Link } from "react-router-dom";

type TAuthenticateProps = {
  message: string;
  address: string;
  label: string;
};

const Unauthenticate = ({ message, address, label }: TAuthenticateProps) => {
  return (
    <div className="h-screen gap-5 flex flex-col justify-center items-center pb-16 ">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
      <Link to={address}>
        <button>{label}</button>
      </Link>
    </div>
  );
};

export default Unauthenticate;
