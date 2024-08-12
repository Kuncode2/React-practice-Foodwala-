import { IMG_CDN_URL } from "../config";

const Restrauntcard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      {/* This is optional chaning */}
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default Restrauntcard;
