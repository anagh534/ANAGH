import React from 'react'
import './Skills.css'
import scroll from '../../assets/scroll.png'

function Skills() {
  return (
    <div className="skills">
      <div className="container">
        <div className="row scroll">
          <img src={scroll} className='img-fluid' alt="" />
        </div>
        <div className="row text-center pb-5">
          <h2>Skills</h2>
          <p>I am striving to never stop learning and improving</p>
        </div>
        <div className="cards">
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-3" style={{ minHeight: '137px' }}>
                <div className="card-body text-center">
                  <i className="fa-solid fa-desktop"></i>
                  <h5 className="card-title">WEB DEVELOPMENT</h5>
                  <p className="card-text"><small className="text-body-secondary"><i className="fa-brands fa-beat  fa-html5"></i> HTML <i className="fa-brands fa-beat  fa-css3-alt"></i> CSS <i className="fa-brands fa-beat  fa-js"></i> JS <br /> <i className="fa-brands fa-beat  fa-node"></i> MERN</small></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-3" style={{ minHeight: '137px' }}>
                <div className="card-body text-center">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                  <h5 className="card-title">APP DEVELOPMENT</h5>
                  <p className="card-text"><small className="text-body-secondary"><i className="fa-brands fa-flutter fa-beat "></i> FLUTTER</small></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-3" style={{ minHeight: '137px' }}>
                <div className="card-body text-center">
                  <i className="fa-solid fa-desktop"></i>
                  <h5 className="card-title">SEO Optimization</h5>
                  <p className="card-text"><small className="text-body-secondary"><i className="fa-brands fa-searchengin fa-beat"></i> SEO</small></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-3" style={{ minHeight: '137px' }}>
                <div className="card-body text-center">
                  <i className="fa-solid fa-desktop"></i>
                  <h5 className="card-title">WEB DESIGN</h5>
                  <p className="card-text"><small className="text-body-secondary"><i className="fa-brands fa-figma fa-beat"></i> FIGMA <i className="fa-solid fa-square-parking fa-beat"></i> PHOTOSHOP</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills