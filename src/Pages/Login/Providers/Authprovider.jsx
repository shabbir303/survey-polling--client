/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const Authprovider = ({ children }) => {
    const[price, setPrice] =useState(49);
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const unsubscribe = useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
            console.log(user, 'current user');
            if (user) {
                //  get toke and store client
                const userInfo = { email: user.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // todo: remove token , if token will store in client side:
                // local storage,caching in memory
                localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe;
        }
    }, [user, axiosPublic])
    const authValue = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        price,
        setPrice
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;