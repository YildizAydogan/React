import React from 'react'


const Classes = (props) => {

    const image=`../assets/img/${props.img}`;
    

  return (
    <div className="col-lg-4 mb-5">
    <div className="card border-0 bg-light shadow-sm pb-2">
        <img className="card-img-top mb-2" src={image} alt=""/>
        <div className="card-body text-center">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.text}</p>
        </div>
        <div className="card-footer bg-transparent py-4 px-5">
            <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right"><strong>Age of Kids</strong></div>
                <div className="col-6 py-1">{props.age}</div>
            </div>
            <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right"><strong>Total Seats</strong></div>
                <div className="col-6 py-1">{props.seats}</div>
            </div>
            <div className="row border-bottom">
                <div className="col-6 py-1 text-right border-right"><strong>Class Time</strong></div>
                <div className="col-6 py-1">{props.time}</div>
            </div>
            <div className="row">
                <div className="col-6 py-1 text-right border-right"><strong>Tution Fee</strong></div>
                <div className="col-6 py-1"> $ {props.pay} /Month</div>
            </div>
        </div>
        <a href="" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
    </div>
</div>
  )
}

export default Classes