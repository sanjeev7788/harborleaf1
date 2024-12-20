import React from "react"
import '../Styles/Login.css'
import Logo from "./Logo"
function Login(){

    return (

       <div className="container-fluid ">
        <Logo />
        <div className="row text-center text-white mt-5">
        <h3>ADMIN PANEL</h3>
        </div>
       
    <div className="row justify-content-center">
    <div className="col-md-6 d-flex justify-content-center">
      <div>
        <h4 className="text-center mt-5">Sign In</h4>
        <form>
          <div className="mb-3 ">
            <input type="email" className="form-control" id="email" placeholder="email" required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="password" placeholder="password" required />
           
         </div>
          <div className="mb-3 text-end">
            <p><a href="#">Forgot password?</a></p>
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
          <div className="mb-3 text-center text-white mt-3">
            <p className="noaccount">Dont have an account? <a href="#">Sign up</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
        
      
       </div>
  
    )

}
export default Login