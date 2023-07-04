import React, { Component } from 'react'

export default class login extends Component {
  render() {
    return (
      <div>
    
    
   <section className="fxt-template-animation fxt-template-layout31">
  <span className="fxt-shape fxt-animation-active" />
  <div className="fxt-content-wrap">
    <div className="fxt-heading-content">
      <div className="fxt-inner-wrap">
        <div className="fxt-transformY-50 fxt-transition-delay-3">
          <a href="login-31.html" className="fxt-logo"><img src="img/logo-31.png" alt="Logo" /></a>
        </div>
        <div className="fxt-transformY-50 fxt-transition-delay-4">
          <h1 className="fxt-main-title">We're a Digital Agency.</h1>
        </div>
        <div className="fxt-login-option">
          <ul>
            <li className="fxt-transformY-50 fxt-transition-delay-6"><a href="#">Sing in with Google</a></li>
            <li className="fxt-transformY-50 fxt-transition-delay-7"><a href="#">Sing in with Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="fxt-form-content">
      <div className="fxt-page-switcher">
        <h2 className="fxt-page-title mr-3">Login</h2>
        <ul className="fxt-switcher-wrap">
          <li><a href="login-31.html" className="fxt-switcher-btn active">Login</a></li>
          <li><a href="register-31.html" className="fxt-switcher-btn">Register</a></li>
        </ul>
      </div>
      <div className="fxt-main-form">
        <div className="fxt-inner-wrap">
          <form method="POST">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <input type="email" id="email" className="form-control" name="email" placeholder="Email" required="required" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input id="password" type="password" className="form-control" name="password" placeholder="********" required="required" />
                  <i toggle="#password" className="fa fa-fw fa-eye toggle-password field-icon" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <div className="fxt-checkbox-wrap">
                    <div className="fxt-checkbox-box mr-3">
                      <input id="checkbox1" type="checkbox" />
                      <label htmlFor="checkbox1" className="ps-4">Keep me logged in</label>
                    </div>
                    <a href="forgot-password-31.html" className="fxt-switcher-text">Forgot Password</a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <button type="submit" className="fxt-btn-fill">Log in</button>
                </div>
              </div>
            </div>
          </form>
          <div className="fxt-switcher-description">Don't have an account?<a href="register-31.html" className="fxt-switcher-text ms-1">Register</a></div>
        </div>
      </div>
    </div>
  </div>
</section>






      </div>
    )
  }
}
