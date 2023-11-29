import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./Providers/Authprovider";
import GoogleButton from "react-google-button";
import { AuthContext } from "../Login/Providers/Authprovider";
import useAxiosPublic from "../hooks/useAxiosPublic";


const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo={
                  email: result.user?.email,
                  name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(res=>{
                    console.log(res.data);
                    toast.success('google login successfull');
                    navigate('/');
                })
                
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message);
            })
    }
    return (
        <div>
            <GoogleButton
                onClick={handleGoogleLogin}
            />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default SocialLogin;