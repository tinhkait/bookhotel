import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/api/v1/hotels/countByCity?cities=Hồ Chí Minh,Hà Nội,Cà Mau"
  );

  console.log(data)

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://ik.imagekit.io/tvlk/blog/2023/09/go-and-share-kham-pha-uy-ban-nhan-dan-tp-ho-chi-minh-1-scaled.webp"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hồ Chí Minh</h1>
              <h2>{data[0]} khách sạn</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://owa.bestprice.vn/images/destinations/uploads/trung-tam-thanh-pho-ha-noi-603da1f235b38.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hà Nội</h1>
              <h2>{data[1]} khách sạn</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://moc.gov.vn/Images/editor/images/MOC/2022/Thang%2010/28_10_2.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Cà Mau</h1>
              <h2>{data[2]} khách sạn</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;