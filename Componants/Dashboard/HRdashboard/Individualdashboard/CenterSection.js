// import { useState } from "react";
// import Button from "../../../../FemilerCom/Button/Button";
import "./HR.css"
function CenterSection (props) {
    return (

        <>
            <div className="CenterSection">
                <div>{props.normal}</div>
                <div>{props.dashp}</div>
                <div>{props.repor}</div>
                <div>{props.packs}</div>
                <div>{props.myPacks}</div>
                <div>{props.employees}</div>
            </div>
        </>
    )
}

export default CenterSection;