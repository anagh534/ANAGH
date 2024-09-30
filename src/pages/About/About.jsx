import React from 'react'
import './About.css'
import scroll from '../../assets/scroll.png'
import about from '../../assets/about.png'

const About = () => {
    return (
        <div className="about" id="about">
            <div className="container pt-3 pb-3">
                <div className="about-top">
                    <img src={scroll} alt="" className='img-fluid' />
                </div>
                <div className="row about-bottom">
                    <div className="col-lg-6 about-left">
                        <div className="card text-center bg-dark text-light p-2 mb-5" style={{ borderRadius: '15px', border: '1px solid #28c3b3', width: '15rem' }}>
                            <h2>About Me</h2>
                        </div>
                        <div className="card text-center bg-dark text-light p-3 mb-5" style={{ borderRadius: '15px'}}>
                            <p style={{textAlign: 'left'}}>
                                <span style={{fontSize: '22px',color: '#12F7D6'}}>Hello!</span> <br />
                                My name is ANAGH and I specialize in web developement, app developement that utilizes <span style={{color: '#12F7D6'}}>HTML, CSS, JS, REACT, NODEJS, EXPRESS <br /> and FLUTTER</span> etc. <br />
                                I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving. <br />
                                I like to have my perspective and belief systems challenged so that I see the world through new eyes. <br />
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-sm-none d-md-none d-lg-block  about-right">
                        <img className='img-fluid w-75 p-2' src={about} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About