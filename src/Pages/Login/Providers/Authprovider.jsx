/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null)
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = ( email, password)=>{
        setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = ( email, password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        setLoading(true);
     return signOut(auth);
    }

    const provider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
        setLoading(true);
      return signInWithPopup(auth, provider);
    }
    const unsubscribe = useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
            console.log(user, 'current user');
            setLoading(false);
        });
        return () => {
            return unsubscribe;
        }
    }, [user])
    const authValue = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;