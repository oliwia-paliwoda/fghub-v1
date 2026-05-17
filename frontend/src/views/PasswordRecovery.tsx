import "./styles/Auth_common.scss"
import {Link} from "react-router-dom";

function PasswordRecovery() {
    return(
        <div className="main-container-auth">
            <div className="form-box">

                <Link to="/auth/login" className="return">Back</Link>

                <form className="form-contents">
                    <div className="title" style={{fontSize: "1.7vw"}}>Forgot your password?</div>
                    <div className="sub-title">Enter your e-mail address to receive a recovery link</div>


                    <div className="form-row">
                        <div className="form-title">E-mail address</div>
                        <input className="form-input"
                               type="email"
                               placeholder="your@email.com"
                               required/>
                    </div>

                    <button className="button1" style={{width: "100%", height: "36px"}} type="submit">Submit</button>
                </form>

            </div>

        </div>
    )
}

export default PasswordRecovery;