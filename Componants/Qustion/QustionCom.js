import { useContext, useEffect, useState } from "react";
import "./Qustion.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import Button from "../../FemilerCom/Button/Button"
import {TestContext, appContext} from "../../App";
import LogoBlu from "../../Media/Logo/LogoBlu.png"

import axios from "axios";
import "./Qustion.css";

function QustionCom() {
    let [currentQuestion, setCurrentQuestion] = useState(0);
    let [questions, setQuestions] = useState(null);
    let [choosedBg, setChoosedBg] = useState(null);
    let [finalQuestion, setFinalQuestion] = useState(false);
    let [choosedAnswer, setChoosedAnswer] = useState(null);
    let [choosedAnswers, setChoosedAnswers] = useState({});
    let navigate = useNavigate();
//     let myAnswers = {
     
//         "111": "1.00"
//      ,
     
//         "112": "1.00"
//      ,
     
//         "113": "0.00"
//      ,
     
//         "114": "1.00"
//      ,
     
//         "115": "0.00"
//      ,
     
//         "116": "0.00"
//      ,
     
//         "117": "1.00"
//      ,
     
//         "118": "1.00"
//      ,
     
//         "119": "0.00"
//      ,
     
//         "121": "1.00"
//      ,
     
//         "122": "0.00"
//      ,
     
//         "123": "1.00"
//      ,
     
//         "124": "0.00"
//      ,
     
//         "125": "0.00"
//      ,
     
//         "126": "1.00"
//      ,
     
//         "127": "1.00"
//      ,
     
//         "128": "0.00"
//      ,
     
//         "129": "1.00"
//      ,
     
//         "131": "1.00"
//      ,
     
//         "132": "0.00"
//      ,
     
//         "133": "0.00"
//      ,
     
//         "134": "0.00"
//      ,
     
//         "135": "1.00"
//      ,
     
//         "136": "1.00"
//      ,
     
//         "137": "0.00"
//      ,
     
//         "138": "1.00"
//      ,
     
//         "139": "0.00"
//      ,
     
//         "141": "1.00"
//      ,
     
//         "142": "1.00"
//      ,
     
//         "143": "1.00"
//      ,
     
//         "144": "0.00"
//      ,
     
//         "145": "0.00"
//      ,
     
//         "146": "1.00"
//      ,
     
//         "147": "1.00"
//      ,
     
//         "148": "0.00"
//      ,
     
//         "149": "1.00"
//      ,
     
//         "211": "1.00"
//      ,
     
//         "212": "0.00"
//      ,
     
//         "213": "0.00"
//      ,
     
//         "214": "0.00"
//      ,
     
//         "215": "0.00"
//      ,
     
//         "216": "1.00"
//      ,
     
//         "217": "0.00"
//      ,
     
//         "218": "0.00"
//      ,
     
//         "219": "1.00"
//      ,
     
//         "221": "1.00"
//      ,
     
//         "222": "0.00"
//      ,
     
//         "223": "1.00"
//      ,
     
//         "224": "0.00"
//      ,
     
//         "225": "1.00"
//      ,
     
//         "226": "0.00"
//      ,
     
//         "227": "0.00"
//      ,
     
//         "228": "0.00"
//      ,
     
//         "229": "1.00"
//      ,
     
//         "231": "1.00"
//      ,
     
//         "232": "0.00"
//      ,
     
//         "233": "1.00"
//      ,
     
//         "234": "0.00"
//      ,
     
//         "235": "0.00"
//      ,
     
//         "236": "1.00"
//      ,
     
//         "237": "1.00"
//      ,
     
//         "238": "0.00"
//      ,
     
//         "239": "1.00"
//      ,
     
//         "241": "0.00"
//      ,
     
//         "242": "1.00"
//      ,
     
//         "243": "0.00"
//      ,
     
//         "244": "1.00"
//      ,
     
//         "245": "0.00"
//      ,
     
//         "246": "0.00"
//      ,
     
//         "247": "1.00"
//      ,
     
//         "248": "0.00"
//      ,
     
//         "249": "1.00"
//      ,
     
//         "311": "0.00"
//      ,
     
//         "312": "1.00"
//      ,
     
//         "313": "0.00"
//      ,
     
//         "314": "0.00"
//      ,
     
//         "315": "0.00"
//      ,
     
//         "316": "1.00"
//      ,
     
//         "317": "1.00"
//      ,
     
//         "318": "0.00"
//      ,
     
//         "319": "0.00"
//      ,
     
//         "321": "1.00"
//      ,
     
//         "322": "0.00"
//      ,
     
//         "323": "1.00"
//      ,
     
//         "324": "1.00"
//      ,
     
//         "325": "0.00"
//      ,
     
//         "326": "1.00"
//      ,
     
//         "327": "1.00"
//      ,
     
//         "328": "0.00"
//      ,
     
//         "329": "1.00"
//      ,
     
//         "331": "0.00"
//      ,
     
//         "332": "1.00"
//      ,
     
//         "333": "0.00"
//      ,
     
//         "334": "0.00"
//      ,
     
//         "335": "0.00"
//      ,
     
//         "336": "1.00"
//      ,
     
//         "337": "1.00"
//      ,
     
//         "338": "0.00"
//      ,
     
//         "339": "1.00"
//      ,
     
//         "341": "0.00"
//      ,
     
//         "342": "0.00"
//      ,
     
//         "343": "1.00"
//      ,
     
//         "344": "1.00"
//      ,
     
//         "345": "0.00"
//      ,
     
//         "346": "1.00"
//      ,
     
//         "347": "0.00"
//      ,
     
//         "348": "1.00"
     
// }
   let {examNumber} = useContext(appContext);
    function incrementQuestion(e) {
        e.preventDefault()
        if(choosedAnswers) {
            
            setChoosedAnswer(null);
            setChoosedBg(null);
            console.log(choosedAnswers)
        }
            //2                     //3
        if(currentQuestion < questions.length) {
            setCurrentQuestion(++currentQuestion);
            console.log(currentQuestion)
            if(currentQuestion == questions.length - 1) setFinalQuestion(currentQuestion);

        }
    }
    function chooseQuestion(value, code, qnum) {
        setChoosedBg(qnum);
        setChoosedAnswer(true)
        choosedAnswers[code] = value;

    }
    function submitQuestions(e) {
        e.preventDefault()
        axios.put("https://api.twindix.com/enrollments/" + examNumber.enrollmentId, {answers:choosedAnswers}, {headers: {
            Authorization: "Bearer " + localStorage.token
        }}).then(res => console.log(res))
        navigate("/indiviual")
    }
    useEffect(() => {
        axios.get("https://api.twindix.com/exams/" + examNumber.exam, {headers: {
            Authorization: "Bearer " + localStorage.token
        }}).then(res => {
         if(res.data.payload.questions) {
            setQuestions(res.data.payload.questions)
         } else {
            throw new Error('No Data Was Found');
         }
      })
    }, [])
//     let questions = [{
//         "id": 109,
//         "exam_id": "3",
//         "type": 1,
//         "indicator": "1",
//         "element": "1",
//         "code": "111",
//         "number": "1",
//         "first_statement": "تلهب حماسي الإنجازات التي يمكن أن أحققها في المستقبل ",
//         "first_statement_weight": "1.00",
//         "second_statement": "لدي قائمة مهام يومية التزم بتنفيذها",
//         "second_statement_weight": "0.00"
//     },
//     {
//         "id": 110,
//         "exam_id": "3",
//         "type": 1,
//         "indicator": "1",
//         "element": "2",
//         "code": "112",
//         "number": "2",
//         "first_statement": "أري بوضوح الطريق الواصل بين واقعي وأهدافي البعيدة",
//         "first_statement_weight": "1.00",
//         "second_statement": "عندما أشرع في العمل، لا يعيقني شيئ عن تحقيق أهدافي",
//         "second_statement_weight": "0.00"
//     },
//     {
//         "id": 111,
//         "exam_id": "3",
//         "type": 1,
//         "indicator": "1",
//         "element": "3",
//         "code": "113",
//         "number": "3",
//         "first_statement": "يقول عني الأخرين ”أني عنيد“",
//         "first_statement_weight": "0.00",
//         "second_statement": "يقول عني الأخرين ”أني أبالغ في التخطيط“",
//         "second_statement_weight": "1.00"
//     },
// ];
return (
    <form onSubmit={submitQuestions} className="flex flex-column justify-content-center align-items-center text-center">
        <div className="logo-holder">
            <img src={LogoBlu} width="300" />
        </div>
            {questions ? <div className="d-flex flex-column text-center">
        <h4>Question Number {questions ? questions[currentQuestion].number : "0"}</h4>
            <div className="questions d-flex flex-row justify-content-center text-center">
                <div onClick={() => {chooseQuestion(questions[currentQuestion].first_statement_weight, questions[currentQuestion].code, 1)}}  className={choosedBg == 1 ? "col-5 m-2 border-1 bg-success text-white card" : "col-5 m-2 border-1 bg-primary text-white card"}>{questions[currentQuestion].first_statement}</div>
                <div onClick={() => {chooseQuestion(questions[currentQuestion].second_statement_weight, questions[currentQuestion].code, 2)}} className={choosedBg == 2 ? "col-5 m-2 border-1 bg-success text-white card" : "col-5 m-2 border-1 bg-primary text-white card"}>{questions[currentQuestion].second_statement}</div>
            </div>
        </div> : ""}

            {finalQuestion ? <button className="btn btn-success" type="submit">Submit</button> : <button disabled={choosedAnswer ? false : true}  onClick={incrementQuestion} className="btn btn-primary">Next</button>}
    </form>
)
}

export default QustionCom