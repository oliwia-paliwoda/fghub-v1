import "./styles/Homepage.scss"
import {useState} from "react";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function Homepage() {

    const [user, setUser ] = useState(null);

    const navigate = useNavigate();
    const handleNavigate = (path: string) => {
        navigate(path);
    }

    useEffect(() => {
        fetch("http://localhost:3001/")
            .then((res) => res.json())
            .then((data) => console.log(data.message));
    }, []);

    return (
        <div className="main-container">
            <div className="header">
                <div className="buttons-overlay">
                    <div className="button2" onClick={()=>{handleNavigate("/login")}}>Log in</div>
                    <div className="button1" onClick={()=>{handleNavigate("/join")}}>Join</div>
                </div>
            </div>
            <div className="content">
                <div className="welcome-msg">
                    {"Welcome, "+user}
                </div>
            </div>
            <div className="footer">test</div>
        </div>
    )
}

export default Homepage;