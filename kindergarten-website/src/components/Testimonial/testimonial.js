import React from 'react'
import Properties from './testimonialproperties'


const Testimonial = () => {

  return (
    <div className="container-fluid py-5">
    <div className="container p-0">
        <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Testimonial</span></p>
            <h1 className="mb-4">What Parents Say!</h1>
        </div>   
      
      <div className="owl-carousel testimonial-carousel">
     <Properties text="Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita" 
        name="Parent Name" degree="Profession" img="testimonial-1.jpg"/>
     <Properties text="Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita" 
        name="Parent Name" degree="Profession" img="testimonial-2.jpg"/>
     <Properties text="Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita" 
        name="Parent Name" degree="Profession" img="testimonial-3.jpg"/>
     <Properties text="Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita" 
        name="Parent Name" degree="Profession" img="testimonial-4.jpg"/>
        
        </div>
    </div>
</div>
  )
}

export default Testimonial