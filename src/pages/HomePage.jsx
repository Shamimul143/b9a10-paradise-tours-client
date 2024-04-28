import { useLoaderData } from "react-router-dom";
import SpotItem from "../components/SpotItem";
import Slider from "../components/Slider";
import image1 from "../assets/images/ser-icon1@2x.png"
import image2 from "../assets/images/ser-icon2@2x.png"
import image3 from "../assets/images/ser-icon3@2x.png"
import image4 from "../assets/images/ser-icon4@2x.png"

const HomePage = () => {

    const spotItem = useLoaderData();

    return (
        <div>
            <Slider></Slider>
            <div className="text-center bg-[#f6f6f6]  md:py-10 lg:py-32 px-5 mb-10">
                <h2 className="text-3xl font-bold my-5" >Welcome To Paradice Tours Spots</h2>
                <p>
                    Welcome to Paradice Tours: Your Gateway to Exotic Escapes! Embark on unforgettable journeys with us, where every destination is a dream fulfilled. From pristine beaches to cultural marvels, we curate experiences tailored to delight and inspire. Let us guide you to your next adventure in paradise!</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
                {
                    spotItem.map(items => <SpotItem key={items._id} item={items}></SpotItem>)
                }
            </div>
            <div className="bg-[#f6f6f6] py-10 my-10">
                <div className="md:grid md:grid-cols-2 lg:flex justify-evenly max-w-7xl mx-auto lg:my-10 gap-5">
                    <div>
                        <div className="flex gap-3 items-center">
                            <img className="bg-[#478bca] p-3 w-[125px] h-[130px] " src={image1} alt="" />
                            <h2 className="text-2xl">Special <br /> Activities</h2>
                        </div>
                        <p className="my-5">Elevate Your Journey! Immerse yourself in unique experiences designed to ignite your senses and create lasting memories</p>
                    </div>
                    <div>
                        <div className="flex gap-3 items-center">
                            <img className="bg-[#478bca] p-3 w-[125px] h-[130px] " src={image2} alt="" />
                            <h2 className="text-2xl">Travel <br />Arrangements</h2>
                        </div>
                        <p className="my-5">Travel Arrangements: Your Seamless Passage! Trust us to handle every detail of your journey, from flights to accommodations, ensuring a stress-free and enjoyable experience.</p>
                    </div>
                    <div>
                        <div className="flex gap-3 items-center">
                            <img className="bg-[#478bca] p-3 w-[125px] h-[130px] " src={image3} alt="" />
                            <h2 className="text-2xl">Private <br />Guide</h2>
                        </div>
                        <p className="my-5">Your Personal Pathfinder! Experience the world through the eyes of a knowledgeable local expert dedicated to enhancing your journey</p>
                    </div>
                    <div>
                        <div className="flex gap-3 items-center">
                            <img className="bg-[#478bca] p-3 w-[125px] h-[130px] " src={image4} alt="" />
                            <h2 className="text-2xl">Location <br />Manager</h2>
                        </div>
                        <p className="my-5">Location Manager: Your Trusted Navigator! Rely on our expert location managers to seamlessly coordinate every aspect of your journey</p>
                    </div>
                </div>
            </div>
            <div className="text-center lg:py-10 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center my-10">Country-wise Tourist Spots</h2>
                <p className="my-5">Spots: Explore the World`s Wonders! From the majestic pyramids of Egypt to the stunning fjords of Norway, discover the top attractions and hidden gems of each country with our curated guides. Immerse yourself in diverse cultures, breathtaking landscapes, and iconic landmarks as you journey through our meticulously crafted itineraries. Let us be your passport to unforgettable adventures around the globe!</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-around gap-3 text-center max-w-7xl mx-auto ">
                    <h2 className="p-24 text-4xl font-extrabold bg-[#f6f6f6] rounded-lg shadow-2xl">Bangladesh</h2>
                    <h2 className="p-24 text-4xl font-extrabold bg-[#f6f6f6] rounded-lg shadow-2xl">Thailand</h2>
                    <h2 className="p-24 text-4xl font-extrabold bg-[#f6f6f6] rounded-lg shadow-2xl">Indonesia</h2>
                    <h2 className="p-24 text-4xl font-extrabold bg-[#f6f6f6] rounded-lg shadow-2xl">Malaysia</h2>
                    <h2 className="p-24 text-4xl font-extrabold bg-[#f6f6f6] rounded-lg shadow-2xl">Vietnam</h2>
                    <h2 className="p-24 text-4xl font-extrabold bg-[#f6f6f6] rounded-lg shadow-2xl">Cambodia</h2>
                  
                </div>
        </div>
    );
};

export default HomePage;