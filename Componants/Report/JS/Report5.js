import LogoBlu from "../../../FemilerCom/Logo/LogoBlu"
import Logowhit from "../../../FemilerCom/Logo/Logowhit"
import ScoCover from '../../../Media/Twindexreport/ScoCover.png'
import ManySquareGreen from '../../../Media/Twindexreport/ManySquareGreen.png'
import ManySquareRed from '../../../Media/Twindexreport/ManySquareRed.png'
import OneGraph from '../../../Media/Twindexreport/OneGraph.png'
import { useContext } from "react"
import { repoCon } from "../ReportCom"

function Report5 ()  {
    let repoConn = useContext(repoCon)
    return (
        <>
             {/* <div id="Fifth">
            <div className='ManyBox-7'>
                <img className='ImgReport' src={ManySquareRed} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[894]["Ar content"]}</div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Red-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[895]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[897]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[898]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[899]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["331"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[903]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[906]["Ar content"]}</div>}
                        {repoConn.answers["231"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[904]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[907]["Ar content"]}</div>}
                        {repoConn.answers["131"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[905]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[908]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[900]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[901]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[902]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[896]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["131"] === 1 && repoConn.answers["231"] === 1 && repoConn.answers["331"] === 1 ?
                                repoConn.referencess && repoConn.referencess[909]["Ar content"] : ""}
                                {repoConn.answers["131"] === 1 && repoConn.answers["231"] === 1 && repoConn.answers["331"] === 0 ?
                                repoConn.referencess && repoConn.referencess[910]["Ar content"] : ""}
                                {repoConn.answers["131"] === 1 && repoConn.answers["231"] === 0 && repoConn.answers["331"] === 1 ?
                                repoConn.referencess && repoConn.referencess[911]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["231"] === 0 && repoConn.answers["331"] === 0 ?
                                repoConn.referencess && repoConn.referencess[912]["Ar content"] : ""}
                                {repoConn.answers["131"] === 0 && repoConn.answers["231"] === 1 && repoConn.answers["331"] === 1 ?
                                repoConn.referencess && repoConn.referencess[913]["Ar content"] : ""}
                                {repoConn.answers["131"] === 0 && repoConn.answers["231"] === 1 && repoConn.answers["331"] === 0 ?
                                repoConn.referencess && repoConn.referencess[914]["Ar content"] : ""}
                                {repoConn.answers["131"] === 1 && repoConn.answers["231"] === 0 && repoConn.answers["331"] === 1 ?
                                repoConn.referencess && repoConn.referencess[915]["Ar content"] : ""}
                                {repoConn.answers["131"] === 0 && repoConn.answers["231"] === 0 && repoConn.answers["331"] === 0 ?
                                repoConn.referencess && repoConn.referencess[916]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Red-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[917]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[919]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[920]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[921]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["332"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[925]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[928]["Ar content"]}</div>}
                        {repoConn.answers["232"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[926]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[929]["Ar content"]}</div>}
                        {repoConn.answers["132"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[927]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[930]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[922]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[923]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[924]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[918]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["132"] === 1 && repoConn.answers["232"] === 1 && repoConn.answers["332"] === 1 ?
                                repoConn.referencess && repoConn.referencess[931]["Ar content"] : ""}
                                {repoConn.answers["132"] === 1 && repoConn.answers["232"] === 1 && repoConn.answers["332"] === 0 ?
                                repoConn.referencess && repoConn.referencess[931]["Ar content"] : ""}
                                {repoConn.answers["132"] === 1 && repoConn.answers["232"] === 0 && repoConn.answers["332"] === 1 ?
                                repoConn.referencess && repoConn.referencess[932]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["232"] === 0 && repoConn.answers["332"] === 0 ?
                                repoConn.referencess && repoConn.referencess[933]["Ar content"] : ""}
                                {repoConn.answers["132"] === 0 && repoConn.answers["232"] === 1 && repoConn.answers["332"] === 1 ?
                                repoConn.referencess && repoConn.referencess[934]["Ar content"] : ""}
                                {repoConn.answers["132"] === 0 && repoConn.answers["232"] === 1 && repoConn.answers["332"] === 0 ?
                                repoConn.referencess && repoConn.referencess[935]["Ar content"] : ""}
                                {repoConn.answers["132"] === 1 && repoConn.answers["232"] === 0 && repoConn.answers["332"] === 1 ?
                                repoConn.referencess && repoConn.referencess[936]["Ar content"] : ""}
                                {repoConn.answers["132"] === 0 && repoConn.answers["232"] === 0 && repoConn.answers["332"] === 0 ?
                                repoConn.referencess && repoConn.referencess[937]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Red-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[939]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[941]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[942]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[943]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["333"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[947]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[950]["Ar content"]}</div>}
                        {repoConn.answers["233"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[948]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[951]["Ar content"]}</div>}
                        {repoConn.answers["133"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[949]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[952]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[944]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[945]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[946]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[940]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["133"] === 1 && repoConn.answers["233"] === 1 && repoConn.answers["333"] === 1 ?
                                repoConn.referencess && repoConn.referencess[953]["Ar content"] : ""}
                                {repoConn.answers["133"] === 1 && repoConn.answers["233"] === 1 && repoConn.answers["333"] === 0 ?
                                repoConn.referencess && repoConn.referencess[954]["Ar content"] : ""}
                                {repoConn.answers["133"] === 1 && repoConn.answers["233"] === 0 && repoConn.answers["333"] === 1 ?
                                repoConn.referencess && repoConn.referencess[955]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["233"] === 0 && repoConn.answers["333"] === 0 ?
                                repoConn.referencess && repoConn.referencess[956]["Ar content"] : ""}
                                {repoConn.answers["133"] === 0 && repoConn.answers["233"] === 1 && repoConn.answers["333"] === 1 ?
                                repoConn.referencess && repoConn.referencess[957]["Ar content"] : ""}
                                {repoConn.answers["133"] === 0 && repoConn.answers["233"] === 1 && repoConn.answers["333"] === 0 ?
                                repoConn.referencess && repoConn.referencess[958]["Ar content"] : ""}
                                {repoConn.answers["133"] === 1 && repoConn.answers["233"] === 0 && repoConn.answers["333"] === 1 ?
                                repoConn.referencess && repoConn.referencess[959]["Ar content"] : ""}
                                {repoConn.answers["133"] === 0 && repoConn.answers["233"] === 0 && repoConn.answers["333"] === 0 ?
                                repoConn.referencess && repoConn.referencess[960]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ManyBox-8'>
                <img className='ImgReport' src={ManySquareRed} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Red-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[961]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[963]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[964]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[965]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["334"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[969]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[972]["Ar content"]}</div>}
                        {repoConn.answers["234"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[970]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[973]["Ar content"]}</div>}
                        {repoConn.answers["134"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[971]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[974]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[966]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[967]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[968]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[962]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["134"] === 1 && repoConn.answers["234"] === 1 && repoConn.answers["334"] === 1 ?
                                repoConn.referencess && repoConn.referencess[975]["Ar content"] : ""}
                                {repoConn.answers["134"] === 1 && repoConn.answers["234"] === 1 && repoConn.answers["334"] === 0 ?
                                repoConn.referencess && repoConn.referencess[976]["Ar content"] : ""}
                                {repoConn.answers["134"] === 1 && repoConn.answers["234"] === 0 && repoConn.answers["334"] === 1 ?
                                repoConn.referencess && repoConn.referencess[977]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["234"] === 0 && repoConn.answers["334"] === 0 ?
                                repoConn.referencess && repoConn.referencess[978]["Ar content"] : ""}
                                {repoConn.answers["134"] === 0 && repoConn.answers["234"] === 1 && repoConn.answers["334"] === 1 ?
                                repoConn.referencess && repoConn.referencess[979]["Ar content"] : ""}
                                {repoConn.answers["134"] === 0 && repoConn.answers["234"] === 1 && repoConn.answers["334"] === 0 ?
                                repoConn.referencess && repoConn.referencess[980]["Ar content"] : ""}
                                {repoConn.answers["134"] === 1 && repoConn.answers["234"] === 0 && repoConn.answers["334"] === 1 ?
                                repoConn.referencess && repoConn.referencess[981]["Ar content"] : ""}
                                {repoConn.answers["134"] === 0 && repoConn.answers["234"] === 0 && repoConn.answers["334"] === 0 ?
                                repoConn.referencess && repoConn.referencess[982]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Red-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[983]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[985]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[986]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[987]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["335"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[991]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[994]["Ar content"]}</div>}
                        {repoConn.answers["235"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[992]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[995]["Ar content"]}</div>}
                        {repoConn.answers["135"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[993]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[996]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[988]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[989]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[990]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[984]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["135"] === 1 && repoConn.answers["235"] === 1 && repoConn.answers["335"] === 1 ?
                                repoConn.referencess && repoConn.referencess[996]["Ar content"] : ""}
                                {repoConn.answers["135"] === 1 && repoConn.answers["235"] === 1 && repoConn.answers["335"] === 0 ?
                                repoConn.referencess && repoConn.referencess[997]["Ar content"] : ""}
                                {repoConn.answers["135"] === 1 && repoConn.answers["235"] === 0 && repoConn.answers["335"] === 1 ?
                                repoConn.referencess && repoConn.referencess[998]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["235"] === 0 && repoConn.answers["335"] === 0 ?
                                repoConn.referencess && repoConn.referencess[999]["Ar content"] : ""}
                                {repoConn.answers["135"] === 0 && repoConn.answers["235"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1000]["Ar content"] : ""}
                                {repoConn.answers["135"] === 0 && repoConn.answers["235"] === 1 && repoConn.answers["335"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1001]["Ar content"] : ""}
                                {repoConn.answers["135"] === 1 && repoConn.answers["235"] === 0 && repoConn.answers["335"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1002]["Ar content"] : ""}
                                {repoConn.answers["135"] === 0 && repoConn.answers["235"] === 0 && repoConn.answers["335"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1003]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Red-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1005]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1007]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1008]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1009]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["336"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1013]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1016]["Ar content"]}</div>}
                        {repoConn.answers["236"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1014]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1017]["Ar content"]}</div>}
                        {repoConn.answers["136"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1015]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1018]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1010]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1011]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1012]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1006]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["136"] === 1 && repoConn.answers["236"] === 1 && repoConn.answers["336"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1019]["Ar content"] : ""}
                                {repoConn.answers["136"] === 1 && repoConn.answers["236"] === 1 && repoConn.answers["336"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1020]["Ar content"] : ""}
                                {repoConn.answers["136"] === 1 && repoConn.answers["236"] === 0 && repoConn.answers["336"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1021]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["236"] === 0 && repoConn.answers["336"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1022]["Ar content"] : ""}
                                {repoConn.answers["136"] === 0 && repoConn.answers["236"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1023]["Ar content"] : ""}
                                {repoConn.answers["136"] === 0 && repoConn.answers["236"] === 1 && repoConn.answers["336"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1024]["Ar content"] : ""}
                                {repoConn.answers["136"] === 1 && repoConn.answers["236"] === 0 && repoConn.answers["336"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1025]["Ar content"] : ""}
                                {repoConn.answers["136"] === 0 && repoConn.answers["236"] === 0 && repoConn.answers["336"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1026]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ManyBox-9'>
                <img className='ImgReport' src={ManySquareRed} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Red-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1027]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1029]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1030]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1031]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["337"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1035]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1038]["Ar content"]}</div>}
                        {repoConn.answers["237"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1036]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1039]["Ar content"]}</div>}
                        {repoConn.answers["137"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1037]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1040]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1032]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1033]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1034]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1028]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["137"] === 1 && repoConn.answers["237"] === 1 && repoConn.answers["337"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1041]["Ar content"] : ""}
                                {repoConn.answers["137"] === 1 && repoConn.answers["237"] === 1 && repoConn.answers["337"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1042]["Ar content"] : ""}
                                {repoConn.answers["137"] === 1 && repoConn.answers["237"] === 0 && repoConn.answers["337"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1043]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["237"] === 0 && repoConn.answers["337"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1044]["Ar content"] : ""}
                                {repoConn.answers["137"] === 0 && repoConn.answers["237"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1045]["Ar content"] : ""}
                                {repoConn.answers["137"] === 0 && repoConn.answers["237"] === 1 && repoConn.answers["337"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1046]["Ar content"] : ""}
                                {repoConn.answers["137"] === 1 && repoConn.answers["237"] === 0 && repoConn.answers["337"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1047]["Ar content"] : ""}
                                {repoConn.answers["137"] === 0 && repoConn.answers["237"] === 0 && repoConn.answers["337"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1048]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Red-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1049]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1051]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1052]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1053]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["338"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1057]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1060]["Ar content"]}</div>}
                        {repoConn.answers["238"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1058]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1061]["Ar content"]}</div>}
                        {repoConn.answers["138"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1059]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1062]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1054]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1055]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1056]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1050]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["138"] === 1 && repoConn.answers["238"] === 1 && repoConn.answers["338"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1063]["Ar content"] : ""}
                                {repoConn.answers["138"] === 1 && repoConn.answers["238"] === 1 && repoConn.answers["338"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1064]["Ar content"] : ""}
                                {repoConn.answers["138"] === 1 && repoConn.answers["238"] === 0 && repoConn.answers["338"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1065]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["238"] === 0 && repoConn.answers["338"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1066]["Ar content"] : ""}
                                {repoConn.answers["138"] === 0 && repoConn.answers["238"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1067]["Ar content"] : ""}
                                {repoConn.answers["138"] === 0 && repoConn.answers["238"] === 1 && repoConn.answers["338"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1068]["Ar content"] : ""}
                                {repoConn.answers["138"] === 1 && repoConn.answers["238"] === 0 && repoConn.answers["338"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1069]["Ar content"] : ""}
                                {repoConn.answers["138"] === 0 && repoConn.answers["238"] === 0 && repoConn.answers["338"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1070]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Red-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1071]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1073]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1074]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1075]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["339"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1079]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1082]["Ar content"]}</div>}
                        {repoConn.answers["239"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1080]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1083]["Ar content"]}</div>}
                        {repoConn.answers["139"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Red">{repoConn.referencess && repoConn.referencess[1081]["Ar content"]}</div> : <div className="ManyBoxsBottom  ManyBoxBottomCol-Red">{repoConn.referencess && repoConn.referencess[1084]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1076]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1077]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1078]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1072]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["139"] === 1 && repoConn.answers["239"] === 1 && repoConn.answers["339"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1085]["Ar content"] : ""}
                                {repoConn.answers["139"] === 1 && repoConn.answers["239"] === 1 && repoConn.answers["339"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1086]["Ar content"] : ""}
                                {repoConn.answers["139"] === 1 && repoConn.answers["239"] === 0 && repoConn.answers["339"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1087]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["239"] === 0 && repoConn.answers["339"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1088]["Ar content"] : ""}
                                {repoConn.answers["139"] === 0 && repoConn.answers["239"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1089]["Ar content"] : ""}
                                {repoConn.answers["139"] === 0 && repoConn.answers["239"] === 1 && repoConn.answers["339"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1090]["Ar content"] : ""}
                                {repoConn.answers["139"] === 1 && repoConn.answers["239"] === 0 && repoConn.answers["339"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1091]["Ar content"] : ""}
                                {repoConn.answers["139"] === 0 && repoConn.answers["239"] === 0 && repoConn.answers["339"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1092]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='BigOneGraph-7'>
                <img className='ImgReport' src={OneGraph} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                        <div>{repoConn.referencess && repoConn.referencess[1093]["Ar content"]}</div>
                    </div>
                </div>
                <div className="TopTitle">
                <span>{repoConn.referencess && repoConn.referencess[1094]["Ar content"]}</span>
                </div>
                <div className="Graph-1 ">
                    <div className="TopBox">
                        <div></div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[1096]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[1097]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[1098]["Ar content"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.references["R364"]}</span>
                            <span>{repoConn.references["R363"]}</span>
                            <span>{repoConn.references["R362"]}</span>
                        </div>
                    </div>
                    <div className="Graph-Top-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R367"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R366"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R365"]} />
                    </div>
                    <div className="Graph-Bottom-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R373"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R372"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R371"]} />
                    </div>
                    <div className="BottomBox">
                        <div>
                            <span>{repoConn.references["R370"]}</span>
                            <span>{repoConn.references["R369"]}</span>
                            <span>{repoConn.references["R368"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[1099]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[1100]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[1101]["Ar content"]}</span>
                        </div>
                    </div>
                </div>
                <div className="BottomTitle">
                    <span>{repoConn.referencess && repoConn.referencess[1095]["Ar content"]}</span>
                </div>
            </div>
            <div className='ManyBox-10'>
                <img className='ImgReport' src={ManySquareGreen} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                        <div>{repoConn.referencess && repoConn.referencess[1102]["Ar content"]}</div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Green-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1103]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1105]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1106]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1107]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["341"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1111]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1114]["Ar content"]}</div>}
                        {repoConn.answers["241"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1112]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1115]["Ar content"]}</div>}
                        {repoConn.answers["141"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1113]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1116]["Ar content"]}</div>}

                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1108]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1109]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1110]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1104]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["141"] === 1 && repoConn.answers["241"] === 1 && repoConn.answers["341"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1117]["Ar content"] : ""}
                                {repoConn.answers["141"] === 1 && repoConn.answers["241"] === 1 && repoConn.answers["341"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1118]["Ar content"] : ""}
                                {repoConn.answers["141"] === 1 && repoConn.answers["241"] === 0 && repoConn.answers["341"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1119]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["241"] === 0 && repoConn.answers["341"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1120]["Ar content"] : ""}
                                {repoConn.answers["141"] === 0 && repoConn.answers["241"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1121]["Ar content"] : ""}
                                {repoConn.answers["141"] === 0 && repoConn.answers["241"] === 1 && repoConn.answers["341"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1122]["Ar content"] : ""}
                                {repoConn.answers["141"] === 1 && repoConn.answers["241"] === 0 && repoConn.answers["341"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1123]["Ar content"] : ""}
                                {repoConn.answers["141"] === 0 && repoConn.answers["241"] === 0 && repoConn.answers["341"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1124]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Green-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1125]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1127]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1128]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1129]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["342"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1033]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1136]["Ar content"]}</div>}
                        {repoConn.answers["242"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1134]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1137]["Ar content"]}</div>}
                        {repoConn.answers["142"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1135]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1138]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1130]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1131]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1132]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1126]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["142"] === 1 && repoConn.answers["242"] === 1 && repoConn.answers["342"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1141]["Ar content"] : ""}
                                {repoConn.answers["142"] === 1 && repoConn.answers["242"] === 1 && repoConn.answers["342"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1142]["Ar content"] : ""}
                                {repoConn.answers["142"] === 1 && repoConn.answers["242"] === 0 && repoConn.answers["342"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1143]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["242"] === 0 && repoConn.answers["342"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1144]["Ar content"] : ""}
                                {repoConn.answers["142"] === 0 && repoConn.answers["242"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1145]["Ar content"] : ""}
                                {repoConn.answers["142"] === 0 && repoConn.answers["242"] === 1 && repoConn.answers["342"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1146]["Ar content"] : ""}
                                {repoConn.answers["142"] === 1 && repoConn.answers["242"] === 0 && repoConn.answers["342"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1147]["Ar content"] : ""}
                                {repoConn.answers["142"] === 0 && repoConn.answers["242"] === 0 && repoConn.answers["342"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1148]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Green-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1147]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1149]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1150]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1151]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["343"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1155]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1158]["Ar content"]}</div>}
                        {repoConn.answers["243"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1156]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1159]["Ar content"]}</div>}
                        {repoConn.answers["143"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1157]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1160]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1152]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1153]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1154]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1148]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["143"] === 1 && repoConn.answers["243"] === 1 && repoConn.answers["343"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1161]["Ar content"] : ""}
                                {repoConn.answers["143"] === 1 && repoConn.answers["243"] === 1 && repoConn.answers["343"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1162]["Ar content"] : ""}
                                {repoConn.answers["143"] === 1 && repoConn.answers["243"] === 0 && repoConn.answers["343"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1163]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["243"] === 0 && repoConn.answers["343"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1164]["Ar content"] : ""}
                                {repoConn.answers["143"] === 0 && repoConn.answers["243"] === 1 && repoConn.answers["343"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1165]["Ar content"] : ""}
                                {repoConn.answers["143"] === 0 && repoConn.answers["243"] === 1 && repoConn.answers["343"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1166]["Ar content"] : ""}
                                {repoConn.answers["143"] === 1 && repoConn.answers["243"] === 0 && repoConn.answers["343"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1167]["Ar content"] : ""}
                                {repoConn.answers["143"] === 0 && repoConn.answers["243"] === 0 && repoConn.answers["343"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1168]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ManyBox-11'>
                <img className='ImgReport' src={ManySquareGreen} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Green-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1169]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1171]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1172]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1173]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["344"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1177]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1180]["Ar content"]}</div>}
                        {repoConn.answers["244"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1178]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1181]["Ar content"]}</div>}
                        {repoConn.answers["144"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1179]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1182]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1174]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1175]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1176]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1170]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["144"] === 1 && repoConn.answers["244"] === 1 && repoConn.answers["344"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1183]["Ar content"] : ""}
                                {repoConn.answers["144"] === 1 && repoConn.answers["244"] === 1 && repoConn.answers["344"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1184]["Ar content"] : ""}
                                {repoConn.answers["144"] === 1 && repoConn.answers["244"] === 0 && repoConn.answers["344"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1185]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["244"] === 0 && repoConn.answers["344"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1186]["Ar content"] : ""}
                                {repoConn.answers["144"] === 0 && repoConn.answers["244"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1187]["Ar content"] : ""}
                                {repoConn.answers["144"] === 0 && repoConn.answers["244"] === 1 && repoConn.answers["344"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1188]["Ar content"] : ""}
                                {repoConn.answers["144"] === 1 && repoConn.answers["244"] === 0 && repoConn.answers["344"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1189]["Ar content"] : ""}
                                {repoConn.answers["144"] === 0 && repoConn.answers["244"] === 0 && repoConn.answers["344"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1190]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Green-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1191]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1193]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1194]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1195]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["345"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1199]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1202]["Ar content"]}</div>}
                        {repoConn.answers["245"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1200]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1203]["Ar content"]}</div>}
                        {repoConn.answers["145"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1201]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1204]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1196]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1197]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1198]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1192]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["145"] === 1 && repoConn.answers["245"] === 1 && repoConn.answers["345"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1205]["Ar content"] : ""}
                                {repoConn.answers["145"] === 1 && repoConn.answers["245"] === 1 && repoConn.answers["345"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1206]["Ar content"] : ""}
                                {repoConn.answers["145"] === 1 && repoConn.answers["245"] === 0 && repoConn.answers["345"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1207]["Ar content"] : ""}
                                {repoConn.answers["145"] === 1 && repoConn.answers["245"] === 0 && repoConn.answers["345"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1208]["Ar content"] : ""}
                                {repoConn.answers["145"] === 0 && repoConn.answers["245"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1209]["Ar content"] : ""}
                                {repoConn.answers["145"] === 0 && repoConn.answers["245"] === 1 && repoConn.answers["345"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1210]["Ar content"] : ""}
                                {repoConn.answers["145"] === 1 && repoConn.answers["245"] === 0 && repoConn.answers["345"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1211]["Ar content"] : ""}
                                {repoConn.answers["145"] === 0 && repoConn.answers["245"] === 0 && repoConn.answers["345"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1212]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Green-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1213]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1215]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1216]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1217]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["346"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1221]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1224]["Ar content"]}</div>}
                        {repoConn.answers["246"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1222]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1225]["Ar content"]}</div>}
                        {repoConn.answers["146"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1223]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1226]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1218]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1219]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1220]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1214]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["146"] === 1 && repoConn.answers["246"] === 1 && repoConn.answers["346"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1227]["Ar content"] : ""}
                                {repoConn.answers["146"] === 1 && repoConn.answers["246"] === 1 && repoConn.answers["346"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1228]["Ar content"] : ""}
                                {repoConn.answers["146"] === 1 && repoConn.answers["246"] === 0 && repoConn.answers["346"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1229]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["246"] === 0 && repoConn.answers["346"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1230]["Ar content"] : ""}
                                {repoConn.answers["146"] === 0 && repoConn.answers["246"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1231]["Ar content"] : ""}
                                {repoConn.answers["146"] === 0 && repoConn.answers["246"] === 1 && repoConn.answers["346"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1232]["Ar content"] : ""}
                                {repoConn.answers["146"] === 1 && repoConn.answers["246"] === 0 && repoConn.answers["346"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1233]["Ar content"] : ""}
                                {repoConn.answers["146"] === 0 && repoConn.answers["246"] === 0 && repoConn.answers["346"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1234]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ManyBox-12'>
                <img className='ImgReport' src={ManySquareGreen} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Green-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1235]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1237]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1238]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1239]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">

                        {repoConn.answers["347"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1243]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1246]["Ar content"]}</div>}
                        {repoConn.answers["247"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1244]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1246]["Ar content"]}</div>}
                        {repoConn.answers["147"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1245]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1248]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1240]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1241]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1242]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1236]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["147"] === 1 && repoConn.answers["247"] === 1 && repoConn.answers["347"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1249]["Ar content"] : ""}
                                {repoConn.answers["147"] === 1 && repoConn.answers["247"] === 1 && repoConn.answers["347"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1250]["Ar content"] : ""}
                                {repoConn.answers["147"] === 1 && repoConn.answers["247"] === 0 && repoConn.answers["347"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1251]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["247"] === 0 && repoConn.answers["347"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1252]["Ar content"] : ""}
                                {repoConn.answers["147"] === 0 && repoConn.answers["247"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1253]["Ar content"] : ""}
                                {repoConn.answers["147"] === 0 && repoConn.answers["247"] === 1 && repoConn.answers["347"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1254]["Ar content"] : ""}
                                {repoConn.answers["147"] === 1 && repoConn.answers["247"] === 0 && repoConn.answers["347"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1255]["Ar content"] : ""}
                                {repoConn.answers["147"] === 0 && repoConn.answers["247"] === 0 && repoConn.answers["347"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1256]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Green-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1257]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1259]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1260]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1261]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["347"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1265]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1268]["Ar content"]}</div>}
                        {repoConn.answers["247"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1266]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1269]["Ar content"]}</div>}
                        {repoConn.answers["147"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1267]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1270]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1262]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1263]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1264]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1258]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["148"] === 1 && repoConn.answers["248"] === 1 && repoConn.answers["348"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1271]["Ar content"] : ""}
                                {repoConn.answers["148"] === 1 && repoConn.answers["248"] === 1 && repoConn.answers["348"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1272]["Ar content"] : ""}
                                {repoConn.answers["148"] === 1 && repoConn.answers["248"] === 0 && repoConn.answers["348"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1273]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["248"] === 0 && repoConn.answers["348"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1274]["Ar content"] : ""}
                                {repoConn.answers["148"] === 0 && repoConn.answers["248"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1275]["Ar content"] : ""}
                                {repoConn.answers["148"] === 0 && repoConn.answers["248"] === 1 && repoConn.answers["348"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1276]["Ar content"] : ""}
                                {repoConn.answers["148"] === 1 && repoConn.answers["248"] === 0 && repoConn.answers["348"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1277]["Ar content"] : ""}
                                {repoConn.answers["148"] === 0 && repoConn.answers["248"] === 0 && repoConn.answers["348"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1278]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Green-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[1279]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[1281]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1282]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[1283]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["348"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1287]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1290]["Ar content"]}</div>}
                        {repoConn.answers["248"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1288]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1291]["Ar content"]}</div>}
                        {repoConn.answers["148"] == 1 ? <div className="ManyBoxsTop ManyBoxTopCol-Green">{repoConn.referencess && repoConn.referencess[1289]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Green">{repoConn.referencess && repoConn.referencess[1292]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[1284]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1285]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[1286]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[1280]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["149"] === 1 && repoConn.answers["249"] === 1 && repoConn.answers["349"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1293]["Ar content"] : ""}
                                {repoConn.answers["149"] === 1 && repoConn.answers["249"] === 1 && repoConn.answers["349"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1294]["Ar content"] : ""}
                                {repoConn.answers["149"] === 1 && repoConn.answers["249"] === 0 && repoConn.answers["349"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1295]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["249"] === 0 && repoConn.answers["349"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1296]["Ar content"] : ""}
                                {repoConn.answers["149"] === 0 && repoConn.answers["249"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1297]["Ar content"] : ""}
                                {repoConn.answers["149"] === 0 && repoConn.answers["249"] === 1 && repoConn.answers["349"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1298]["Ar content"] : ""}
                                {repoConn.answers["149"] === 1 && repoConn.answers["249"] === 0 && repoConn.answers["349"] === 1 ?
                                repoConn.referencess && repoConn.referencess[1299]["Ar content"] : ""}
                                {repoConn.answers["149"] === 0 && repoConn.answers["249"] === 0 && repoConn.answers["349"] === 0 ?
                                repoConn.referencess && repoConn.referencess[1300]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='FinlePage'>
                <img className='ImgReport' src={ScoCover} alt="ReportImge" />
                <div className="FinlePageLogo">
                    <Logowhit />
                </div>
                <div>{repoConn.referencess && repoConn.referencess[1302]["Ar content"]}</div>
                <div>{repoConn.referencess && repoConn.referencess[1303]["Ar content"]}</div>
                <div>{repoConn.referencess && repoConn.referencess[1304]["Ar content"]}</div>
                <div>{repoConn.referencess && repoConn.referencess[1305]["Ar content"]}</div>
                <div>{repoConn.referencess && repoConn.referencess[1306]["Ar content"]}</div>
                <div>{repoConn.referencess && repoConn.referencess[1307]["Ar content"]}</div>
            </div> 

            </div>  */}
        </>
    )
}

export default Report5





