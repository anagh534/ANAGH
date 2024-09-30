import React from 'react'
import NavBar from '../../components/NavBar'
import './Home.css'
import profile from '../../assets/profile.jpg'

function Home() {
  return (
    <>
      <NavBar />
      <div className="container-fluid bg-dark text-light p-5" style={{ minHeight: '100vh' }}>
        <div className="row">

          {/* Left Section - Profile Card */}
          <div className="col-md-4 mb-4">
            <div className="card text-center bg-dark text-light p-3" style={{ borderRadius: '15px', border: '1px solid #28c3b3' }}>
              <img
                src={profile}
                alt="profile"
                className="rounded-circle mx-auto d-block"
                style={{ width: '120px', height: '120px' }}
              />
              <div className="card-body">
                <h3 className="mb-3">ANAGH K R</h3>
                <p>Full-stack Developer</p>
                <p><i className="fas fa-envelope"></i> anaghkrkkl@gmail.com</p>
                <p><i className="fas fa-map-marker-alt"></i> Kasaragod, Kerala</p>
                {/* <p><i className="fas fa-briefcase"></i> Full-time / Freelancer</p> */}
                <p><i className="fas fa-briefcase"></i> Freelancer</p>
                <p><i className="fa-brands fa-whatsapp"></i> <a href="https://wa.me/918075541805" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>8075541805</a></p>
                <div className="badge-container mb-4">
                  <span className="badge mx-1"><i class="fa-brands fa-node"></i> MERN STACK</span>
                  <span className="badge mx-1"><i className="fa-brands fa-flutter"></i> FLUTTER</span>
                </div>
                <a href="#" className="btn btn-outline-info">
                  Download CV <i className="fas fa-download"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-8">
            <div className="text-center text-md-start mb-5">
              <h1 className="display-3">
                Hey, <br /> I'm <span className="text">ANAGH</span>,<br />
              </h1>
              <p className="lead">
                I help businesses grow by crafting amazing web experiences. <br /> If you’re looking for a developer that likes to get stuff done, let's talk!
              </p>
              <a href="mailto:abdurrahman_sinan@hotmail.com" className="btn btn-bg ">
                Let's Talk <i className="fas fa-envelope"></i>
              </a>
            </div>

            {/* Stats Section */}
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card text-center bg-dark text-light p-4">
                  <h2 className="display-4 text">10+</h2>
                  <p className="lead">Programming Languages</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card text-center bg-dark text-light p-4">
                  <h2 className="display-4 text">6+</h2>
                  <p className="lead">Development Tools</p>
                </div>
              </div>
              {/* <div className="col-md-4 mb-4">
                <div className="card text-center bg-dark text-light p-4">
                  <h2 className="display-4 text">8</h2>
                  <p className="lead">Years of Experience</p>
                </div>
              </div> */}
              <div className="col-md-4 mb-4">
                <div className="card text-center bg-dark text-light p-4">
                  <h2 className="display-4 text">25+</h2>
                  <p className="lead">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home