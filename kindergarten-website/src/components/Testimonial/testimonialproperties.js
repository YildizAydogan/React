import React from 'react'

const TestimonialProperties = (props) => {

    const image=`../assets/img/${props.img}`;

  return (
      
    <div className="testimonial-item px-3">
    <div className="bg-light shadow-sm rounded mb-4 p-4">
        <h3 className="fas fa-quote-left text-primary mr-3"></h3>
          {props.text}
         </div>
    <div className="d-flex align-items-center">
        <img className="rounded-circle" src={image} style={{width: 70, height: 70}} alt=""/>
        <div className="pl-3">
            <h5>{props.name}</h5>
            <i>{props.degree}</i>
        </div>
    </div>
</div>
  )
}

export default TestimonialProperties