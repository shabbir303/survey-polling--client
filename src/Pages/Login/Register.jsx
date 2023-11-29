import ReactiveButton from 'reactive-button';
import background from '../../assets/create-surveys-online-1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from './Providers/Authprovider';
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Register = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const {createUser}= useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser);
         
          updateProfile(result.user, {
            displayName: `${data.name}`,
            photoURL: `${data.image}`,
        })
            .then(() => {console.log('profile updated')
            const userInfo = {
               name : data.name,
               email: data.email
            }
            axiosPublic.post('/users', userInfo)
            .then(res=>{
              if(res.data.insertedId){
                console.log('user added to the database');
                toast.success("Registration successfull")
                navigate('/');
            }
            })
        })
            .catch(err => console.log(err.message));
        })
        .catch(err=>{
          console.log(err.message);
          toast.error(err.message)
        })
    };
    console.log(errors);
    return (
        <div className=' max-w-7xl mx-auto h-[700px] my-[80px] px-[70px] py-[20px] shadow-xl shadow-slate-700 bg-cover bg-slate-800 bg-blend-overlay ' style={{ backgroundImage: `url(${background})` }}>
            <Helmet>
                <title>Polling | Register</title>
            </Helmet>
            <h1 className='text-[50px] font-cinzel font-[700] text-green-500 text-center'>Register Here</h1>

            <form onSubmit={handleSubmit(onSubmit)}
                className="max-w-xl mx-auto ">
                <div className="mb-5">
                    <label for="name" className="block mb-2 text-sm font-medium text-cyan-400 dark:text-white">Your Name</label>
                    <input
                        type="text"
                        // name='name' 
                        {...register('name', { required: true })}
                        id="name"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-cyan-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" />
                    {errors.name?.type==='required' && <span className='text-red-600 '>name field is required</span>}
                </div>
                <div className="mb-5">
                    <label for="image" className="block mb-2 text-sm font-medium text-cyan-400 dark:text-white">Your Image URL</label>
                    <input
                        name='image'
                        {...register('image', { required: true })}
                        type="text"
                        id="image"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-cyan-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" />
                    {errors.image && <span className='text-red-600 '>image field is required</span>}
                </div>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-cyan-400 dark:text-white">Your Email</label>
                    <input
                        type="text"
                        id="email"
                        {...register('email', { required: true })}
                        name='email'
                        className="shadow-sm bg-gray-50 border border-gray-300 text-cyan-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
                    {errors.email?.type ==='required' && <span className='text-red-600 '>email field is required</span>}
                </div>
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium text-cyan-400 dark:text-white"> Password</label>
                    <input
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                        })}
                        name='password'
                        type="text"
                        id="password"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-cyan-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  />
                    {errors.password?.type === 'required' && <span className='text-red-600 '>password field is required</span>}
                    {errors.password?.type === 'minLength' && <span className='text-red-600 '>6 character required</span>}
                    {errors.password?.type === 'maxLength' && <span className='text-red-600 '>not more than 20 character</span>}
                    {errors.password?.type === 'pattern' && <span className='text-red-600 '>Password Must be at least one uppercase letter, one lowercase letter, one number and one special character</span>}
                </div>


                <div className='flex  items-center gap-4 text-cyan-500 text-[18px] font-[500]'>
                    <ReactiveButton type="submit" color="blue" rounded shadow size="large" idleText="Register Here ">
                    </ReactiveButton>
                </div>
            </form>
            <h1 className='text-center mt-3 text-green-300 text-[20px]'>Already Have an Account?<Link to='/login'><span className='pl-[10px] text-orange-400 font-[500]'>Login Now</span></Link> </h1>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Register;