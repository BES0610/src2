import { useContext, useEffect, useState } from "react";
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import RegisterValidation from "./RegisterValidation";
import axios from "axios";
import Button from "../../FemilerCom/Button/Button";
import swal from 'sweetalert';
import DND from "../../FemilerCom/DND/DNDcom"
import { appContext } from "../../App";
function RegisterBox () {
/*
hrsubmit is a state
VildationSupmitFun is a function runs when form is submitted
vlidationinput is a function runs when any input changes
*/
    let [hRSubmit, sethRSubmit] = useState(false)
    let [indvividualSubmit, setindvividualSubmit] = useState(true)
    //Start Register
    let [error, seterror] = useState([])
    const [errMsg, setErrMsg] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [submitForm, setSubmitForm] = useState(false);
    let [vlidation, setvlidation] = useState ({
        email: "",
        password: "",
        password_confirmation: "",
        phone: "",
        username: "",
        type: "",
        name: "",
        job_title: "",
        company_name: ""

    });

    // axios.get("https://api.twindix.com/enrollments", {headers: {
    //     Authorization: "Bearer 2|WN4bO9kFmjXHCd9AApIv15riXzk9oXvWqQgoiXDE67348693"
    // }}).then((res) => {
    //     console.log(res);
    // })

    const handleIndvividualClick = () => {
            sethRSubmit(false);
            setindvividualSubmit(true)

         // Set HR to false
        // setindvividualSubmit(prevState => !prevState); // Toggle Individual
    };

    const handleHRClick = () => {

        setindvividualSubmit(false); // Set Individual to false
        sethRSubmit(true); // Toggle HR
    };

    let navigate = useNavigate()

    let vlidationinput = (e) => {
        setvlidation(prev => ({...prev, [e.target.name]: e.target.value}))
    } 

    let VildationSupmitFun = (e) => {   
        e.preventDefault();
        seterror(RegisterValidation(vlidation))
        setSubmitForm(true);
    }


    useEffect(() =>{
        // if (error.username === "" && error.email === "" && error.password === "" 
        // && error.phone === "" 
        // ) {
            if (indvividualSubmit) {
                vlidation.type = 2
            }else if (hRSubmit) {
                vlidation.type = 1
            }

                if(submitForm) {
                axios.post('https://api.twindix.com/auth/register', vlidation, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then((res) => {
                    if(res.data.success) {
                        if (indvividualSubmit) {
                            navigate("/Individual")
                        }
                        if (hRSubmit) {
                            navigate("/HR")
                        }
                    }

                  // Additional logic after successful API request
                }).catch((err) => {
                    console.log(err);
                    setErrMsg(err.response.data.message);
                    setShowAlert(true);

                });
            }}, [error]); // Run this effect whenever the 'error' state changes
    //End Register
        let alert = () => {
            swal("Please Choose indvividual Or HR");

        }
    return (
        <>
        <div className={hRSubmit ? "Rigster RigsterHr" : "Rigster"} >
            
            <div className={showAlert ? "d-block position-fixed top-0" : "d-none"}>
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    {errMsg}
                    <button type="button" className="btn" onClick={() => {setShowAlert(false)}}  data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        <div className="Buttons">
        <span className="RegsterBtn" onClick={handleIndvividualClick}>
                <span><Button Text="Indvividual" /></span>
            </span>
            <span className="RegsterBtn" onClick={handleHRClick}>
            <Button Text="HR" />
            </span>
            </div>
            <div className={hRSubmit ? "RegesterBox HRBOX" : "RegesterBox"}  >
                <div className="RegisterText">
                    <h1 className="H1tex">Register</h1>
                </div>
                <form className="SupmitForm" onSubmit={VildationSupmitFun}>
                    {/* <div className={hRSubmit || indvividualSubmit ?"display": ""} >
                    <div className={hRSubmit? "InptCont InptContHr" : "InptCont "}>
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                            <div className="title">Name</div>
                            <input onChange={vlidationinput} className="RegInput "  name="username"    />
                        </div>
                        <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                    </div>
                    <div className={hRSubmit? "InptCont InptContHr" : "InptCont "}>
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                            <div className="title">username</div>
                            <input onChange={vlidationinput} className="RegInput "  name="username"    />
                        </div>
                        <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                    </div>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="ss" />
                            <div className="title">password</div>
                            <input onChange={vlidationinput} className="RegInput" type="password"  name="password"    />
                        </div>
                        <div className="ErrorText"> {error.password && <span >{error.password} </span>}</div>
                    </div>
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="ss" />
                        <div className="title">email</div>
                        <input onChange={vlidationinput} className="RegInput" type="email" name="email"   />
                        </div>
                        <div className="ErrorText">{error.email && <span >{error.email} </span>}</div>
                    </div>
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="ss" />
                        <div className="title">phone</div>
                        <input onChange={vlidationinput} className="RegInput"  name="phone" id="name"  />
                        </div>
                        <div className="ErrorText">
                            {error.phone && <span >{error.phone} </span>}
                            </div>
                    </div>
                    </div> */}
                    {indvividualSubmit && 
                    <>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                            <div className="title">Name</div>
                            <input onChange={vlidationinput} className="RegInput"  name="name"    />
                        </div>
                        <div  className="ErrorText">{error.name && <span>{error.name} </span>}</div>
                    </div>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                            <div className="title">username</div>
                            <input onChange={vlidationinput} className="RegInput"  name="username"    />
                        </div>
                        <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                    </div>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="ss" />
                            <div className="title">password</div>
                            <input onChange={vlidationinput} className="RegInput" type="password"  name="password"    />
                        </div>
                        <div className="ErrorText"> {error.password && <span >{error.password} </span>}</div>
                    </div>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="ss" />
                            <div className="title">Confirm<br></br>Password</div>
                            <input onChange={vlidationinput} className="RegInput" type="password"  name="password_confirmation"    />
                        </div>
                        
                        <div className="ErrorText"> {error.passwordConf && <span >{error.passwordConf} </span>}</div>
                    </div>
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="ss" />
                        <div className="title">email</div>
                        <input onChange={vlidationinput} className="RegInput" type="email" name="email"   />
                        </div>
                        <div className="ErrorText">{error.email && <span >{error.email} </span>}</div>
                    </div>
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="ss" />
                        <div className="title">phone</div>
                        <input onChange={vlidationinput} className="RegInput"  name="phone" id="name"  />
                        </div>
                        <div className="ErrorText">
                            {error.phone && <span >{error.phone} </span>}
                            </div>
                    </div>
                    </>}
                    {hRSubmit && 
                    <>
                    <div className="Flex">
                        <div className="HrBoxLeft">
                            <div className="InptCont">
                                <div className="ImgAndTilte">
                                    <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                                    <div className="title">Name</div>
                                    <input onChange={vlidationinput} className="RegInputHr"  name="name"    />
                                </div>
                                <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                            </div>
                            <div className="InptCont">
                                <div className="ImgAndTilte">
                                    <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                                    <div className="title">job</div>
                                    <input onChange={vlidationinput} className="RegInputHr"  name="job_title"    />
                                </div>
                                <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                            </div>
                            <div className="InptCont">
                                <div className="ImgAndTilte">
                                    <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                                    <div className="title">Company Name</div>
                                    <input onChange={vlidationinput} className="RegInputHr"  name="company_name"    />
                                </div>
                                <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                            </div>
                            <div className="InptCont">
                                <div className="ImgAndTilte">
                                    <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                                    <div className="title">username</div>
                                    <input onChange={vlidationinput} className="RegInputHr"  name="username"    />
                                </div>
                                <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                            </div>
                    </div>
                    <div className="HrBoxRight">
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="ss" />
                            <div className="title">password</div>
                            <input onChange={vlidationinput} className="RegInputHr" type="password"  name="password"    />
                        </div>
                        <div className="ErrorText"> {error.password && <span >{error.password} </span>}</div>
                    </div>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="ss" />
                            <div className="title">password Confirmation</div>
                            <input onChange={vlidationinput} className="RegInputHr" type="password"  name="password_confirmation"    />
                        </div>
                        <div className="ErrorText"> {error.password && <span >{error.password} </span>}</div>
                    </div>
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="ss" />
                        <div className="title">email</div>
                        <input onChange={vlidationinput} className="RegInputHr" type="email" name="email"   />
                        </div>
                        <div className="ErrorText">{error.email && <span >{error.email} </span>}</div>
                    </div>
                    <div className="InptCont">
                    <div className="ImgAndTilte">
                        <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/2354/2354127.png" alt="ss" />
                        <div className="title">phone</div>
                        <input onChange={vlidationinput} className="RegInputHr"  name="phone" id="name"  />
                        </div>
                        <div className="ErrorText">
                            {error.phone && <span >{error.phone} </span>}
                            </div>
                    </div>

                    </div>
                </div>
                    </>}
                <div className="RegisterBtns">
                    <div className={hRSubmit || indvividualSubmit ?"Contaner  display": "Contaner"} >
                    <button  className="RegsBTN" id="Alert" 
                    onClick={alert}>Register 
                    </button>
                    <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                    </div>
                    { hRSubmit && 
                    <>
                        <div  id="HR" className={indvividualSubmit ? "ContanerHr display" : "ContanerHr"} >
                            <button type="submit" className="RegsBTN" >Register</button>
                            <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                        </div>
                    </>}
                    {indvividualSubmit && 
                    <>
                        <div id="Individual" className={hRSubmit ? "Contaner display" : "Contaner"} >
                            <button type="submit" className="RegsBTN" >Register</button>
                            <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                        </div>
                    </>}
                </div>
            <Link to="/Login">
                <div className="ToLogin">
                    <Button Text="Already Have Account" />
                </div>
            </Link>
                </form>
            </div> 
        </div>
        </>
    )
}

export default RegisterBox;