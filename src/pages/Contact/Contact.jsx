import React, { useState } from 'react'
import './Contact.css'
import scroll from '../../assets/scroll.png'


function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const handleForm = async () => {

        await fetch("https://script.google.com/macros/s/AKfycby7QODdvH7_k0lu65_UzrI5buSVCteCkxbmB5RY4-YSqkQHOAT8LGu0NgIvllrxaGgsrA/exec", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                name: name,
                message: message,
                email: email
            },
            mode: "no-cors", // Add this line to bypass CORS
        })


    }
    return (
        <div className="contact">
            <div className="container">
                <div className="row scroll">
                    <img src={scroll} className='img-fluid' alt="" />
                </div>
                <div className="row text-center pb-5">
                    <h2>Contact</h2>
                    <p>I’m currently available for freelance work</p>
                </div>
                <div className="container">
                    <form action="https://script.google.com/macros/s/AKfycbwt9ab1MdnnBImOdvBNDMvbm4m6a-2CXPSVMPuNaABhIp6t9sON96M8mT6BHCZ95y5wLw/exec" method='post'>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <input type="text" name="name" required id="name" onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Enter Your Name' />
                                    <label htmlFor="name" className='text-dark'>Name</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="email" name="email" required id="email" onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='Enter Your Email' />
                                    <label htmlFor="email" className='text-dark'>Email</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <textarea name="message" id="msg" required style={{ height: '8rem' }} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your needs' className='form-control'></textarea>
                                    <label htmlFor="msg" className='text-dark'>Message</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col text-center">
                                <button className='btn btn-bg' type='submit'><i style={{ fontFamily: 'monospace' }} className='fa-brands fa-bounce'>Message</i> <i className="fa-brands fa-facebook-messenger fa-bounce"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact