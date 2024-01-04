import Logowhit from "../../../FemilerCom/Logo/Logowhit";
import "./Admin.css"
import Pay from "../../../Media/Icons/Pay.png"
import dashboard from "../../../Media/Icons/dashboard.png"
import report from "../../../Media/Icons/report.png"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { appContext } from "../../../App";
function RightSection (props) {
    let isLoggedIn = useContext(appContext);
    let navigate = useNavigate();
    function logout(e) {
        e.preventDefault();
        
        axios.delete("https://api.twindix.com/dashboard/auth/logout", {headers:{
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
            isLoggedIn.setIsAdmin(null);
            navigate('/LoginForAdmin')
        }).catch(err => console.log(err))

        // localStorage.removeItem('token');
        // isLoggedIn.setLoggedin(false)
        // navigate('/login', {replace:true});
    }
    return (
        <>
            <div className="RightSection ">
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
                        <div className="Detil" onClick={props.dashboardOnclick} >Dashboard</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={report} alt="icon" />
                        <div className="Detil" onClick={props.RebortOnclick}>Enrollments</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={report} alt="icon" />
                        <div className="Detil" onClick={props.ShowUsers}>Users</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={report} alt="icon" />
                        <div className="Detil" onClick={props.ShowPacks}>Packages</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={report} alt="icon" />
                        <div className="Detil" onClick={props.addPacks}>Add Package</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <div className="Detil" onClick={props.exams}>Exams</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <div className="Detil" onClick={props.AddTestdOnclick}>Add Exam</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <div className="Detil" onClick={props.employees}>Templates</div>
                        <div className="After"></div>
                    </div>
                    <div className="DetilCon">
                        <img className="Icon" src={Pay} alt="icon" />
                        <div className="Detil" onClick={logout}>Logout</div>
                        <div className="After"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSection;