import React from 'react'
import Blogger from './blogger'



const Blog = () => {

  return (
    <div className="container-fluid pt-5">
    <div className="container">
        <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Latest Blog</span></p>
            <h1 className="mb-4">Latest Articles From Blog</h1>
        </div>
        <div className="row pb-3">
        <Blogger img="blog-1.jpg" 
        title="Diam amet eos at no eos"
         gorev="Admin" 
         tur="Web Design"
          yorum="15" 
          text="Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet..."/>
        <Blogger img="blog-2.jpg" 
        title="Diam amet eos at no eos"
         gorev="Admin" 
         tur="Web Design"
          yorum="15" 
          text="Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet..."/>
        <Blogger img="blog-3.jpg" 
        title="Diam amet eos at no eos"
         gorev="Admin" 
         tur="Web Design"
          yorum="15" 
          text="Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet..."/>
           
  
        </div>
    </div>
</div>
  )
}

export default Blog