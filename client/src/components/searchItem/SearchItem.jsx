import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]}/>
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Taxi, máy may miễn phí</span>
        <span className="siSubtitle">
          Căn hộ có TV, máy lạnh...
        </span>
        <span className="siFeatures">{item.desc}</span>
        
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">{item.cheapestPrice}$</span>
          <span className="siTaxOp">Đã bao gồm thuế và phí</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Xem chi tiết</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;