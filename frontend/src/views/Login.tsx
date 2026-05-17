import "./styles/Auth_common.scss"
import { Link } from "react-router-dom";


function Login(){
   return(
       <div className="main-container-auth">

           <div className="form-box">
               <form className="form-contents">
                   <div className="title">Sign in to FGhub</div>

               <div className="form-row">
                   <div className="form-title">E-mail address</div>
                   <input className="form-input"
                          type="email"
                          placeholder="your@email.com"
                          required/>
               </div>

               <div className="form-row">
                   <div className="form-title">Password</div>
                   <input className="form-input "
                          type="password"
                          placeholder="•••••"
                          required/>
               </div>

                   {/* <div className="error-msg">
                       Email or password is incorrect.
               </div> */}

               <div className="actions">
                   <div className="keep-logged-in">
                   <input type="checkbox"/>
                       Keep me logged in
                   </div>
                   <Link to="/auth/password-recovery" className="forgot-password-link">Forgot password?</Link>
               </div>

               <button className="button1" style={{width: "100%", height: "36px"}} type="submit">Sign in</button>

                   <div className="register-redirect">
                       Need an account? <Link to="/auth/join" className="register-link">Join here</Link>
                   </div>

               </form>

           </div>

       </div>
   )
}

export default Login;