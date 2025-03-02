import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/12088459/pexels-photo-12088459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Coimbatore</h1>
              <h2>{data[4]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/1194408153/photo/bangalore-palace-bengaluru-karnataka-india.jpg?s=1024x1024&w=is&k=20&c=gxwFXLWWfIakqunnR_eHkoHflSUMXMT4wEcZkBpR63Q="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bangalore</h1>
              <h2>{data[4]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/1226340114/photo/puratchi-thalaivar-dr-mgr-central-railway-station-chennai-central-railway-station-india.jpg?s=1024x1024&w=is&k=20&c=EFcNG3Be3aIq9mwtnUYTGwhe37uz-y0I2UJPp8mHe7U="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Chennai</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;