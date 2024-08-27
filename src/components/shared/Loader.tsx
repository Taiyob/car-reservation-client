import { ScaleLoader } from "react-spinners";

type TLoaderProps = {
  smallHeight: boolean;
};

const Loader = ({ smallHeight }: TLoaderProps) => {
  return (
    <div
      className={` ${smallHeight ? "h-[250px]" : "h-[70vh]"}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <ScaleLoader
        cssOverride={{ height: "100px", width: "10px" }}
        color="red"
      />
    </div>
  );
};

export default Loader;
