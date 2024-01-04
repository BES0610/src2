import Button from "../../FemilerCom/Button/Button"
import "./Payment.css"
import  Logowhit from "../../FemilerCom/Logo/Logowhit"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import axios from "axios"
import { redirect, useNavigate } from "react-router"
function PaymentCom () {
    const [exams, setExams] = useState(null);
    const [purchaseExam, setPurchaseExam] = useState(null);
    const [selectedExam, setselectedExam] = useState(0);
    function buyExam(examId) {

        axios.post("https://api.twindix.com/payment/exam", {exam_id : examId} ,{headers: {
            Authorization: "Bearer " + localStorage.token
        }}).then(res =>{
            setPurchaseExam("redirecting to paypal to complete payment in 5 seconds")
            setTimeout(()=>{
                window.location.replace(res.data.payload.redirect);
            }, 5000)
        })

    }
    useEffect(() => {
        if(exams == null) {
            axios.get("https://api.twindix.com/exams",{headers:{
                Authorization: "Bearer " + localStorage.token
            }, params:{
            }}).then(res => {
                console.log(res.data.payload.data);
                setExams(res.data.payload.data);
            })

        }
    }, [exams])
    return (
        <>
                {purchaseExam && <div className="alert alert-success position-absolute top-0 m-3">{purchaseExam}</div>}

        <div className="PaymentPage">
            <div className="PayLeftSection">
            <div className="Log">
            <Logowhit />
            </div>
            <div className="CodeCountPy">
                    <h3 className="H1Pay">What Is The Test You Want:</h3>
                    <div className="TilteTest">
                        {/* <div className="Box"><span className="Text">TWINDIX Individual Assessment</span></div> */}
                        {/* <select id="selected" onChange={(e) => {setselectedExam(exams[e.target.value - 1]); console.log(exams[0])}} name="selectedExam">
                            <option>Please Select a Test</option>
                            {exams ? exams.map((exam) => (
                                <option key={exam.id} value={exam.id}>{exam.title}</option>
                            )) : ""}
                        </select> */}

                    </div>
                </div>
                <div className="FinlePay">

                    <div className="TotalTxt">Total:</div>
                    <div className="TotalNum">{selectedExam  ? selectedExam.price : 0}</div>
                </div>
            </div>
            <div className="PayRightSection d-flex flex-column justify-content-center align-items-center">
                <div className="PaymentContaner">
                <div className="exams d-flex flex-column flex-wrap ">
                            {exams ? exams.map(exam => {
                               return (<div className="exam border-1 p-1 border-black">
                                    <h2>{exam.title}</h2>
                                    <h4 className="text-success">Price: {exam.price}</h4>
                                    <button className="btn btn-primary" onClick={() => buyExam(exam.id)}>Buy Now</button>
                                </div>)
                            }) : ""}
                        </div>
                {/* <div className="PaymentMethod">
                <h1 className="H1Pay text-dark text-center">Payment Method is <span className="text-primary">Paypal</span></h1>
                <h1 className="H1Pay text-dark text-center">Test Name: {selectedExam ? selectedExam.title : ""}</h1>
                <h1 className="H1Pay text-dark text-center">Payment Amount: <span className="text-success">{selectedExam ? selectedExam.price : 0}</span></h1>
                </div> */}

                    {/* <Button onClick={buyExam} Text="Pay" /> */}
                    {/* <button onClick={buyExam} className="btn btn-primary d-block m-auto">Pay Now</button> */}

                </div>
            </div>
        </div>
        </>
    )
}

export default PaymentCom