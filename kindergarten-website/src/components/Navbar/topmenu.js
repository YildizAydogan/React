import React from 'react'



const TopMenu = () => {
  return (
    <div className="navbar-nav font-weight-bold mx-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="className.html" className="nav-item nav-link">Classes</a>
                    <a href="team.html" className="nav-item nav-link">Teachers</a>
                    <a href="gallery.html" className="nav-item nav-link">Gallery</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="blog.html" className="dropdown-item">Blog Grid</a>
                            <a href="single.html" className="dropdown-item">Blog Detail</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
  )
}

export default TopMenu