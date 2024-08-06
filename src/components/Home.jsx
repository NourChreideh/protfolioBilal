import React from 'react'
import'./Home.css'

const Home = () => {
  return (
   <>
   <section className="home" id="home" >
      <div className="home-text" data-aos="fade-up-right">
        <div className="slide" >
          <span className="one" data-aos="fade-left">Hello</span>
          <span className="two">I'm</span>
        </div>
        <h1 className="typing-demo">Bilal Chreideh .</h1>

        <h2>Electrical Power and Machines  <span> Engineer. </span></h2>
 
        <p>I specialize in designing and maintaining electrical systems, machines, and power solutions.</p>
        <div className="button" >
          <a href="#contact" className="btn"> Say Hello</a>
          <a href="#work" className="btn-2"
            ><span><i className="bx bx-play"></i></span> Watch My Content</a>
        </div>
      </div>
    </section>
   </>
  )
}

export default Home