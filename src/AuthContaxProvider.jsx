
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import auth from './firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const AuthContax = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthContaxProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createRegister = (email, password, name, photoUrl) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, name, photoUrl)

    }
    const googleLogin = async () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success("Register Successfully");
            })
            .catch((error) => {
                console.error(error.message);
            })
    }




    const authInfo = { user, loading, createRegister, googleLogin }

    return (
        <AuthContax.Provider value={authInfo}>
            {children}
            <ToastContainer />
        </AuthContax.Provider>

    );
};

AuthContaxProvider.propTypes = {
    children: PropTypes.node

};

export default AuthContaxProvider;