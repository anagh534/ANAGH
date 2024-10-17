import React from 'react'
import './Works.css'
import scroll from '../../assets/scroll.png'
import images from '../../utils/LoadImage'

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
              {
                images.map((data, index) =>
                  <div key={index} class="carousel-item text-center active">
                    <img src={data.img} class="img-fluid project-image" alt="..." />
                  </div>
                )
              }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            <button className='btn btn-light'>View Website</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works