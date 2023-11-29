import { Accordion } from "flowbite-react";


const Faq = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <h1 className="text-center font-cinzel font-[700] text-[40px]">People also asked this question</h1>
            <Accordion collapseAll className="bg-indigo-950">
                <Accordion.Panel>
                    <Accordion.Title className="text-teal-500">Why is it important to conduct surveys?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Surveys are crucial for gathering valuable feedback and insights from a targeted audience. They help businesses, organizations, and researchers make informed decisions, identify areas for improvement, and understand the needs and preferences of their audience.
                        </p>
                        
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="text-teal-500">What are the best practices for creating effective survey questions?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        To create effective survey questions, it's important to keep them clear, concise, and relevant. Use simple language, avoid leading questions, and ensure that response options cover the range of possible answers. Pilot testing can help identify any issues with question clarity before distributing the survey.
                        </p>
                       
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="text-teal-500">How can I increase survey response rates?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-green-500">
                         Increasing survey response rates involves making the survey easy to access and complete. Use a clear and compelling subject line, keep the survey short, and assure respondents of the anonymity of their responses. Additionally, offering incentives or rewards can motivate participants to complete the survey.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="text-teal-500">What is the difference between qualitative and quantitative surveys?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-green-500">
                        Qualitative surveys focus on gathering in-depth, open-ended responses to gain insights into attitudes, behaviors, and opinions. Quantitative surveys, on the other hand, involve collecting numerical data to analyze trends and patterns. Qualitative surveys are exploratory, while quantitative surveys are more structured and provide statistical results.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className="text-teal-500"> How do I analyze survey results effectively?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-green-500">
                        Effective survey analysis involves organizing and summarizing data to draw meaningful conclusions. Start by cleaning and organizing the data, then use statistical tools and visualizations to identify trends and patterns. Compare results across different demographic groups to gain a comprehensive understanding of the survey findings. Finally, interpret the results in the context of the survey objectives.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Faq;