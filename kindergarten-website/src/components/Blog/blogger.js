import React from 'react'

const Blogger = (props) => {

    const image=`../assets/img/${props.img}`;

  return (
    <div className="col-lg-4 mb-4">
                <div className="card border-0 shadow-sm mb-2">
                    <img className="card-img-top mb-2" src={image} alt=""/>
                    <div className="card-body bg-light text-center p-4">
                        <h4 className="">{props.title}</h4>
                        <div className="d-flex justify-content-center mb-3">
                            <small className="mr-3"><i className="fa fa-user text-primary"></i> {props.gorev}</small>
                            <small className="mr-3"><i className="fa fa-folder text-primary"></i>{props.tur}</small>
                            <small className="mr-3"><i className="fa fa-comments text-primary"></i> {props.yorum}</small>
                        </div>
                        <p>{props.text}</p>
                        <a href="" className="btn btn-primary px-4 mx-auto my-2">Read More</a>
                    </div>
                </div>
            </div>
  )
}

export default Blogger