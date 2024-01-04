import image from '../../assets/survey-suggestion-opinion-review-feedback-concept_53876-124957.jpg'
import { Helmet } from "react-helmet";
// import { Button } from 'flowbite-react';
import ReactiveButton from 'reactive-button';
import Animate from './Animate';
import Faq from './Faq';
import Testimonial from './Testimonial';
import { Link, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });

  return (
    <>
      <div style={{ backgroundImage: `url(${image})` }} className='bg-cover max-w-7xl mx-auto h-[700px] bg-slate-900 bg-blend-overlay rounded-2xl' data-aos="fade-right" >
        <Helmet>
          <title>Polling | Home</title>
        </Helmet>
        <div className='text-center py-[250px] text-white' >
          <Animate></Animate>
          <h1 className='text-[14px] font-[400] mb-[20px] text-cyan-400 w-[800px] mx-auto font-mono'>Seamlessly engage audiences across hybrid workspaces through live online polling, surveys, Q&As, quizzes, word clouds, and more.</h1>
          {/* <Button gradientDuoTone="tealToLime" className='flex justify-center items-center mx-auto'>Pink to Orange</Button> */}

          <Link to="/dashboard">
          <ReactiveButton href="#" color="teal" rounded shadow size="large" idleText="Explore more "></ReactiveButton>
          </Link>


        </div>

      </div>
      <div className='my-[100px]' >
        <div data-aos="fade-up"
     data-aos-duration="2000">
        <Faq ></Faq>
        </div>
        <div data-aos="fade-up"
     data-aos-duration="2000">
        <Testimonial ></Testimonial>
        </div>
      </div>

    </>
  );
};

export default Home;

