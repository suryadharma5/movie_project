import React from 'react'
import '../App.css'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
          <div className="container py-0 my-0">
          <a className="navbar-brand text-white fw-bold p-2" href="/">
            {/* <img src='/logos.png' width={150} height={50}></img> */}
            <span className='text-black fw-bold'>OMDb</span>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div class="input-group flex-nowrap">
              <span className="input-group-text bi bi-search" id="addon-wrapping"></span>
              <input type="text" className="form-control" placeholder="Search Movie..." aria-label="Username" aria-describedby="addon-wrapping" name='movie' onChange={(e)=>props.searchValue(e.target.value)}/>
            </div>  
              <li className="nav-item">
                <a className="nav-link active text-white text-decoration-underline" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Link</a>
              </li>
            </ul>
          </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
