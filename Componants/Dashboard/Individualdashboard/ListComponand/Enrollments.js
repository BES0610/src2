import axios from "axios";
import { useState, useEffect, useContext } from "react"
import { appContext } from "../../../../App";
import { useNavigate } from "react-router";
const Enrollments = () => {
    const [enroll, setEnroll] = useState();
    const [links, setLinks] = useState();
    const [loader, setLoader] = useState();
    const [orderedExam, setOrderedExam] = useState();
    const [alertMsg, setAlertMsg] = useState({code: false, msg: "", classes: ""});
    const [toggleType, setToggleType] = useState(true);
    const {setExamNumber, examNumber, userData} = useContext(appContext);
    const [showRepo, setShowRepo] = useState("");
    let navigate = new useNavigate();
    
    useEffect(() => {
        if(!enroll) {
          axios.get("https://api.twindix.com/enrollments", {headers: {Authorization: "Bearer " + localStorage.token}}).then(res => {
          setEnroll(res.data.payload.data);
          console.log(res)
          setLinks(res.data.payload.links)
        })
        }

    }, [enroll, ])

    function requestData(url) {
        setLoader(true)
        axios.get(url, {headers: {Authorization: "Bearer " + localStorage.token}}).then(res => {
          setEnroll(res.data.payload.data);
          setLinks(res.data.payload.links)
          let response = res.data.payload.data;
          setLoader(false)
      
        })
      }
      function sortType(e) {
        let myUsers;
        if(toggleType)  {
          myUsers = enroll.sort((a, b) => a.type - b.type);
          setEnroll(myUsers);
            setToggleType(!toggleType)
        } else {
          myUsers = enroll.sort((a, b) => b.type - a.type);
          setEnroll(myUsers);
            setToggleType(!toggleType)
      
        }
      }


    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className={loader ? "loader" : "d-none"}><span className="spinner-border"></span></div>
          <div className={alertMsg.msg ? "d-block position-fixed top-0" : "d-none"}>
            <div className={alertMsg.classes}>{alertMsg.msg}  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>
          </div>
  <nav aria-label="Page navigation example " style={{margin: "auto"}}>
    <ul className="pagination">
      {links ? links.map(link => {
        return (
          <li className="page-item"><a style={{cursor: "pointer"}} className="page-link" onClick={() =>requestData(link.url)} dangerouslySetInnerHTML={{__html: link.label}}/></li>
        )
      }) :""}
  
    </ul>
  </nav>
          <table className="table">
    <thead>
      
      <tr>
        <th style={{cursor: "pointer"}} className="table-header" onClick={() => requestData("https://api.twindix.com/dashboard/enrollments")} scope="col">id</th>
        <th style={{cursor: "pointer"}} className="table-header" onClick={() => requestData("https://api.twindix.com/dashboard/enrollments?sort=name")} scope="col">Code</th>
        <th style={{cursor: "pointer"}} className="table-header" onClick={() => requestData("https://api.twindix.com/dashboard/enrollments?sort=email")} scope="col">Finished</th>
        <th style={{cursor: "pointer"}} className="table-header"  scope="col">Exam Id</th>
        <th style={{cursor: "pointer"}} className="table-header"  scope="col">Action</th>
  
      </tr>
    </thead>
    <tbody>
    {enroll ? enroll.map(enro => {
       return( <tr key={enro.id}>
        <th scope="row">{enro.id}</th>
        <td>{enro.code}</td>
        <td>{enro.finished == 1 ? <span className="text-success">finished</span>: <span className="text-danger">not Finished</span>}</td>
        <td>{enro.exam_id}</td>
        <td>{enro.finished == 1 ? "" : <button className="btn btn-primary" onClick={() => {setExamNumber({enrollmentId:enro.id, exam:enro.exam_id}); navigate("/qustion")}}>Solve Exam</button>} {userData.managed_by == null && enro.finished == 1 ? <a href={"/reportPage?enro_id=" + enro.id + "&exam_id=" + enro.exam_id}  className="btn btn-warning">Show Report</a> : ""}</td>
      </tr>)
    })  : "loading"}
    </tbody>
  </table>
    </div>
      )
}

export default Enrollments;