import React from 'react'
import './Contact.css'
import scroll from '../../assets/scroll.png'


function Contact() {
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
                    <form action="#" onSubmit={(e)=>e.preventDefault()}>
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <input type="text" name="name" id="name" className='form-control' placeholder='Enter Your Name' />
                                    <label htmlFor="name" className='text-dark'>Name</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <input type="email" name="email" id="email" className='form-control' placeholder='Enter Your Email' />
                                    <label htmlFor="email" className='text-dark'>Email</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <div className="form-floating">
                                    <textarea name="message" id="msg" style={{height: '8rem'}} placeholder='Enter your needs' className='form-control'></textarea>
                                    <label htmlFor="msg" className='text-dark'>Message</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col text-center">
                                <button type='submit'  className='btn btn-bg'><i style={{fontFamily: 'monospace'}} className='fa-brands fa-bounce'>Message</i> <i class="fa-brands fa-facebook-messenger fa-bounce"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact