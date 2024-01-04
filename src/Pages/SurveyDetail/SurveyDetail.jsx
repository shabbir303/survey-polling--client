import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReactiveButton from "reactive-button";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { AuthContext } from "../Login/Providers/Authprovider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import useAdmin from "../hooks/useAdmin";
import useSurveyor from "../hooks/useSurveyor";
import useProUser from "../hooks/useProUser";
import { Button } from "flowbite-react";


const SurveyDetail = () => {
    const [userEmail, setUserEmail] = useState([]);
    const [isAdmin] = useAdmin();
    const [isSurveyor] = useSurveyor();
    const [isProUser] = useProUser();
    const [disable, setDisable] = useState(false);
    const { user } = useContext(AuthContext);
    const [comment, setComment] = useState('');
    // const [likeCount,setLikeCount] = useState(0);
    // const [dislikeCount,setDislikeCount] = useState(0);
    
    // const [, setSelectedOption] = useState(null);
    const   [selectedOption, setSelectedOption] = useState(0);
    const [detail, setDetail] = useState([]);
    const { id } = useParams();
    const eachSurveyDetail = useLoaderData();
    // const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    // console.log(eachSurveyDetail);
    useEffect(() => {
        const findDetails = eachSurveyDetail.find(details => details._id === id);
        setDetail(findDetails);
    }, [id, eachSurveyDetail]);
    console.log(detail);

    const handleOptionChange = () => {
        setSelectedOption(selectedOption + 1)
    };
    const handleLikeClick = async () => {
        // setLikeCount(likeCount + 1);
        const data = detail.likeCount + 1;
        // console.log(data);
        try {
            //  axiosPublic.patch(`/like/${detail._id}`);
             const response = await axiosPublic.patch(`/like/${detail._id}`);
             console.log(response);
        }
        catch(error){
                console.log("error occoured", error);
            }
        console.log(detail.likeCount + 1);
    };
    // put, patch req dite hobe jekhane
    // Function to handle dislike button click
    const handleDislikeClick = () => {
        // setDislikeCount(dislikeCount + 1);
    };


    
    const email = user?.email;
    const pushEmail = userEmail.push(email)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            // likeCount,
            // dislikeCount,
            selectedOption,
            pushEmail,
            comment

        }
        // console.log(data);

        // try {
        //     axiosPublic.patch(`/surveys/${id}`, data);
        //     console.log("like and vote successfully submitted");
        //     toast.success("like and vote successfully submitted");
        //     if   (likeCount > 0 || dislikeCount > 0){
        //         toast.error('you already like and vote this survey')
        //         setDisable(true);
        //     }
        // }
        // catch(error){
        //         // console.log("error occoured", error);
        //     }



        }
        // useEffect(()=>{
        //   const 
        // },[])
        const preventEmail = eachSurveyDetail.find(survey=>survey.email=== user?.email);
        // console.log(preventEmail);
        console.log(isSurveyor, isAdmin, isProUser);
    
    return (
            <div className="max-w-7xl mx-auto">
                <Helmet>
                    <title>Polling | Details</title>
                </Helmet>
                <h1 className="text-[50px] font-cinzel text-center my-[40px] font-[700]">{detail.category}</h1>

                <article
                    className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                >
                    <div className="rounded-[10px] bg-white p-4  sm:p-6">
                        <time className="block text-xs text-gray-500"> Survey Created On : <span className="bg-stone-200 px-[5px] rounded-full">{detail.timestamp}</span> </time>

                        <a href="#">
                            <h3 className="mt-0.5 text-xl font-medium text-gray-900">
                                {detail.title}
                            </h3>
                        </a>
                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-teal-600 font-medium ">
                                <span className="bg-teal-100 px-[10px]  rounded-full"> Survey Question:</span> <span className="text-red-600">{detail.que}</span>
                            </h3>
                        </a>
                        <a href="#">
                            <h3 className="mt-0.5 text-lg text-blue-400 font-medium ">
                                <span className="text-yellow-950 bg-teal-100 px-[10px]  rounded-full">Description:</span>{detail.des}
                            </h3>
                        </a>

                        {isAdmin && <>
                            <form onSubmit={handleSubmit}
                            action="">
                            <h1 className="text-yellow-950 mt-[40px] text-[20px] bg-orange-100 w-[30%] rounded-full text-center">Please select your opinion. You want to vote or not?</h1>
                            <fieldset className="">
                                <h1 className="text-white mt-1">Options</h1>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="country-option-1"
                                        type="radio"
                                        // type="radio"
                                        value="yes"
                                        checked={selectedOption === 'yes'}
                                        onChange={() => handleOptionChange('yes')}
                                        // name="countries"
                                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="country-option-1" className="block ms-2  text-base font-medium text-green-500 dark:text-gray-300">
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="country-option-2"
                                        type="radio"
                                        name="categories"

                                        checked={selectedOption === 'no'}
                                        onChange={() => handleOptionChange('no')}
                                        //  value="Germany" 
                                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="country-option-2" className="block ms-2 text-base font-medium text-red-500 dark:text-gray-300">
                                        No
                                    </label>
                                </div>
                            </fieldset>
                            <div className="mb-[20px] flex items-center gap-3">
                                <h1 className="font-cinzel font-semibold">Would you want to Like or Dislike this Survey?</h1>
                                <div>
                                    <ReactiveButton disable={disable} type="submit" onClick={handleLikeClick} color="green" rounded shadow size="small" idleText="Like ">
                                    </ReactiveButton>
                                    {/* ({likeCount}) */}
                                </div>
                                <div>
                                    <ReactiveButton type="submit" disable={disable} onClick={handleDislikeClick} color="red" rounded shadow size="small" idleText="Dislike "> </ReactiveButton>
                                    {/* ({dislikeCount}) */}
                                </div>

                            </div>

                        </form>
                        Want to Delete This Survey : <Button outline gradientDuoTone="purpleToPink">
        Click to Delete
      </Button>
                        </>
                        
                         ||
                         isSurveyor &&
                         <>
                         <form onSubmit={handleSubmit}
                         action="">
                         <h1 className="text-yellow-950 mt-[40px] text-[20px] bg-orange-100 w-[30%] rounded-full text-center">Please select your opinion. You want to vote or not?</h1>
                         <fieldset className="">
                             <h1 className="text-white mt-1">Options</h1>
                             <div className="flex items-center mb-4">
                                 <input
                                     id="country-option-1"
                                     type="radio"
                                     // type="radio"
                                     value="yes"
                                     checked={selectedOption === 'yes'}
                                     onChange={() => handleOptionChange('yes')}
                                     // name="countries"
                                     className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                 <label for="country-option-1" className="block ms-2  text-base font-medium text-green-500 dark:text-gray-300">
                                     Yes
                                 </label>
                             </div>
                             <div className="flex items-center mb-4">
                                 <input
                                     id="country-option-2"
                                     type="radio"
                                     name="categories"

                                     checked={selectedOption === 'no'}
                                     onChange={() => handleOptionChange('no')}
                                     //  value="Germany" 
                                     className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                 <label for="country-option-2" className="block ms-2 text-base font-medium text-red-500 dark:text-gray-300">
                                     No
                                 </label>
                             </div>
                         </fieldset>
                         <div className="mb-[20px] flex items-center gap-3">
                             <h1 className="font-cinzel font-semibold">Would you want to Like or Dislike this Survey?</h1>
                             <div>
                                 <ReactiveButton disable={disable} type="submit" onClick={handleLikeClick} color="green" rounded shadow size="small" idleText="Like ">
                                 </ReactiveButton>
                                 {/* ({likeCount}) */}
                             </div>
                             <div>
                                 <ReactiveButton type="submit" disable={disable} onClick={handleDislikeClick} color="red" rounded shadow size="small" idleText="Dislike "> </ReactiveButton>
                                 {/* ({dislikeCount}) */}
                             </div>

                         </div>

                     </form>
                     Want to Update Survey :  <Button outline gradientDuoTone="purpleToBlue">
        Click here to Update
      </Button>
                     </>
                         
                        ||
                        isProUser &&
                        <form onSubmit={handleSubmit}
                            action="">
                                <div className="mb-5">
      <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comment Here</label>
      <input type="text" 
      id="large-input" 
      value={comment}
      onChange={(e)=>setComment(e.target.value)}
      className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
                            <h1 className="text-yellow-950 mt-[40px] text-[20px] bg-orange-100 w-[30%] rounded-full text-center">Please select your opinion. You want to vote or not?</h1>
                            <fieldset className="">
                                <h1 className="text-white mt-1">Options</h1>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="country-option-1"
                                        type="radio"
                                        // type="radio"
                                        value="yes"
                                        checked={selectedOption === 'yes'}
                                        onChange={() => handleOptionChange('yes')}
                                        // name="countries"
                                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="country-option-1" className="block ms-2  text-base font-medium text-green-500 dark:text-gray-300">
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="country-option-2"
                                        type="radio"
                                        name="categories"

                                        checked={selectedOption === 'no'}
                                        onChange={() => handleOptionChange('no')}
                                        //  value="Germany" 
                                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="country-option-2" className="block ms-2 text-base font-medium text-red-500 dark:text-gray-300">
                                        No
                                    </label>
                                </div>
                            </fieldset>
                            <div className="mb-[20px] flex items-center gap-3">
                                <h1 className="font-cinzel font-semibold">Would you want to Like or Dislike this Survey?</h1>
                                <div>
                                    <ReactiveButton disable={disable} type="submit" onClick={handleLikeClick} color="green" rounded shadow size="small" idleText="Like ">
                                    </ReactiveButton>
                                    {/* ({likeCount}) */}
                                </div>
                                <div>
                                    <ReactiveButton type="submit" disable={disable} onClick={handleDislikeClick} color="red" rounded shadow size="small" idleText="Dislike "> </ReactiveButton>
                                    {/* ({dislikeCount}) */}
                                </div>

                            </div>

                        </form>
                        ||
                        <form onSubmit={handleSubmit}
                            action="">
                            <h1 className="text-yellow-950 mt-[40px] text-[20px] bg-orange-100 w-[30%] rounded-full text-center">Please select your opinion. You want to vote or not?</h1>
                            <fieldset className="">
                                <h1 className="text-white mt-1">Options</h1>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="country-option-1"
                                        type="radio"
                                        // type="radio"
                                        value="yes"
                                        checked={selectedOption === 'yes'}
                                        onChange={() => handleOptionChange('yes')}
                                        // name="countries"
                                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="country-option-1" className="block ms-2  text-base font-medium text-green-500 dark:text-gray-300">
                                        Yes
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input
                                        id="country-option-2"
                                        type="radio"
                                        name="categories"

                                        checked={selectedOption === 'no'}
                                        onChange={() => handleOptionChange('no')}
                                        //  value="Germany" 
                                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="country-option-2" className="block ms-2 text-base font-medium text-red-500 dark:text-gray-300">
                                        No
                                    </label>
                                </div>
                            </fieldset>
                            <div className="mb-[20px] flex items-center gap-3">
                                <h1 className="font-cinzel font-semibold">Would you want to Like or Dislike this Survey?</h1>
                                <div>
                                    <ReactiveButton disable={disable} type="submit" onClick={handleLikeClick} color="green" rounded shadow size="small" idleText="Like ">
                                    </ReactiveButton>
                                    {/* ({likeCount}) */}
                                </div>
                                <div>
                                    <ReactiveButton type="submit" disable={disable} onClick={handleDislikeClick} color="red" rounded shadow size="small" idleText="Dislike "> </ReactiveButton>
                                    {/* ({dislikeCount}) */}
                                </div>

                            </div>

                        </form>
                        }
                    </div>
                </article>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        );
    };

    export default SurveyDetail;