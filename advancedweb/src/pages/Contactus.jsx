import React from 'react';
import Contact from '../css/Contactus.css'
const Contactus = () => {
    return (
        
        <div>
            <img className='img-contact' src="/images/w.jpg" alt="" />
           
            <div className='Main-ContactUs'>
            
                <form>
                 <h1>CONTACT US</h1><br />
                 <div>
                   Enter Your Name<input type="text" placeholder='Enter Your Name' className='inputs-contactus' /><br />
                   Email Address<input type="text" placeholder='Email Address' className='inputs-contactus' /><br />
                   Message<input type="text" className='message' /><br />
                 </div>
                </form>
                <button className='button-submit'>SUBMIT</button>
                



            </div>
        </div>
    );
}

export default Contactus;
