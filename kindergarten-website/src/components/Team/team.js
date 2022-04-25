import React from 'react'
import Properties from './teamproperties'
const Team = () => {
    
  return (
    <div className="container-fluid pt-5">
    <div className="container">
        <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Our Teachers</span></p>
            <h1 className="mb-4">Meet Our Teachers</h1>
        </div>
        <div className="row">
            <Properties img="team-1.jpg" name="Julia Smith" info="Music Teacher"/>
            <Properties img="team-2.jpg" name="Jhon Doe" info="Language Teacher"/>
            <Properties img="team-3.jpg" name="Mollie Ross" info="Dance Teacher"/>
            <Properties img="team-4.jpg" name="Donald John" info="Art Teacher"/>
    
        </div>
    </div>
</div>
  )
}

export default Team