import { useLoaderData } from "react-router-dom";


const SpotDetails = () => {

    const item = useLoaderData()

    const {imageUrl, touristsSpotName,countryName,location, averageCost, totaVisitorsPerYear, travelTime, seasonality,shortDescription } = item
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={imageUrl} alt="Album" /></figure>
        <div className="card-body">
            <h2 className="card-title">{touristsSpotName}</h2>
            <p>country Name: {countryName}</p>
            <p>Location: {location}</p>
            <p>Average Cost: {averageCost}</p>
            <p>Tota Visitors PerYear: {totaVisitorsPerYear}</p>
            <p>Travel Time: {travelTime}</p>
            <p>Seasonality: {seasonality}</p>
            <p>Short Description: {shortDescription}</p>
        </div>
    </div>
    );
};

export default SpotDetails;