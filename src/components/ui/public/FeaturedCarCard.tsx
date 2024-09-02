type TImageUrl = {
  imgUrl: string;
};

const FeaturedCarCard = ({ imgUrl }: TImageUrl) => {
  //const imageSrc = imgUrl.length > 0 ? imgUrl[0] : "";
  return (
    <div className="w-48 h-48 p-10 rounded-lg">
      <img
        className="w-full h-full rounded-lg"
        //src="https://scene7.toyota.eu/is/image/toyotaeurope/yaris-cross-orange-sideways-1920x1080?wid=1280&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0"
        src={imgUrl}
        alt="featured_car_image"
      />
    </div>
  );
};

export default FeaturedCarCard;
