// import { timeStamp } from "console";
import { useState } from "react";
import ReactiveButton from "reactive-button";
import useAxiosPublic from "../Pages/hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";

const SurveyCreation = () => {
    const axiosPublic = useAxiosPublic();
    const [title, setTitle] = useState('');
    const [que, setQue] = useState('');
    const [des, setDes] = useState('');
    const [category, setCategory] = useState('');
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [timestamp, setTimestamp] = useState(new Date().toLocaleString());
    const reset = () => {
        setTitle('');
        setDes('');
        setCategory('');
        setQue('')
    }

    // Function to handle user selection
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    // Function to handle like button click
    const handleLikeClick = () => {
        setLikeCount(likeCount + 1);
    };

    // Function to handle dislike button click
    const handleDislikeClick = () => {
        setDislikeCount(dislikeCount + 1);
    };

    const handleSurvey = (e) => {
        e.preventDefault();
        const surveyDetails = {
            title,
            des,
            que,
            category,
            timestamp
        }
        console.log(surveyDetails.title, surveyDetails.des, surveyDetails.category, surveyDetails.timestamp);
        axiosPublic.post('/surveys', surveyDetails)
            .then(res => {
                if (res.data) {
                    console.log('survey added to the database');
                    toast.success('survey successfully created')
                    reset();
                }
            })


    }
    return (
        <div className="max-w-7xl mx-auto mt-[150px]">
            <h1 className="text-center text-[40px] font-[700] text-indigo-800">survey form</h1>


            <form onSubmit={handleSurvey}
                className="max-w-md mx-auto bg-slate-700 p-[50px] rounded-xl">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        id="floating_email"
                        className="block py-2.5 px-0 w-full text-sm text-cyan-500 font-inter bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" className="peer-focus:font-medium absolute text-lg text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Survey Title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        value={que}
                        onChange={(e) => setQue(e.target.value)}
                        name="description"
                        id="floating_password"
                        className="block py-2.5 px-0 w-full text-sm text-cyan-500 font-inter  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_password" className="peer-focus:font-medium absolute text-lg text-white  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Survey Question?</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        value={des}
                        onChange={(e) => setDes(e.target.value)}
                        name="description"
                        id="floating_password"
                        className="block py-2.5 px-0 w-full text-sm text-cyan-500 font-inter  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_password" className="peer-focus:font-medium absolute text-lg text-white  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>


                {/* <fieldset>
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
                </fieldset> */}

                {/* <div className="flex items-center mb-4">
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
                </div> */}

                {/* <div className="mb-[20px] flex items-center gap-3">
                    <div>
                        <ReactiveButton onClick={handleLikeClick} color="green" rounded shadow size="small" idleText="Like ">
                        </ReactiveButton> ({likeCount})
                    </div>
                    <div>
                        <ReactiveButton onClick={handleDislikeClick} color="red" rounded shadow size="small" idleText="Dislike "> </ReactiveButton>({dislikeCount})
                    </div>

                </div> */}

                <div className="mb-4">
                    <label
                        // htmlFor="hs-hero-name-2" 
                        className="block text-sm font-medium dark:text-white"><span className="sr-only"></span></label>
                    <input
                        list="options"
                        name='option'
                        type='text'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        // id="hs-hero-name-2"
                        className="py-3 px-4 block w-full border-gray-200 rounded-md text-base focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-700" placeholder="select the category" />
                    <datalist id="options">
                        <option value="Customer Satisfaction Surveys" />
                        <option value="Employee Engagement Surveys" />
                        <option value="Market Research Surveys" />
                    </datalist>

                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="time"
                        id="floating_repeat_password"
                        defaultValue={timestamp}
                        readOnly
                        className="block py-2.5 px-0 w-full text-sm text-teal-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-base text-white  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Timestamp</label>
                </div>
                <ReactiveButton type="submit" color="blue" rounded shadow size="large" idleText="Submit ">
                </ReactiveButton>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default SurveyCreation;




