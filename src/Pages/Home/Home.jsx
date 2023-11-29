import image from '../../assets/survey-suggestion-opinion-review-feedback-concept_53876-124957.jpg'
import { Helmet } from "react-helmet";
// import { Button } from 'flowbite-react';
import ReactiveButton from 'reactive-button';
import Animate from './Animate';
import Faq from './Faq';
const Home = () => {
   
    return (
        <>
          <div style={{ backgroundImage: `url(${image})` }} className='bg-cover max-w-7xl mx-auto h-[700px] bg-slate-900 bg-blend-overlay rounded-2xl'>
            <Helmet>
                <title>Polling | Home</title>
            </Helmet>
           <div className='text-center py-[250px] text-white'>
           <Animate></Animate> 
             <h1 className='text-[14px] font-[400] text-cyan-400 w-[800px] mx-auto font-mono'>Seamlessly engage audiences across hybrid workspaces through live online polling, surveys, Q&As, quizzes, word clouds, and more.</h1>
             {/* <Button gradientDuoTone="tealToLime" className='flex justify-center items-center mx-auto'>Pink to Orange</Button> */}
             <ReactiveButton href="#" color="teal" rounded shadow  size="large"  idleText="Explore more "></ReactiveButton>
             
           </div>
           
        </div>
        <div className='my-[100px]'>
        <Faq></Faq>
        </div>
        </>
    );
};

export default Home;

