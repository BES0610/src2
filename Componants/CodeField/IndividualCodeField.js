import { Link } from "react-router-dom";
import Button from "../../FemilerCom/Button/Button";
import "./CodeField.css"
import CodeVildation from "./CodeVildation";
import { useEffect, useState } from "react";

const IndividualCodeField = (props) => {
    let [error, seterror] = useState([])
    let [vlidation, setvlidation] = useState ({
        email: ' ',
        password: ' ',

    });
    let vlidationinput = (e) => {
        setvlidation(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    let VildationSupmitFun = (e) => {
        e.preventDefault();
        seterror(CodeVildation(vlidation))
    }

    return (
        <div className="CodeField">
                <div className="text-center">
                    <h4>Exam Title: {props.examName}</h4>
                    <h4>Exam Price: <span className="text-success">{props.examPrice}</span></h4>
                    <h4>Exam Code: <span className="text-danger">{props.enrollmentCode}</span></h4>
                </div>
                <div className="CodeFieldText">
                    <h1 className="H1tex">Code</h1>
                </div>
                <form className="SupmitForm" onSubmit={VildationSupmitFun}>
                    <div className="InptCont">
                        <div className="ImgAndTilte">
                            <div className="title">Code</div>
                            <input onChange={vlidationinput} className="RegInput"  name="username"    />
                        </div>
                        <div  className="ErrorText">{error.username && <span>{error.username} </span>}</div>
                    </div>
                <div className="CodeFieldBtns">
                    <div  id="HR" className="Contaner">
                        <Link to={"/Qustion"}><button type="submit" className="CodeFieldBTN" >Go To Test</button></Link> 
                        <img className="Arrow" src="https://cdn-icons-png.flaticon.com/512/271/271226.png" alt="Icon" /> 
                    </div>
                </div>
                </form>
            </div>
    )
}

export default IndividualCodeField;