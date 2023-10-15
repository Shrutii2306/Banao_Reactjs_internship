import React from 'react'
import join_grp_icon from '../images/join_grp_icon.svg';
export default function SubMenu() {
  return (
    <div style={{ borderBottom:'1px solid #E0E0E0 '}}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid" >
      <div >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">All Posts(32)</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Article</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Event</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Job</a>
          </li>
          </ul>
          </div>
          <div style={{ display:'flex',   marginLeft:'23rem'}}>
          <div className="nav-item dropdown post-dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Write Post
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        <form className="d-flex" role="search">
          
          <button className="btn  btn-primary join-grp-btn" type="submit"><img src={join_grp_icon} className=''/> Join Group</button>
        </form>
        </div>
      
    </div>
  </nav></div>
  )
}
