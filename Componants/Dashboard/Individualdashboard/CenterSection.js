import { useState } from "react";
import "./individual.css"
function CenterSection (props) {
    return (
        <>
            <div className="CenterSection">
                <div >{props.noraml}</div>
                <div>{props.dashp}</div>
                <div>{props.repor}</div>
                <div>{props.different}</div>
                <div>{props.enrollments}</div>
                <div>{props.myPacks}</div>
                
            </div>
        </>
    )
}

export default CenterSection;