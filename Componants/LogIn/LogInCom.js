import { useState, useEffect, useContext } from "react";
import axios from "axios";
import LoginVildation from "./LoginVildation";
import { redirect, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../FemilerCom/Button/Button";
import "./LogIn.css"
import Header from "../../FemilerCom/Header/Header";
import { appContext } from "../../App";
function LogInBox () {
let [error, seterror] = useState({email:"",password:""});
let [vlidation, setvlidation] = useState ({
        "email": "",
       "password": "",

    });
    const [finalErr, setFinalErr] = useState("");
    let isLoggedin = useContext(appContext);
    const navigate = useNavigate();


    let vlidationinput = (e) => {
        setvlidation(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    let VildationSupmitFun = (e) => {
        e.preventDefault();
        console.log(vlidation)
        seterror(LoginVildation(vlidation))
    }

    useEffect(() => {
        if(localStorage.isLogged && localStorage.token && localStorage.userType) {
            console.log("hello")
            if(localStorage.userType == 2 && localStorage.isAdmin != true) {
            console.log("donneee")

                navigate("/individual");
            } else if(localStorage.userType == 1 && localStorage.isAdmin != true) {
                navigate("/hr")
            } else if(localStorage.isAdmin) {
                navigate('/admin')
            }
        } else if (error.email === 'valid' && error.password === 'valid') {
            console.log("condition done")
        axios.post("https://api.twindix.com/auth/login", JSON.stringify(vlidation) ,{headers:{
            "Content-Type":"application/json",
            "Accept":"*",
        },
        withCredentials: true
    }).then(res => {
            if(res.data.code == 200) {
                localStorage.token = res.data.payload.token;
                localStorage.isLogged = true;
                isLoggedin.setUserToken(localStorage.token);
                isLoggedin.setLoggedin(true);
                axios.get("https://api.twindix.com/auth/me", {headers:{
                    Authorization: 'Bearer ' + localStorage.token
                }}).then(res => {
            console.log("me done")
                    localStorage.userType = res.data.payload.type;
                    if(res.data.payload.type == 2) {
                        isLoggedin.setUserType(2)
                        navigate("/individual", {replace: true});

                    } else if(res.data.payload.type == 1) {
                        isLoggedin.setUserType(1)
                navigate("/hr", {replace: true})

                    }
                })
            }else {
                console.log(res.data);
                setFinalErr("please check Your inputs again")
            }

        }).catch(res => console.log(res))

        }
      }
      , [error]); // Run this effect whenever the 'error' state changes

    return (
        <>
            <div className="LogInBox">
                <div className="LogInText">
                    <h1 className="H1tex">Log In</h1>
                </div>
                <form className="SupmitForm" onSubmit={VildationSupmitFun}>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="ss" />
                            <div className="title">email</div>
                            <input onChange={vlidationinput} className="RegInput"  name="email"    />
                        </div>
                        <div  className="ErrorText">{error.email == "valid" ? "" : error.email}</div>
                    </div>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <img className="ImgeInput" src="https://cdn-icons-png.flaticon.com/512/542/542689.png" alt="ss" />
                            <div className="title">password</div>
                            <input onChange={vlidationinput} className="RegInput" type="password"  name="password"    />
                        </div>
                        <div className="ErrorText"> {error.password == "valid" ? "" : error.password}</div>
                        <div className="ErrorText"> {finalErr}</div>
                    </div>
                <div className="RegisterBtns">
                    <div  id="HR" className="Contaner">
                        <button type="submit" className="RegsBTN" >Log In</button>
                        <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                    </div>
                </div>
                </form>
                <Link to="/Login/ResetPassword">
                    <div className="ToForgitPass">
                        <Button Text="Forget Password" />
                    </div>
                </Link>
            </div> 
        </>
    )
}

export default LogInBox;