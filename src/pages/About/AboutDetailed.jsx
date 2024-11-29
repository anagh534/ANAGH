import React from 'react'
import NavBar from '../../components/NavBar'

function AboutDetailed() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12 mt-5">
            <h2>About Me</h2>
            <p>
              Hello, I’m <strong>Anagh K R</strong>, a passionate <strong>MERN Stack Developer</strong> and
              <strong> Flutter App Developer</strong> based in <strong>Kasaragod, Kerala</strong>. I specialize in
              crafting intuitive and efficient digital solutions for both web and mobile platforms. With a relentless dedication to
              learning and a knack for solving complex problems, I strive to deliver clean, robust, and scalable code that powers
              seamless user experiences.
            </p>
          </div>

          <div className="col-lg-12 mt-5">
            <h2>Who I Am</h2>
            <p>
              From developing dynamic web applications to creating interactive mobile apps, my expertise spans multiple
              technologies, including <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,
              <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>Flutter</strong>. I am
              driven by a commitment to continuous improvement, staying updated with the latest trends and technologies to ensure my
              work is innovative and future-ready.
            </p>
          </div>

          <div className="col-lg-12 mt-5">
            <h2>What I Do</h2>
            <ul>
              <li>
                <strong>Web Development:</strong> Proficient in building full-stack web applications using the <strong>MERN stack</strong>.
                Whether it's an e-commerce platform, a secure file-sharing system, or a movie browsing website, I bring ideas to life with a user-first approach.
              </li>
              <li>
                <strong>App Development:</strong> Skilled in developing high-performance mobile applications with <strong>Flutter</strong>,
                offering smooth cross-platform functionality and an engaging user experience.
              </li>
              <li>
                <strong>SEO Optimization:</strong> Well-versed in optimizing websites to improve visibility and ranking, ensuring your
                platform reaches the right audience effectively.
              </li>
              <li>
                <strong>Web Design:</strong> Leveraging tools like <strong>Figma</strong> and <strong>Adobe Photoshop</strong>, I create
                visually appealing designs that align with brand identity and user needs.
              </li>
            </ul>
          </div>

          <div className="col-lg-12 mt-5">
            <h2>Why Choose Me</h2>
            <p>
              I believe in writing code that not only works but also adheres to best practices for maintainability and scalability. My philosophy is simple:
            </p>
            <ul>
              <li>Deliver exceptional value through top-notch solutions.</li>
              <li>Embrace challenges to expand my perspective and improve continuously.</li>
              <li>Build trust with clients by prioritizing their goals and needs.</li>
            </ul>
          </div>

          <div className="col-lg-12 mt-5">
            <h2>Based in Kasaragod, Kerala</h2>
            <p>
              Living in the picturesque town of <strong>Kasaragod</strong>, I draw inspiration from the cultural richness and natural beauty of
              <strong>Kerala</strong>, known as <em>"God’s Own Country."</em> I am proud to serve clients locally and globally, delivering world-class
              solutions rooted in hard work and creativity.
            </p>
          </div>

          <div className="col-lg-12 mt-5">
            <h2>Let’s Collaborate</h2>
            <p>
              If you’re looking for a dedicated developer to turn your ideas into reality, I’d love to work with you. Whether it’s a new project,
              enhancing an existing platform, or exploring innovative possibilities, let’s create something extraordinary together!
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

export default AboutDetailed