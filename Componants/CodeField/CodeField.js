import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import Header from "../../FemilerCom/Header/Header";
import IndividualCodeField from "./IndividualCodeField";
import HrCodeField from "./HrCodeField";

function CodeField () {

let [errMsg, setErrMsg] = useState("");
let [name, setName] = useState("");
let [price, setPrice] = useState("");
let [code, setCode] = useState("");
let [examId, setExamId] = useState("");
// let [token, setToken] = useState();
    // fetch('http://assessments.twindix.com/auth/login')
    //         .then(res=>res.json())
    //         .then(json=> {
    //             console.log(json)
    //             setvlidation(json)
    //         })
    
    let navigate = useNavigate()


    // useEffect(() => {
    //     if (error.email === '' && error.password === '') {
    //     axios
    //         .post('http://assessments.twindix.com/auth/login', vlidation)
    //         .then((res) => {
    //         console.log(res);
    //         if (res.data === "Success") {
    //             navigate("/")
    //         }else {
    //             alert("No Record Existed")
    //         }
    //           // Additional logic after successful API request
    //         })
    //         .catch((err) => console.log(err));
    //     }
    //   }, [error]); // Run this effect whenever the 'error' state changes
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get("token");
        
    useEffect(() => {
        if(token) {
            axios.post("https://api.twindix.com/payment/verify", {transaction_id: token}, {headers: {
                Authorization: "Bearer " + localStorage.token
            }}).then(res => {
                if(res.data.code == 200) {
                    setErrMsg(res.response.data.message);
                }
            }).catch(err => {
                setErrMsg(err.response.data.message)
            })
    }
    }, [])

    return (
        <>
        <Header />
           {errMsg ? <div class="alert alert-warning alert-dismissible fade show position-absolute top-0" role="alert">
{errMsg}

</div> : ""}

            {localStorage.userType && token ? <IndividualCodeField examName="Test" enrollmentCode="sdfdsfsdfds" examPrice="100" /> : <HrCodeField packageName="" packagePrice="" examId=""  />} 
        </>
    )
}

export default CodeField;