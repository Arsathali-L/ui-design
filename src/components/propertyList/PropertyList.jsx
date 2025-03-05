import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/api/hotels/countByType");

  const images = [
    "https://media.istockphoto.com/id/1414156193/photo/modern-college-dorm-room-with-cardboard-boxes-and-luggages.jpg?s=1024x1024&w=is&k=20&c=2laIosZtlRagi815gCqjTmYBkoKgV-GX_TLrJcF0TFM=",
    "https://images.pexels.com/photos/30918862/pexels-photo-30918862/free-photo-of-modern-urban-architecture-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://media.istockphoto.com/id/153483587/photo/morocco-gate.jpg?s=1024x1024&w=is&k=20&c=PpfXAnOydCG8CCRxFZJ4E1q3gXQaTErgONJKjPPsNi8=",
    "https://media.istockphoto.com/id/2172515557/photo/haval-f7x-chameleon-color-parked-near-a-two-story-house.jpg?s=1024x1024&w=is&k=20&c=CkMnj_min2uYHQ_Eq3afQSDXaLzyAyuYOKM6Q8tNEJY=",
    // "https://media.istockphoto.com/id/1060740880/photo/aerial-view-of-poor-indian-town-varsana-barsana-high-resolution-panorama-for-large-format.jpg?s=1024x1024&w=is&k=20&c=2Gm3PuJOwTVpCZ3wAI_AcdZYFStqZZV1koP-XvjsJgw=",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;