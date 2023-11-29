
import background from "../../assets/Survey.jpg"
import { Helmet } from 'react-helmet';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import ReactiveButton from "reactive-button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Providers/Authprovider";
import SocialLogin from "../SocialLogin/SocialLogin";
// import GoogleButton from 'react-google-button'

// import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        console.log(email, password, captcha);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("login successfull");
                navigate('/');
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message);
            })
    }
    

    // captcha
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value) == true) {
            toast.success('Captcha Matched');
            setDisabled(false);
        }

        else {
            toast.error('Captcha Does Not Match');
            setDisabled(true);
        }
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    // const handleGoogleLogin = () => {
    //     googleSignIn()
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //         toast.success('google login successfull');
    //         navigate('/');
    //     })
    //     .catch(err => {
    //         console.log(err.message);
    //         toast.error(err.message);
    //     })
    // }
    return (
        <div className=' max-w-7xl mx-auto h-[700px] my-[80px] px-[70px] py-[10px] shadow-xl shadow-slate-700 bg-cover bg-slate-800 bg-blend-overlay ' style={{ backgroundImage: `url(${background})` }}>
            <Helmet>
                <title>Polling | Login</title>
            </Helmet>
            <div className=" pt-[50px] relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                <div className="flex justify-between items-center">
                    <h4 className="block font-cinzel mb-[30px] text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased text-teal-600">
                        Login
                    </h4>
                    <Link to='/'>
                        <h4 className="block font-cinzel mb-[30px] text-3xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased text-red-500">
                            Back to Home
                        </h4>
                    </Link>
                </div>

                <form onSubmit={handleLogin}

                    className="flex   flex-col gap-4 ">
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-emerald-500 dark:text-white">Your email</label>
                        <input
                            type="email"
                            id="email"
                            name='email'
                            className="bg-gray-50 border border-gray-300 text-emerald-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-emerald-500 dark:text-white">Your password</label>
                        <input
                            type="password"
                            id="password"
                            name='password'
                            className="bg-gray-50 border border-gray-300 text-emerald-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <div className="mb-5">
                        <label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            <LoadCanvasTemplate />
                        </label>

                        <input
                            type="text"
                            name='captcha'
                            placeholder='please solve this captcha'
                            onBlur={handleValidateCaptcha}
                            // ref={captchaRef}
                            className="bg-gray-50 border border-gray-300 text-green-500 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                        
                    </div>

                    <ReactiveButton disabled={disabled} type="submit" color="teal" rounded shadow size="large" idleText="Login ">
                    </ReactiveButton>

                    <div className="flex justify-center items-center mx-auto mt-[20px]">
                    <SocialLogin></SocialLogin>
                </div>
                </form>
                
                <h1 className="text-center pt-3 text-yellow-400">New Here? <Link to='/register'><span className="text-red-500 font-[500]">Create an  account first</span></Link></h1>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />


        </div>
    );
};

export default Login;

