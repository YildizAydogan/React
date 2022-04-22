import React from 'react'
import TopMenu from './topmenu'

const Navbar = () => {
  return (
      <>
     <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5" >
            <a href="" className="navbar-brand font-weight-bold text-secondary" style={{fontSize: 50}}>
                <i className="flaticon-043-teddy-bear"></i>
                <span className="text-primary">KidKinder</span>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
               <TopMenu/> 
                <a href="" className="btn btn-primary px-4">Join Us</a>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar