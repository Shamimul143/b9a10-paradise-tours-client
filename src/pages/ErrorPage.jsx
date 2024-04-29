import { Link } from 'react-router-dom';
import image from '../assets/404.jpg'
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen max-w-7xl mx-auto">
            <Link to="/"><img src={image} alt="" /></Link>
            
        </div>
    );
};

export default ErrorPage;