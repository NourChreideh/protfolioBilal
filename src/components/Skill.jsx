import React from 'react'
import './Skill.css'

const Skill = () => {
  return (
    <>
       <section className="skill" id="skill">
      <div className="main-text">
        <h2><span>My</span> Skills</h2>
      </div>
      
      <div className="skill-content"   data-aos-offset="500"data-aos-duration="1000" >
      <div className="rows"  data-aos="fade-up" >
        <img src={require('../images/circuit.png')} alt="" />
        <p>Circuit Design</p>
      </div>
      <div className="rows"data-aos="fade-up">
        <img src={require('../images/controlSystem.png')}alt=""/>
        <p>Control Systems</p>
      </div>
      <div className="rows" data-aos="fade-up">
        <img src={require('../images/EmbeddedSystems.png')} alt=""/>
        <p>Embedded Systems</p>








      </div>
      <div className="rows" data-aos="fade-up">
        <img src={require('../images/PowerSystems.png')}alt=""/>
        <p>Power Systems</p>
      </div>
      <div className="rows" data-aos="fade-up">
        <img src={require('../images/Matlabpng.png')} alt=""/>
        <p>MATLAB</p>
      </div>
      <div className="rows" data-aos="fade-up">
        <img src={require('../images/AutoCADElectrical.png')} alt=""/>
        <p>AutoCAD Electrical</p>
      </div>
      <div className="rows" data-aos="fade-up">
        <img src={require('../images/RenewableEnergy.png')}alt=""/>
        <p>Renewable Energy</p>
      </div>
      <div className="rows" data-aos="fade-up">
        <img src={require('../images/Microcontrollers.png')} alt=""/>
        <p>Microcontrollers</p>
      </div>
      <div className="rows" data-aos="fade-up">
        <img src={require('../images/LabVIEW.png')} alt=""/>
        <p>LabVIEW</p>
      </div>
      </div>
    
    </section>
 </>
 
  )
}

export default Skill