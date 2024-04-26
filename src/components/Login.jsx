import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import AllAuth from "./AllAuth";


const Login = () => {

    const { googleLogin } = AllAuth()
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className=" flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left my-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="py-1 px-4 rounded-lg text-white bg-[#478bca]" type="submit" value="Login" />
                        </div>
                    </form>
                    <div>
                        <div onClick={googleLogin} className="flex items-center gap-5  py-1 px-2 mx-4  border-2 rounded-lg border-[#478bca]"><FcGoogle /><button>Login With Google</button></div>
                        <div className="flex items-center gap-5 py-1 px-2 my-5 mx-4 border-2 rounded-lg border-[#478bca]"><FaGithub /><a href="">Login With Google</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;