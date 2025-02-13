import React from 'react';
import Header from './components/header';
import styles from './home.module.scss'
import pi from '../src/assets/patient-info.svg';
import di from '../src/assets/doctor-info.svg';
import ua from '../src/assets/upcoming-appointments.svg';
import ah from '../src/assets/appointment-history.svg';
import pp from '../src/assets/plans-and-payments.svg';
import saveinfo from '../src/assets/save-info.svg';
import threeapp from '../src/assets/three-appointment-options.svg';
import confirmapp from '../src/assets/confirm-appointment.svg';
import checkin from '../src/assets/mobile-laptop-checkin.svg';
import careshedule from '../src/assets/care-shedule.svg';
import secure from '../src/assets/secure.svg';
import sameday from '../src/assets/same-day-response.svg';
import flex from '../src/assets/flexible-availability.svg';
import Testimonials from './components/testimonial/testimonial';
import shedulingimg from './assets/sheduling-questions.png';
import Footer from './components/footer';


const Homepage = () => {
    return (
        <>
            {/* <Header /> */}
            <section className={`${styles.banner_section} text-center side_spacing`}>
                <div className="container">
                    <h1>Your Health Matters</h1>
                    <p className="pt-2 pb-4">Effortless Appointmnet Scheduling for you and the ones you love.</p>
                    <a href="#" className="light_btn">I'm Sick - Call My Doctor</a>
                </div>
            </section>
            <section className={`${styles.usp_info} text-center side_spacing pb-5`}>
                <div className="container">
                    <div className="usp_outer d-flex justify-content-center">
                        <div className={styles.usp_box}>
                            <img src={pi} alt="" />
                            <p>Patient Information</p>
                        </div>
                        <div className={styles.usp_box}>
                            <img src={di} alt="" />
                            <p>Doctor's Information</p>
                        </div>
                        <div className={styles.usp_box}>
                            <img src={ua} alt="" />
                            <p>Upcoming Appointments</p>
                        </div>
                        <div className={styles.usp_box}>
                            <img src={ah} alt="" />
                            <p>Appointment History</p>
                        </div>
                        <div className={styles.usp_box}>
                            <img src={pp} alt="" />
                            <p>Plans & Payment</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class={`${styles.sign_up_sec} text-center py-5`}>
                <div class="container py-md-5">
                    <h2>Help us Keep Your Health Important with 5 Easy Steps<span>Sign up Today</span></h2>
                    <div class="d-flex justify-content-center py-5 w-100">
                        <div class={styles.info_box}>
                            <img src={saveinfo} alt="" />
                            <p>Save Your Doctor's Info & Visit Details</p>
                        </div>
                        <div class={styles.info_box}>
                            <img src={threeapp} alt="" />
                            <p>Choose from 3 appointment options—One click Confirmation</p>
                        </div>
                        <div class={styles.info_box}>
                            <img src={confirmapp} alt="" />
                            <p>We confirm your appointment, you just attend</p>
                        </div>
                        <div class={styles.info_box}>
                            <img src={checkin} alt="" />
                            <p>Mobile/Laptop check-in, follow-ups handled, no wait</p>
                        </div>
                        <div class={styles.info_box}>
                            <img src={careshedule} alt="" />
                            <p>Follow-up or Preventive Care Schedule</p>
                        </div>
                    </div>
                    <a href="#" class="blue_btn">Sign Up</a>

                </div>
            </section>
            <section class={`${styles.one_click_sec} text-center py-5 side_spacing`}>
                <div class="container">
                    <h2>One Click- three options. Appointments Booked</h2>
                    <p>Have the comfort of knowing your own doctor and receiving the care you need.</p>
                    <div class="row text-center mt-5 pt-3">
                        <div class={`${styles.click_box} col-md-4`}>
                            <img src={secure} alt="100% Secure Icon" class="img-fluid" />
                            <div>
                                <h5 class="fw-bold">100% Secure</h5>
                                <p>With 100% secure systems in place, we ensure that all patient and doctor information remains
                                    protected at every step.</p>
                            </div>
                        </div>

                        <div class={`${styles.click_box} col-md-4`}>
                            <img src={sameday} alt="Same-day Response Icon" class="img-fluid"
                            />
                            <div>
                                <h5 class="fw-bold">Same-day Response</h5>
                                <p>Our same-day response ensures you're never left waiting. Whether it's scheduling an
                                    appointment or addressing your healthcare concerns, we're here to provide prompt and
                                    reliable support, every single day.</p>
                            </div>
                        </div>

                        <div class={`${styles.click_box} col-md-4`}>
                            <img src={flex} alt="Flexible Availability Icon" class="img-fluid" />
                            <div>
                                <h5 class="fw-bold">Flexible Availability</h5>
                                <p>Your schedule matters, and we make it work. With flexible availability, our platform ensures
                                    you can connect with healthcare professionals at times that suit you best.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
<Testimonials></Testimonials>
<section class={`${styles.have_ques} py-5`} >
        <div class="container py-lg-5">
            <div class="row align-items-center">
                <div class="col-md-6 pe-5">
                    <h2>Have a scheduling question?</h2>
                    <p>Appointment Solutions is here to reduce the stress of scheduling preventative care appointments.
                        We make the process simple and clear, so you can focus on your health without the hassle.</p>
                    <a href="#" class="blue_btn">Contact Us</a>
                </div>
                <div class="col-md-6 text-end">
                    <img src={shedulingimg} class="w-100"/>
                </div>
            </div>
        </div>
    </section>
    {/* <Footer></Footer> */}
        </>
    );
};
export default Homepage;
