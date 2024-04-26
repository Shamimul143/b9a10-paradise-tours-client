import { useLoaderData } from "react-router-dom";
import SpotItem from "../components/SpotItem";

const HomePage = () => {

    const spotItem = useLoaderData()

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-10">Tourists Spots</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    spotItem.map(item => <SpotItem key={spotItem._id} item={item}></SpotItem>)
                }
            </div>
        </div>
    );
};

export default HomePage;