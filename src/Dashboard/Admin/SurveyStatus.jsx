
import { Card } from 'flowbite-react';
import { FaTrash, FaUpload } from 'react-icons/fa6';
import ReactiveButton from 'reactive-button';
import useSurvey from '../../Pages/hooks/useSurvey';
const SurveyStatus = () => {
    const [survey] = useSurvey()
    return (
        <div>
            {survey?.map ( survey=><Card key={survey._id} className="max-w-6xl mx-auto my-[50px] ml-[100px] font-inter" >
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{survey.category}</h5>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                    {survey.title}
                </p>
                <p className="mb-5 text-sm text-gray-700 font-medium dark:text-gray-400 sm:text-lg">
                    Question: <span className='text-blue-600'>{survey.que}</span>
                </p>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                    <a
                        href="#"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                    >
                        <FaTrash></FaTrash>
                        <div className="text-left">
                            <div className="mb-1 text-xs pl-[10px]">Delete the survey</div>

                        </div>
                    </a>
                    <form action="" className='flex items-center'>
                        <input type="text" placeholder='review survey ' />
                        <ReactiveButton href="#" type='submit' value='submit' color="teal"  shadow size="large" idleText="Review here "></ReactiveButton>
                    </form>
                </div>
            </Card>)}
        </div>
    );
};

export default SurveyStatus;