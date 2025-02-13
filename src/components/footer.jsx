import React from 'react';
import styles from './footer.module.scss';
import fb from '../assets/facebook-icon.svg';
import twitter from '../assets/twitter-icon.svg';
import yt from '../assets/youtube-icon.svg';
import logo from '../assets/logo-white.svg';

const Footer = () =>{
 return(
<footer className={`pt-5 ${styles.footer_main}`}>
<div className="container pb-5">
       <div className="row menu_footer">
           <div className="col-md-4 pe-md-5 row_one">
               <img src={logo}/>
               <p className="pt-4 text-white">Appointment Solutions, LLC is a website and mobile app- based company
                   that is aware of the high
                   importance of confidentiality for patient and doctor information. Amazon Web Services (AWS) uses
                   encrypted software that is maintained and monitored and holds all of our patient and doctor
                   information.</p>
           </div>
           <div className="col-md-2 pt-lg-5 ps-md-3">
               <h4>menu</h4>
               <ul>
                   <li><a href="#">Home</a></li>
                   <li><a href="#">About us</a></li>
                   <li><a href="#">Contact Us</a></li>
                   <li><a href="#">Pricing</a></li>
               </ul>
           </div>
           <div className="col-md-3 pt-lg-5">
               <h4>Social media</h4>
               <a href="#" className="me-3"><img src={fb}/></a>
               <a href="#" className="me-3"><img src={twitter}/></a>
               <a href="#"><img src={yt}/></a>
           </div>
           <div className={`col-md-3 pt-lg-5 ${styles.getintouch}`}>
               <h4>Get in touch</h4>
               <p>23 Corporate Plaza Dr. Ste 150-88A Newport Beach, CA 92660-7908<br/>
                   Phone: <a href="tel:909-835-9028" className="text-decoration-none">909-835-9028<br/></a>
                   Email: <a href="mailto:info@appointment-solutions.com"
                       className="text-decoration-none">info@appointment-solutions.com</a></p>
           </div>
       </div>
   </div>
   <div className={`container py-4 ${styles.privacy_foot}`}>
       <div className="row justify-content-between g-0">
           <div className="col-md-6">
               <a href="#" className="me-3">Privacy Policy</a>
               <a href="#">Terms & Conditions</a>
           </div>
           <div className="col-md-6 text-end">
               <p>© Copyright 2024Appointment Solutions </p>
           </div>
       </div>
   </div>
   </footer>
 )
};
export default Footer;
