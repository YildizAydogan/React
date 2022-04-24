import React from 'react'
import Classes from './classes'

const Class = () => {
  return (
    <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center pb-2">
                <p className="section-title px-5"><span class="px-2">Popular classes</span></p>
                <h1 className="mb-4">classes for Your Kids</h1>
            </div>
            <div className="row">
                <Classes img="class-1.jpg" title="Drawing class"
                 text="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
                 age="3 - 6 Years"
                 seats="40 Seats" time="08:00 - 10:00" pay="290" />

                 <Classes img="class-2.jpg" title="Language Learning"
                 text="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
                 age="3 - 6 Years"
                 seats="40 Seats" time="08:00 - 10:00" pay="290" />

                <Classes img="class-3.jpg" title="Basic Science"
                 text="Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo"
                 age="3 - 6 Years"
                 seats="40 Seats" time="08:00 - 10:00" pay="290" />
             


            </div>
        </div>
    </div>
  )
}

export default Class