import React from 'react'
import logo from '../images/logo.png'
import search from '../images/search.svg'
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid navbar-css">
    <div className="navbar-brand" ><span className='brand-part1'>ATG.</span><span className='brand-part2'>W<img src={logo} className='logo'/>RLD</span></div>
    
    <div >
      
      <form className="d-flex" role="search">
      <div className="input-group mb-3 search-div">
        <span className="input-group-text search-icon" id="basic-addon1"><img src={search} /></span>
        <input type="text" className="form-control searchbar" placeholder="Search for your favorite groups in ATG" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </form>
        </div>
        <div>
        
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button"  data-toggle="modal" data-target="#sem-login" aria-expanded="false">
          Create account. <span className='create-account-link'>It's free!</span>
          </a>
          
        </div>
    </div>
  </div>
</nav>


<div class="modal fade seminor-login-modal" data-backdrop="static" id="sem-reg">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
        
              
              <div class="modal-body seminor-login-modal-body">
              <h5 class="modal-title text-center">CREATE ACCOUNT</h5>
                <button type="button" class="close" data-dismiss="modal">
                    <span><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                </button>
                <button type="button" class="close" data-dismiss="modal">
                    <span><i class="fa fa-times-circle" aria-hidden="true">x</i></span>
                </button>
        
        
                <form class="seminor-login-form">
                  <div class="form-group">
                    
                  <label  for="name">Full Name</label>
                    <input type="name" class="form-control" required autocomplete="off" />
                  </div>
                  <div class="form-group">
                  <label  for="name">Email address</label>
                    <input type="email" class="form-control" required autocomplete="off" />
                    
                  </div>
                  <div class="form-group">
                  <label for="password">Password</label>
                    <input type="password" class="form-control" required autocomplete="off" />
                    
                  </div>
                  <div class="form-group">
                  <label for="password">Confirm Password</label>
                    <input type="password" class="form-control" required autocomplete="off" />
                    
                  </div>
              
                  <div class="form-group forgot-pass-fau text-center ">
                      <a href="#" class="text-secondary">
                        By Clicking "SIGN UP" you accept our<br />
                      <span class="text-primary-fau">Terms and Conditions</span>
                        </a>
                      </div>
              
                    <div class="btn-check-log">
                        <button type="submit" class="btn-check-login">SIGN UP</button>
                    </div>
                    <div class="create-new-fau text-center pt-3">
                    <a href="#" class="text-primary-fau"><span data-toggle="modal" data-target="#sem-login" data-dismiss="modal">Already Have An Account</span></a>
                    </div>
                  </form>
        
              </div>
            </div>
          </div>
        </div>
        
        
        
        
         
          <div class="modal fade seminor-login-modal" data-backdrop="static" id="sem-login">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
        
              
                <div class="modal-body seminor-login-modal-body">
                <h5 class="modal-title text-center">LOGIN TO MY ACCOUNT</h5>
                  <button type="button" class="close" data-dismiss="modal">
                      <span><i class="fa fa-times-circle" aria-hidden="true">x</i></span>
                  </button>
        
        
            <form class="seminor-login-form">
              <div class="form-group">
              <label for="name">Email address</label>
                <input type="email" class="form-control" required autocomplete="off" />
               
              </div>
              <div class="form-group">
              <label  for="password">Password</label>
                <input type="password" class="form-control" required autocomplete="off" />
                
              </div>
        
                <div class="btn-check-log">
                    <button type="submit" class="btn-check-login">LOGIN</button>
                </div>
        
        
              <div class="forgot-pass-fau text-center pt-3">
                    <a href="#" class="text-secondary">Forgot Your Password?</a>
        
                  </div>
                    <div class="create-new-fau text-center pt-3">
                      <a href="#" class="text-primary-fau"><span data-toggle="modal" data-target="#sem-reg" data-dismiss="modal">Create A New Account</span></a>
                    </div>    
        
              </form>
        
                </div>
              </div>
            </div>
          </div>  
</>
  )
}
