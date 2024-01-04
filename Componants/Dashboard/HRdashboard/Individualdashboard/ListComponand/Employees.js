import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Employees = () => {
  const [users, setUsers] = useState();
  const [links, setLinks] = useState();
  const [loader, setLoader] = useState();
  const [alertMsg, setAlertMsg] = useState({code: false, msg: "", classes: ""});
  const [toggleType, setToggleType] = useState(true);
  // const [link, setLink] = useState("https://api.twindix.com/dashboard/users");
  useEffect(() => {
    if(!users) {
      axios.get("https://api.twindix.com/employees", {headers: {Authorization: "Bearer " + localStorage.token}}).then(res => {
      setUsers(res.data.payload.data);

      setLinks(res.data.payload.links)
    })
    }

}, [users])
function requestData(url) {
  setLoader(true)
  axios.get(url, {headers: {Authorization: "Bearer " + localStorage.token}}).then(res => {
    setUsers(res.data.payload.data);
    setLinks(res.data.payload.links)
    let response = res.data.payload.data;
    setLoader(false)

  })
}
function sortType(e) {
  let myUsers;
  if(toggleType)  {
    myUsers = users.sort((a, b) => a.type - b.type);
    setUsers(myUsers);
      setToggleType(!toggleType)
  } else {
    myUsers = users.sort((a, b) => b.type - a.type);
    setUsers(myUsers);
      setToggleType(!toggleType)

  }
}
function dropUser(id) {
  axios.delete("https://api.twindix.com/employees" + id, {headers: {Authorization: "Bearer " + localStorage.token}}).then((res) => {
    console.log(res)
    if(res.status) {
      setAlertMsg({deleted: true,msg: res.data.message, classes: "alert alert-success alert-dismissible fade show"})
    } else {
      setAlertMsg({deleted: false,msg: "proplem occured", classes:"alert alert-danger alert-dismissible fade show"})
    }
    axios.get("https://api.twindix.com/employees", {headers: {Authorization: "Bearer " + localStorage.token}}).then(res => {
      setUsers(res.data.payload.data);
      setLinks(res.data.payload.links)
    })
  })
  
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
<nav aria-label="Page navigation example " className="flex flex-row " style={{margin: "auto"}}>
  <ul className="pagination">
    {links ? links.map(link => {
      return (
        <li className="page-item"><a style={{cursor: "pointer"}} className="page-link" onClick={() =>requestData(link.url)} dangerouslySetInnerHTML={{__html: link.label}}/></li>
      )
    }) :""}

  </ul>
    <Link to="/addEmployee" className="btn btn-primary">+ Add Employee</Link>
</nav>
        <table className="table">
  <thead>
      <tr>
        <th style={{cursor: "pointer"}} className="table-header" onClick={() => requestData("https://api.twindix.com/employees")} scope="col">id</th>
        <th style={{cursor: "pointer"}} className="table-header" onClick={() => requestData("https://api.twindix.com/employees?sort=name")} scope="col">Name</th>
        <th style={{cursor: "pointer"}} className="table-header" onClick={() => requestData("https://api.twindix.com/employees?sort=name")} scope="col">Email</th>
        <th style={{cursor: "pointer"}} className="table-header" onClick={() => requestData("https://api.twindix.com/employees?sort=name")} scope="col">Job</th>
        <th style={{cursor: "pointer"}} className="table-header"  scope="col">Action</th>
      </tr>
  </thead>
  <tbody>
  {users ? users.map(user => {
     return( <tr key={user.id}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.job}</td>
      <td><button className="btn btn-danger" onClick={() => dropUser(user.id)}>Delete Employee</button></td>
    </tr>)
  })  : "There is no Employees"}
  </tbody>
</table>
  </div>
    )
}

export default Employees;