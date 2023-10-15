import React from 'react'

export default function SubMenu2() {
  return (
    <div className='submenu2'>
        <nav className="navbar  bg-body-tertiary">
    <div className="container-fluid" >
      <div >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Posts(32)</a>
          </li>
          
          </ul>
          </div>
          <div >
          <div className="nav-item dropdown filter-dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter All
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      
    </div>
  </nav></div>
  )
}
