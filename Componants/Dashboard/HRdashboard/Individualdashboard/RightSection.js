import Logowhit from "../../../../FemilerCom/Logo/Logowhit";
import "./HR.css"
import Pay from "../../../../Media/Icons/Pay.png"
import dashboard from "../../../../Media/Icons/dashboard.png"
import report from "../../../../Media/Icons/report.png"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../../../../App";
import axios from "axios";
function RightSection (props) {
    const navigate = useNavigate();
    const isLoggedIn = useContext(appContext);
    function logout(e) {
        e.preventDefault();
        axios.delete("https://api.twindix.com/auth/logout", {headers:{
            Authorization:"Bearer " + localStorage.token
        }}).then(res => {
            console.log("logged out successfully");
            localStorage.removeItem("token");
            localStorage.removeItem("isLogged");
            localStorage.removeItem("isAdmin");
            localStorage.removeItem("userType");
            
            isLoggedIn.setUserToken(null);
            isLoggedIn.setLoggedin(null);
            isLoggedIn.setUserType(null);
            navigate("/login")
        }).catch(err => console.log(err))

        // localStorage.removeItem('token');
        // isLoggedIn.setLoggedin(false)
        // navigate('/login', {replace:true});
    }
    return (
        <>
            <div className="RightSection">
                <div className="DashLogo">
                    <Logowhit />
                </div>
                <div className="Account">
                    <div className="User">Hi,<b>{isLoggedIn.userName}</b></div>
                    <div className="Mail">{isLoggedIn.userEmail}</div>
                </div>
                <div className="Sections">
                    <div className="DetilCon">
                        <img className="Icon" src={dashboard} alt="icon" />
                        <div className="Detil" onClick={props.dashboardOnclick}>Dashboard</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={report} alt="icon" />
                        <div className="Detil" onClick={props.reportOnclick}>Rebort</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={report} alt="icon" />
                        <div className="Detil" onClick={props.packsOnClick}>Packages</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={report} alt="icon" />
                        <div className="Detil" onClick={props.myPacks}>My Packages</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={report} alt="icon" />
                        <div className="Detil" onClick={props.employees}>Employees</div>
                        <div className="After"></div>
                    </div>
                    {/* <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <Link to="/HRPayment"><div className="Detil">Pay</div></Link>
                        <div className="After"></div>
                    </div> */}
                    <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <a onClick={logout}><div className="Detil">Logout</div></a>
                        <div className="After"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSection;