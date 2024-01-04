import LogoWhi from "../../../FemilerCom/Logo/Logowhit";
import "./individual.css"
import Pay from "../../../Media/Icons/Pay.png"
import dashboard from "../../../Media/Icons/dashboard.png"
import report from "../../../Media/Icons/report.png"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { appContext } from "../../../App";
function RightSection (props) {

    const [currentUserr, setCurrentUser] = useState(null);
    const navigate = useNavigate();
    const isLoggedIn = useContext(appContext);
    function logout(e) {
        e.preventDefault();
        axios.delete("https://api.twindix.com/auth/logout", {headers:{
            Authorization:"Bearer " + localStorage.token
        }}).then(res => {
            console.log("logged out successfully");
            localStorage.removeItem("token");
            localStorage.removeItem("isAdmin");
            localStorage.removeItem("isLogged");
            localStorage.removeItem("userType");
            isLoggedIn.setUserToken(null);
            isLoggedIn.setLoggedin(null);
            isLoggedIn.setUserType(null);
        }).catch(err => console.log(err))

        // localStorage.removeItem('token');
        // isLoggedIn.setLoggedin(false)
        // navigate('/login', {replace:true});
    }
    // useEffect(() => {
    //     const getCurrentUser = async () => {
    //     try {
    //       const response = await axios.get('http://assessments.twindix.com/auth/me'); // Replace with your actual API endpoint
    //         setCurrentUser(response.data);
    //     } catch (error) {
    //         console.error('Error fetching current user:', error);
    //     }
    // };

    // getCurrentUser();
    // }, []); // The empty dependency array ensures that this effect runs once after the initial render



    return (
        <>
            <div className="RightSection">
                <div className="DashLogo">
                    <LogoWhi />
                </div>
                <div className="Account">
                <div className="Account">
                    <div className="User">Hi,<b>{isLoggedIn.userName}</b></div>
                    <div className="Mail">{isLoggedIn.userEmail}</div>
                </div>
                </div>
                <div className="Sections">
                    <div className="DetilCon">
                        <img className="Icon" src={dashboard} alt="icon" />
                        <div className="Detil" onClick={props.dashOnclick}>Dashboard</div>
                    </div>

                    <div className="DetilCon">
                        <img className="Icon" src={report} alt="icon" />
                        <div className="Detil" onClick={props.enrollments}>Enrollments</div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <Link to="/Payment"><div className="Detil">Pay</div></Link>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <div className="Detil" onClick={props.differentInfoOnclick}>Update Profile</div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <div className="Detil" onClick={logout}>Logout</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSection;