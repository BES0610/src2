

import "./Admin.css"
function CenterSection (props) {

    return (
        <>
            <div className="CenterSection">
                <div>{props.normal}</div>
                <div>{props.dashboard}</div>
                <div>{props.Rebort}</div>
                <div>{props.AddTestd}</div>
                <div>{props.EditOldReport}</div>
                <div>{props.showUsers}</div>
                <div>{props.ShowPacks}</div>
                <div>{props.AddPacks}</div>
                <div>{props.showExams}</div>
                <div>{props.showEmployees}</div>
            </div>
        </>
    )
}

export default CenterSection;