import { Link } from "react-router-dom"
import "./ReportSec.css"
import Button from "../../../../../../FemilerCom/Button/Button"

import { useEffect, useState } from "react"
import axios from "axios"
function ReportSec () {
    let [enrollments, setEnrollments] = new useState();
    const [links, setLinks] = useState();
    const [loader, setLoader] = useState();
    const [alertMsg, setAlertMsg] = useState({code: false, msg: "", classes: ""});
    const [toggleType, setToggleType] = useState(true);

    function requestData(url) {
        setLoader(true)
        axios.get(url, {headers: {Authorization: "Bearer " + localStorage.token}}).then(res => {
          setEnrollments(res.data.payload.data);
          setLinks(res.data.payload.links)
          let response = res.data.payload.data;
          setLoader(false)
        })
      }
      function sortType(e) {
        let myenrollments;
        if(toggleType)  {
          myenrollments = enrollments.sort((a, b) => a.type - b.type);
          setEnrollments(myenrollments);
            setToggleType(!toggleType)
        } else {
          myenrollments = enrollments.sort((a, b) => b.type - a.type);
          setEnrollments(myenrollments);
            setToggleType(!toggleType)
      
        }
      }
      function dropUser(id) {
        axios.delete("https://api.twindix.com/enrollments/" + id, {headers: {Authorization: "Bearer " + localStorage.token}}).then((res) => {
          console.log(res)
          if(res.status) {
            setAlertMsg({deleted: true,msg: res.data.message, classes: "alert alert-success alert-dismissible fade show"})
          } else {
            setAlertMsg({deleted: false,msg: "proplem occured", classes:"alert alert-danger alert-dismissible fade show"})
          }
          axios.get("https://api.twindix.com/enrollments/", {headers: {Authorization: "Bearer " + localStorage.token}}).then(res => {
            setEnrollments(res.data.payload.data);
            setLinks(res.data.payload.links)
          })
        })
        
      }
      useEffect(() => {
        if(!enrollments) {
          axios.get("https://api.twindix.com/enrollments", {headers: {Authorization: "Bearer " + localStorage.token}}).then(res => {
          setEnrollments(res.data.payload.data);
    
          setLinks(res.data.payload.links)
        })
        console.log(enrollments)

        }
        console.log(enrollments)
    
    }, [enrollments, ])
    return (
        <>
            {/* <div className="SortBtn">
                <Button Text="Sort" />
            </div>
            <div className="ContanerHrDahsh">
            <div className="Titls">
                <div >Logo</div>
                <div>Company</div>
                <div>Type</div>
                <div>Name</div>
                <div>Postion</div>
                <div>Data</div>
                <div>Report</div>
            </div>
            <div className="Detils">
                <div className="ImgeCom"></div>
                <div>HTML Mechanice</div>
                <div>HR</div>
                <div>Tomy</div>
                <div>Sales</div>
                <div>22/7/2022</div>
                <Link>
                    <div className="ViweBtn"><Button Text="Viwe Report" /></div>
                </Link>
            </div>
            </div> */}
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
      <th style={{cursor: "pointer"}} className="table-header"  scope="col">Order Id</th>
      <th style={{cursor: "pointer"}} className="table-header" onClick={sortType} scope="col">Type</th>
      <th style={{cursor: "pointer"}} className="table-header" onClick={sortType} scope="col">Action</th>
      {/* <th style={{cursor: "pointer"}} className="table-header"  scope="col">Action</th> */}

    </tr>
  </thead>
  <tbody>
  {enrollments ? enrollments.map(user => {
     return( <tr key={user.id}>
      <th scope="row">{user.id}</th>
      <td>{user.code}</td>
      <td>{user.finished == 1 ? <span className="text-success">Finished</span> : <span className="text-danger">Not Finished Yet</span>}</td>
      <td>{user.order_id}</td>
      <td>{user.exam_id}</td>
      <td>{user.finished ? <a href={"/reportPage?enro_id=" + user.id + "&exam_id=" + user.exam_id}  className="btn btn-warning">Show Report</a>: ""}</td>

      {/* <td><button className="btn btn-danger" onClick={() => dropUser(user.id)}>Delete User</button></td> */}
    </tr>)
  })  : "There is no enrollments"}
  </tbody>
</table>
  </div>
        </>
    )
}

export default ReportSec