import Swal from "sweetalert2";


const AddTouristsSpot = () => {

    const hadleAddTouristsSpot = (e) => {
        e.preventDefault()
        const imageUrl = e.target.imageUrl.value;
        const touristsSpotName = e.target.touristsSpotName.value;
        const countryName = e.target.countryName.value;
        const location = e.target.location.value;
        const shortDescription = e.target.shortDescription.value;
        const averageCost = e.target.averageCost.value;
        const seasonality = e.target.seasonality.value;
        const travelTime = e.target.travelTime.value;
        const totaVisitorsPerYear = e.target.totaVisitorsPerYear.value;
        const email = e.target.email.value;
        const name = e.target.name.value;

        const addedSpot = { imageUrl, touristsSpotName, countryName, location, shortDescription, averageCost, seasonality, travelTime, totaVisitorsPerYear, email, name }
        console.log(addedSpot);

        fetch("http://localhost:5000/paradiceTours", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedSpot)
        })
        .then(res => res.json())
        .then(data => {
            e.target.reset();
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Item added successfuly',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className=" flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left my-5">
                    <h1 className="text-5xl font-bold">Add Tourists Spot!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={hadleAddTouristsSpot} className="card-body">
                        {/* input fill 1 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">image</span>
                            </label>
                            <input type="url" name="imageUrl" placeholder=" Image Url" className=" input input-bordered" />
                        </div>
                        {/* input fill 2 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">tourists spot name</span>
                            </label>
                            <input type="text" name="touristsSpotName" placeholder=" tourists spot name" className=" input input-bordered" />
                        </div>
                        {/* input fill 3 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">country Name</span>
                            </label>
                            <input type="text" name="countryName" placeholder=" country Name" className=" input input-bordered" />
                        </div>
                        {/* input fill 4 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder=" Location" className=" input input-bordered" />
                        </div>
                        {/* input fill 5 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="shortDescription" placeholder="Short Description" className=" input input-bordered" />
                        </div>
                        {/* input fill 6 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="text" name="averageCost" placeholder=" Average Cost" className=" input input-bordered" />
                        </div>
                        {/* input fill 7 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <input type="text" name="seasonality" placeholder="Seasonality" className=" input input-bordered" />
                        </div>
                        {/* input fill 8 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel time </span>
                            </label>
                            <input type="text" name="travelTime" placeholder=" travel time " className=" input input-bordered" />
                        </div>
                        {/* input fill 9 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Tota Visitors PerYear</span>
                            </label>
                            <input type="text" name="totaVisitorsPerYear" placeholder=" Tota Visitors PerYear" className=" input input-bordered" />
                        </div>
                        {/* input fill 10 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">email</span>
                            </label>
                            <input type="text" name="email" placeholder=" Your email" className=" input input-bordered" />
                        </div>
                        {/* input fill 11 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder=" Your Name" className=" input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="py-1 px-4 rounded-lg text-white bg-[#478bca]" type="submit" value="Add Tourists Spot" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTouristsSpot;