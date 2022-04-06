import './contact.css';
import Phone from '../../assets/phone.png';
import Email from '../../assets/email.png';
import Address from '../../assets/address.png';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
function Contact() {
    const formRef = useRef()

    const [done, setDone] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        try{
            emailjs.sendForm(
                "service_fsdo02l", "template_6bli5j8", formRef.current, "P8YEitL6SkcXQyR_g"
            ).then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                }
            )
        }catch(err){
            
        }
    }

  return (
    <div className="contact">
        <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                <h2 className="contact-title">contact</h2>
                    <div className="contact-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +82 10 6423 3266
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            austintaetious@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Seoul, South Korea
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                <p className="c-desc">
            <b>Are you Interested to see some crazy talent?</b> 
            <br/>Get in touch. Available for any freelancing projects.
            <br/>Also if you value my skills as a developer, let me help you build your dreams.
          </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" name="user_name" id="" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="text" name="user_subject" id="" placeholder='Subject'value={subject} onChange={(e) => setSubject(e.target.value)}/>
                        <input type="text" name="user_email" id="" placeholder='Email'value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <textarea placeholder='Message' name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button>Submit</button>
                        {done && <div className='c-announcement'>"Thanks for your attention!"</div>}
                    </form>
                </div>

            </div>
    </div>
  )
}

export default Contact