
import { Helmet } from "react-helmet";
import useSurvey from "../hooks/useSurvey";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
// import { useState } from "react";

const AllSurvey = () => {
    const [survey] = useSurvey();
    console.log(survey);


    return (
        <div className="max-w-7xl mx-auto flex">
            <Helmet>
                <title>Polling | All Survey</title>
            </Helmet>
            <div>
                <h1 className="text-[40px] text-center font-cinzel font-[700] my-[50px]">All Surveys Here</h1>
                <Dropdown label="Filter Survey Menu" dismissOnClick={false}>
                    <Dropdown.Item>
                        <input
                            type="text"
                            placeholder="Filter by Category"
                        // value={filterCategory}
                        // onChange={(e) => setFilterCategory(e.target.value)}
                        /></Dropdown.Item>
                    <Dropdown.Item><input
                        type="text"
                        placeholder="Filter by title"
                    // value={filterTitle}
                    // onChange={(e) => setFilterTitle(e.target.value)}
                    /></Dropdown.Item>
                    <Dropdown.Item>Voted</Dropdown.Item>
                </Dropdown>
            </div>

            <div>
                {survey?.map(survey =>
                    <div key={survey._id} className="max-w-[80%] mx-auto my-[50px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">

                            <h5 className="text-center underlined text-sky-700 mb-2 text-3xl uppercase border-[1px] bg-slate-200 w-[50%] mx-auto font-bold tracking-tight dark:text-white">{survey.category}</h5>
                            <div className="flex justify-between items-center">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{survey.title}</h5>
                                <h5 className=" text-[15px] font-inter font-semibold tracking-tight text-emerald-500 dark:text-white">Publish on-{survey.timestamp}</h5>

                            </div>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Question: <span className="text-red-600">{survey.que}</span></p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{survey.des}</p>
                        <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400">Total Vote:</p>
                        <Link to={`/surveyDetail/${survey._id} `} >
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                View Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>

                        </Link>

                    </div>)}
            </div>



        </div>


    );
};

export default AllSurvey;