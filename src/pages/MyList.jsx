import { useEffect, useState } from "react";
import AllAuth from "../components/AllAuth";
import MyListDetails from "../components/MyListDetails";



const MyList = () => {

    const { user } = AllAuth() || {};
    console.log(user);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/myItem/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, [user]);

    return (
        <div className="max-w-7xl mx-auto"> 
            <h2 className="text-center bg-slate-100 text-2xl font-bold py-10 my-10">My List</h2>
            <div className="overflow-x-auto border-2">
                <table className=''>
                    {/* head */}
                    <thead>
                        <tr className="flex justify-evenly w-[900px] mb-3">
               
                            <th>Tourists Spot Name</th>
                            <th>Country Name</th>
                            <th>Location</th>
                            <th>Seasonality</th>
                        </tr>
                    </thead>
                </table>
            </div>
            {
                items.map(item => <MyListDetails key={item._id} item={item}></MyListDetails>)
            }
        </div>
    );
};

export default MyList;