import { useLoaderData } from "react-router-dom";
import SpotItem from "../components/SpotItem";
import Slider from "../components/Slider";

const HomePage = () => {

    const spotItem = useLoaderData();

    return (
        <div>
            <Slider></Slider>
            <div>
            <h2>Welcome To Paradice Tours</h2>
            </div>
            <h2 className="text-3xl font-bold text-center my-10">Tourists Spots</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    spotItem.map(items => <SpotItem key={items._id} item={items}></SpotItem>)
                }
            </div>
        </div>
    );
};

export default HomePage;