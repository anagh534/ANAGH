import React from 'react'
import './Works.css'
import scroll from '../../assets/scroll.png'
import project1 from '../../assets/1.png'
import project2 from '../../assets/2.png'

function Works() {
  return (
    <div className='works'>
      <div className="container">
        <div className="row scroll">
          <img src={scroll} className='img-fluid' alt="" />
        </div>
        <div className="row text-center pb-5">
          <h2>Works</h2>
          <p>I had the pleasure of working with these awesome projects</p>
        </div>
        <div className="row">
          <div id="carouselExample" class="carousel slide text-center">
            <div class="carousel-inner">
              <div class="carousel-item text-center active">
                <img src={project1} class="img-fluid project-image" alt="..." />
              </div>
              <div class="carousel-item text-center active">
                <img src={project2} class="img-fluid project-image" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            <button className='btn btn-primary'>View Website</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works