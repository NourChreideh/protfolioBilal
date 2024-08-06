import React ,{useRef} from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'



const Contact = () => {

  
 



  const form = useRef();
  // const theRef=useRef(null)

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "service_qebokbk",
        "template_ikr5xih",
        form.current,
        "SdQQqt_oC6lufuJrg"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <>
      <section className='contact' id='contact'>
        <div className='contact-text'>
          <h2>
            Contact <span>Me!</span>
          </h2>
          <h4>If You Have Any thing In Your Mind.</h4>
          <p>
          I'm a dedicated Electrical Engineer - specializing in designing innovative and efficient electrical systems for diverse industries worldwide.
          </p>
          <div className='list'>
            <li>
              <a href="tel:+96170388457">+961 70388457</a>
            </li>
            <li>
              <a href="mailto: bilalshriedeh200@gmail.com">bilalshriedeh200@gmail.com</a>
            </li>
          </div>

          <div className='contact-icons'>
            <a href='https://www.facebook.com/bilal.shriedeh.3?mibextid=ZbWKwL'>
              <i className='bx bxl-facebook'></i>
            </a>
            <a href='https://www.linkedin.com/in/bilal-chreideh-7a2615321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <i className='bx bxl-linkedin'></i>
            </a>
          
          </div>
        </div>
        <div
          className='contact-form'
          data-aos='fade-left'
          data-aos-offset='500'
          data-aos-duration='500'
        >
          <form ref={form} onSubmit={sendEmail}>
            <input
              name="user_name"
              id='name'
              type='text'
              placeholder='Your name'
              required
            />
            <input
              type='email'
              id='email'
              name="user_email"
              placeholder='Your Email Address'
              required
            />
            <textarea
              id='message'
              name='message'
              cols='35'
              rows='10'
              placeholder='How Can I Help You '
              required
            ></textarea>
             <input type="submit" value="Send Message" className="submit"   required />
            
           
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
