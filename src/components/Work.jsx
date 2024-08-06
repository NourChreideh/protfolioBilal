import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <>
      <section className="work" id="work">
        <div className="main-text">
          <p> My Content</p>
          <h2><span>Latest</span> Content</h2>
        </div>
        <div className="work-content" data-aos="zoom-in">
          <div className="row">
            <img src={require('../images/CV.webp')} alt='' />
            <div className="layer">
              <h5>Curriculum Vitae</h5>
              <a href="https://docs.google.com/document/d/13ky_fQ7kMr9wtW5y0f7p1f3W4idYNxQm/edit?usp=sharing&ouid=113723180584687743082&rtpof=true&sd=true"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
          <div className="row">
            <img src={require('../images/download.png')} alt='' />
            <div className="layer">
              <h5 className='description'>Professional Development Plan</h5>
              <a href="https://drive.google.com/file/d/1jBDSZB4GGBzHhBAyMiPPARxf0E3jXrxM/view?usp=sharing"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
          <div className="row">
          <img src={require('../images/coverlettergraphic.jpg')} alt='' />
            <div className="layer">
              <h5 className='description'>Cover Letter</h5>
              <a href="https://drive.google.com/file/d/19TOxDbgsW0fONoDoz-603QfdvFn0NHLR/view?usp=sharing"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
          <div className="row">
          <img src={require('../images/rock.png')} alt='' />
            <div className="layer">
              <h5 className='description'>YouRock Diamond</h5>
              <a href="https://drive.google.com/file/d/1KPYzASqJPv-edN8z3PpPpJonKzZ0icgN/view?usp=sharing"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
          <div className="row">
          <img src={require('../images/oversight-concept-illustration_114360-11355.avif')} alt='' />
            <div className="layer">
              <h5 className='description'>Job Observation</h5>
              <a href="https://drive.google.com/file/d/1zBunjQmRXDjjSZMuftdAkzji8zVuXLQA/view?usp=sharing"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
      
          <div className="row">
            <img src={require('../images/TLMS_20230427_1200x628-1.png')} alt='' />
            <div className="layer">
              <h5 className='description'>Job Shadowing</h5>
              <a href="https://docs.google.com/document/d/1CusgYmFcauP1eFAjwDyB1D8-Ob_GMqEf/edit?usp=sharing&ouid=113723180584687743082&rtpof=true&sd=true"><i className='bx bx-link-external' ></i></a>
           
            </div>
          </div>
       
        </div>
      </section>
    </>
  )
}

export default Work
