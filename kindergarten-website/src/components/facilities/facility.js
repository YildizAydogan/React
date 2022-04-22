import React from 'react'


const Facility = (props) => {
  return (<>
    <div className="col-lg-4 col-md-6 pb-1">
                <div className="d-flex bg-light shadow-sm border-top rounded mb-4" style={{padding: 30}}>
                    <i className={`flaticon-${props.icon} h1 font-weight-normal text-primary mb-3`}></i>
                    <div className="pl-4">
                        <h4>{props.title}</h4>
                        <p className="m-0">{props.desc}</p>
                    </div>
                </div>
            </div>

            
 </> )
}

export default Facility