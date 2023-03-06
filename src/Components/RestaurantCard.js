import { IMG_URL } from "../constant"


const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating, deliveryTime, costForTwoString }) => {
    return (
        <div className="card">
            <img src={`${IMG_URL}${cloudinaryImageId}`} alt="Restaurant Pic" />
            <div className="card-item">
                <h3 className="card-title">{name}</h3>
                <h6 className="card-cuisine">{cuisines.join(", ")}</h6>
            </div>
            <div className="rating">
            <div className="rating-logo">
                    <span className="icon-star"></span>
                    <span>{avgRating}</span>
                </div>
                <h5>{deliveryTime}</h5>
                <h5>{costForTwoString}</h5>
            </div>
           
        </div>
    )
}

export default RestaurantCard;