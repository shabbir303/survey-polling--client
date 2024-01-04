import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import { useEffect, useState } from 'react';
import { Blockquote } from 'flowbite-react';
import '@smastrom/react-rating/style.css';
import "./style.css"

const Testimonial = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReview(data);
            })
    }, [])
    console.log(review);
    return (
        <div>
            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-teal-600 font-cinzel sm:text-5xl">
                        Read trusted reviews from our customers
                    </h2>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >



                        {review.map((review) => <SwiperSlide key={review.name}>
                            <div className="mt-8   ">
                                <div className="rounded-lg  max-w-4xl mx-auto  bg-[url('https://i.ibb.co/RgHvK4y/testimonial-background-1.jpg')] bg-slate-300 bg-blend-overlay bg-cover p-6 shadow-sm sm:p-8">
                                    <div className=" flex flex-col items-center mx-auto">
                                        <img
                                            alt="Man"
                                            src={review.avatar}
                                            className="h-[120px] w-[120px] rounded-full object-cover"
                                        />

                                        <div>
                                            <p className="mt-0.5 text-xl font-medium text-black">{review.name} </p>
                                        </div>

                                        <Rating className="mx-auto py-[30px] "
                                            style={{ maxWidth: 150 }}
                                            value={review.rating} readOnly />
                                    </div>
                                    <Blockquote>
                                        <p className="mt-2 text-black">
                                            {review.testimonial}
                                        </p>
                                    </Blockquote>

                                </div>
                            </div>
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;


