import whychoose from '../../assets/why-choose-us.svg';
import Carousel from 'react-bootstrap/Carousel';
import styles from './testi.module.scss';
import playbtn from '../../assets/play-btn.svg'
import testvideo from '../../assets/testimonial-1.mp4'
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const Testimonials = () => {
    useEffect(() => {
        // Select all play/pause buttons
        const buttons = document.querySelectorAll('.play-pause-btn');

        const togglePlayPause = (event) => {
            // Ensure button exists and get the nearest video sibling
            const button = event.target.closest('.play-pause-btn');
            const video = button?.previousElementSibling; // Find the video element

            if (video && video.tagName === 'VIDEO') {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        };

        buttons.forEach((button) => {
            button.addEventListener('click', togglePlayPause);
        });

        return () => {
            // Cleanup event listeners on component unmount
            buttons.forEach((button) => {
                button.removeEventListener('click', togglePlayPause);
            });
        };
    }, []);
    return (
        <section class={`${styles.testimonial_sec} py-5 side_spacing mt-3`}>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5">
                        <h2>Client Testimonials</h2>
                        <Carousel>
                            <Carousel.Item className={styles.car_item}>
                            <video autoplay loop>
                                    <source src={testvideo} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                                <button class="play-pause-btn"><img src={playbtn}/></button>
                                <div>
                                    <h4>- James Miller</h4>
                                    <p>Merck & Co.</p>
                                </div>
                                <p class="testi_txt">"Working with this team has been an incredible experience! The
                                    flexibility of their
                                    services, with options that fit your schedule, made it so easy to get everything
                                    done without stress.”</p>
                            </Carousel.Item>
                            <Carousel.Item className={styles.car_item}>
                            <video autoplay loop>
                            <source src={testvideo} type="video/mp4"/>
                            Your browser does not support the video tag.
                                </video>
                                <button class="play-pause-btn"><img src={playbtn}/></button>
                                <div>
                                    <h4>- James Miller</h4>
                                    <p>Merck & Co.</p>
                                </div>
                                <p class="testi_txt">"Working with this team has been an incredible experience! The
                                    flexibility of their
                                    services, with options that fit your schedule, made it so easy to get everything
                                    done without stress.”</p>
                            </Carousel.Item>
                            <Carousel.Item className={styles.car_item}>
                            <video autoplay loop>
                            <source src={testvideo} type="video/mp4"/>
                            Your browser does not support the video tag.
                                </video>
                                <button class="play-pause-btn"><img src={playbtn}/></button>
                                <div>
                                    <h4>- James Miller</h4>
                                    <p>Merck & Co.</p>
                                </div>
                                <p class="testi_txt">"Working with this team has been an incredible experience! The
                                    flexibility of their
                                    services, with options that fit your schedule, made it so easy to get everything
                                    done without stress.”</p>
                            </Carousel.Item>
                        </Carousel>

                    </div>
                    <div class="col-md-7">
                        <img src={whychoose} alt="Why Choose Us" class="w-100" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Testimonials;
