
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SpotItem = ({ item }) => {
  const { _id, imageUrl, touristsSpotName, averageCost, totaVisitorsPerYear, travelTime, seasonality } = item





  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className='h-[300px] rounded-lg p-4' src={imageUrl} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{touristsSpotName}</h2>
        <p>Average Cost: {averageCost}</p>
        <p>Tota Visitors Per Year: {totaVisitorsPerYear}</p>
        <p>Travel Time: {travelTime}</p>
        <p>Seasonality: {seasonality}</p>
        <div className=" ">
          <Link to={`/item/${_id}`}><button className="w-full py-1 px-4 rounded-lg text-white bg-[#478bca]">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

SpotItem.propTypes = {
  item: PropTypes.object

};

export default SpotItem;