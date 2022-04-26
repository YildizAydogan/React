import React from 'react'

const TeamProperties = (props) => {

    const image=`../assets/img/${props.img}`;

  return (<>
          <div className="col-md-6 col-lg-3 text-center team mb-5">
                <div className="position-relative overflow-hidden mb-4" style={{borderRadius:"100px"}}>
                    <img className="img-fluid w-100" src={image} alt="" />
                    <div
                        className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                        <a className="btn btn-outline-light text-center mr-2 px-0" style={{width: "38px", height: "38px"}}
                            href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light text-center mr-2 px-0" style={{width:"38px", height:"38px"}}
                            href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light text-center px-0" style={{width:"38px", height: "38px"}}
                            href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <h4>{props.name}</h4>
                 <i>{props.info}</i>
            </div>
     
 </> )
}

export default TeamProperties