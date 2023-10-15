import React from 'react'
import background_image from '../images/background_image.png'
import background_img2 from '../images/background_img2.svg'
export default function Header() {
  return (
    <div style={{position:'relative'}}>
        <div className='header-image-div'>
            <div className='header-img-1'>
            <img src={background_image} className='header-image'/></div>
            <div className='header-img-2'>
            <img src={background_img2} className='header-image2'/>
            
            </div>
        </div>
        
        <div className='header-overlay-text'>
        Computer Engineering<br></br>
        <span className='sub-head'>142,765 Computer Engineers follow this</span>
        </div>
        <div className='header-btn-div'>
        <button type="button" class="btn btn-outline-light" data-toggle="modal" data-target="#sem-login"  >Join Group</button>

        </div>

        <div class="modal fade seminor-login-modal" data-backdrop="static" id="sem-reg">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
        
              
              <div class="modal-body seminor-login-modal-body">
              <h5 class="modal-title text-center">CREATE ACCOUNT</h5>
              <button type="button" class="close" data-dismiss="modal">
                    <span><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                </button>
                <button type="button" class="close" data-dismiss="modal">
                    <span><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                </button>
        
        
                <form class="seminor-login-form">
                  <div class="form-group">
                  <label  for="name">First Name</label>
                    <input type="name" class="form-control" required autocomplete="off" />
                    
                  </div>
                  <div class="form-group">
                  <label for="email">Email address</label>
                    <input type="email" class="form-control" required autocomplete="off" />
                   
                  </div>
                  <div class="form-group">
                  <label for="password">Password</label>
                    <input type="password" class="form-control" required autocomplete="off" />
                   
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" required autocomplete="off" />
                    <label class="form-control-placeholder" for="password">Confirm Password</label>
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
                      <span><i class="fa fa-times-circle" aria-hidden="true"></i></span>
                  </button>
        
        
            <form class="seminor-login-form">
              <div class="form-group">
                <input type="email" class="form-control" required autocomplete="off" />
                <label class="form-control-placeholder" for="name">Email address</label>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" required autocomplete="off" />
                <label class="form-control-placeholder" for="password">Password</label>
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
        
    </div>
  )
}