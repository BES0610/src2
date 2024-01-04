import axios from "axios";
import { useState } from "react";

const Invite = () => {
    const [inviteNew, setInviteNew] = useState(null);
    const [invite, setInvite] = useState(null);
    function inviteUser(e) {
        e.preventDefault();
        if(inviteNew) {
            axios.get("https://api.twindix.com/invite", {params: {
                "name": e.target["name"].value,
                "email": e.target["email"].value,
                // "user_id": e.target["user_id"].value,
                "order_id": e.target["order_id"].value,
            }, headers: {
                Authorization: "Bearer " + localStorage.token
            }}).then(res => console.log(res))

        } else if(invite) {
            axios.get("https://api.twindix.com/invite", {params: {
                // "name": e.target["name"].value,
                // "email": e.target["email"].value,
                "user_id": e.target["user_id"].value,
                "order_id": e.target["order_id"].value,
            }, headers: {
                Authorization: "Bearer " + localStorage.token
            }}).then(res => console.log(res))
        }
    }
    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
                <button onClick={() => {setInvite(false); setInviteNew(true)}} className="btn btn-primary m-1">Invite New User</button>
                <button onClick={() => {setInvite(true); setInviteNew(false)}} className="btn btn-primary m-1">Invite existing User</button>
            </div>
            {inviteNew ? <form onSubmit={inviteUser} className="d-flex flex-column justify-content-center align-items-center">
                <input className="" type="text" name="name" placeholder="Name" />
                <input className="" type="email" name="email" placeholder="Email" />
                <input className="" type="number" name="order_id" placeholder="Order Id" />
                <button type="submit" className="btn btn-success">Invite User</button>
            </form> : ""}
            {invite ? <form onSubmit={inviteUser} className="d-flex flex-column justify-content-center align-items-center">
                <input className="" type="number" name="user_id" placeholder="User Id" />
                <input className="" type="number" name="order_id" placeholder="Order Id" />
                <button type="submit" className="btn btn-success">Invite User</button>
            </form> : ""}
        </div>
    )
}

export default Invite;