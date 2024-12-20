import React from "react"
import '../Styles/Forgotpassword.css'
import Logo from "./Logo"
function ForgotPassword(){

    return(
  
        <div className="container-fluid ">
          <Logo />
          <div className="row text-center text-white mt-5">
            <h3>ADMIN PANEL</h3>
          </div>

           <div className="row justify-content-center">
           <div className="col-md-6 d-flex justify-content-center">
           <div>
           <h4 className="text-center mt-5">Forgot Password</h4>
           
           <p className="text-center text-white mt-3">We've sent an activation code to<br/> your email Sourav@gmail.com</p>
           
           <form>
           <div class="d-flex">
                <input type="text" maxlength="1" class="form-control otp-input" />
                <input type="text" maxlength="1" class="form-control otp-input" />
                <input type="text" maxlength="1" class="form-control otp-input" />
                <input type="text" maxlength="1" class="form-control otp-input" />
                <input type="text" maxlength="1" class="form-control otp-input" />
            </div>
           
            <div className="resendotp">
            <p className="text-center text-white mt-2"><a href="#">Send code again:</a>&nbsp;0.60</p>
            </div>

            <div class="text-center mt-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>

           </form>
           </div>
                

           </div>

          </div>

        </div>

    )
}
export default ForgotPassword