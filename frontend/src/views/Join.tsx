import "./styles/Auth_common.scss"
import {Link} from "react-router-dom";

function Join() {
    return (
        <div className="main-container-auth">
            <div className="form-box">

                <form className="form-contents">
                    <div className="title" style={{fontSize: "1.7vw"}}>Verify your e-mail address</div>


                <div className="form-row">
                    <div className="form-title">E-mail address</div>
                    <input className="form-input"
                           type="email"
                           placeholder="your@email.com"
                           required/>
                </div>

                <button className="button1" style={{width: "100%", height: "36px"}} type="submit">Verify</button>

                <div className="login-redirect">
                    Already a member? <Link to="/auth/login" className="login-link">Sign in</Link>
                </div>
                </form>

            </div>

        </div>
    )
}

export default Join;