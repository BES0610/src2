import LogoBlu from "../../../FemilerCom/Logo/LogoBlu"
import Logowhit from "../../../FemilerCom/Logo/Logowhit"
import ScoCover from '../../../Media/Twindexreport/ScoCover.png'
import ManySquareBlack from '../../../Media/Twindexreport/ManySquareBlack.png'
import ManySquareBlue from '../../../Media/Twindexreport/ManySquareBlue.png'
import EmpatyPage from '../../../Media/Twindexreport/EmpatyPage.png'
import OneGraph from '../../../Media/Twindexreport/OneGraph.png'
import { useContext } from "react"
import { repoCon } from "../ReportCom"
function Report4 ()  {
    const repoConn = useContext(repoCon)
    return (
        <>
            <div id="Forth">
            <div className='ScoCover-4'>
                <img className='ImgReport' src={ScoCover} alt="ReportImge" />
                <div className='AsidLogo'>
                    <Logowhit />
                </div>
                <div className="Text">{repoConn.referencess && repoConn.referencess[468]["Ar content"]}</div>
            </div>
            <div className='BigOneGraph-4'>
                <img className='ImgReport' src={OneGraph} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[469]["Ar content"]}</div>
                    </div>
                </div>
                <div className="TopTitle">
                <span>{repoConn.referencess && repoConn.referencess[470]["Ar content"]}</span>
                </div>
                <div className="Graph-1 ">
                    <div className="TopBox">
                        <div></div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[472]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[473]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[474]["Ar content"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.references["ٌ247"]}</span>
                            <span>{repoConn.references["ٌ246"]}</span>
                            <span>{repoConn.references["R245"]}</span>
                        </div>
                    </div>
                    <div className="Graph-Top-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R250"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R249"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R248"]} />
                    </div>
                    <div className="Graph-Bottom-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R256"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R255"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R254"]} />
                    </div>
                    <div className="BottomBox">
                        <div>
                            <span>{repoConn.references["R253"]}</span>
                            <span>{repoConn.references["R252"]}</span>
                            <span>{repoConn.references["R251"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[475]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[476]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[477]["Ar content"]}</span>
                        </div>
                    </div>
                </div>
                <div className="BottomTitle">
                    <span>{repoConn.referencess && repoConn.referencess[471]["Ar content"]}</span>
                </div>
            </div>
            <div className='ManyBox-1'>
                <img className='ImgReport' src={ManySquareBlue} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[478]["Ar content"]}</div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Blue-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[479]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[481]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[482]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[483]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["311"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[487]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[490]["Ar content"]}</div>}
                        {repoConn.answers["211"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[488]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[491]["Ar content"]}</div>}
                        {repoConn.answers["111"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[489]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[492]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[484]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[485]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[486]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[480]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                                {repoConn.answers["111"] === 1 && repoConn.answers["211"] === 1 && repoConn.answers["311"] === 1 ?
                                repoConn.referencess && repoConn.referencess[493]["Ar content"] : ""}
                                {repoConn.answers["111"] === 1 && repoConn.answers["211"] === 1 && repoConn.answers["311"] === 0 ?
                                repoConn.referencess && repoConn.referencess[494]["Ar content"] : ""}
                                {repoConn.answers["111"] === 1 && repoConn.answers["211"] === 0 && repoConn.answers["311"] === 1 ?
                                repoConn.referencess && repoConn.referencess[495]["Ar content"] : ""}
                                {repoConn.answers["111"] === 1 && repoConn.answers["211"] === 0 && repoConn.answers["311"] === 0 ?
                                repoConn.referencess && repoConn.referencess[496]["Ar content"] : ""}
                                {repoConn.answers["111"] === 0 && repoConn.answers["211"] === 1 && repoConn.answers["311"] === 1 ?
                                repoConn.referencess && repoConn.referencess[497]["Ar content"] : ""}
                                {repoConn.answers["111"] === 0 && repoConn.answers["211"] === 1 && repoConn.answers["311"] === 0 ?
                                repoConn.referencess && repoConn.referencess[498]["Ar content"] : ""}
                                {repoConn.answers["111"] === 1 && repoConn.answers["211"] === 0 && repoConn.answers["311"] === 1 ?
                                repoConn.referencess && repoConn.referencess[499]["Ar content"] : ""}
                                {repoConn.answers["111"] === 0 && repoConn.answers["211"] === 0 && repoConn.answers["311"] === 0 ?
                                repoConn.referencess && repoConn.referencess[500]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Blue-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[501]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[503]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[504]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[505]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["312"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[509]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[512]["Ar content"]}</div>}
                        {repoConn.answers["212"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[510]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[513]["Ar content"]}</div>}
                        {repoConn.answers["112"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[511]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[514]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[506]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[507]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[508]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[502]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["112"] === 1 && repoConn.answers["212"] === 1 && repoConn.answers["312"] === 1 ?
                                repoConn.referencess && repoConn.referencess[515]["Ar content"] : ""}
                                {repoConn.answers["112"] === 1 && repoConn.answers["212"] === 1 && repoConn.answers["312"] === 0 ?
                                repoConn.referencess && repoConn.referencess[516]["Ar content"] : ""}
                                {repoConn.answers["112"] === 1 && repoConn.answers["212"] === 0 && repoConn.answers["312"] === 1 ?
                                repoConn.referencess && repoConn.referencess[517]["Ar content"] : ""}
                                {repoConn.answers["112"] === 1 && repoConn.answers["212"] === 0 && repoConn.answers["312"] === 0 ?
                                repoConn.referencess && repoConn.referencess[518]["Ar content"] : ""}
                                {repoConn.answers["112"] === 0 && repoConn.answers["212"] === 1 && repoConn.answers["312"] === 1 ?
                                repoConn.referencess && repoConn.referencess[519]["Ar content"] : ""}
                                {repoConn.answers["112"] === 0 && repoConn.answers["212"] === 1 && repoConn.answers["312"] === 0 ?
                                repoConn.referencess && repoConn.referencess[520]["Ar content"] : ""}
                                {repoConn.answers["112"] === 1 && repoConn.answers["212"] === 0 && repoConn.answers["312"] === 1 ?
                                repoConn.referencess && repoConn.referencess[521]["Ar content"] : ""}
                                {repoConn.answers["112"] === 0 && repoConn.answers["212"] === 0 && repoConn.answers["312"] === 0 ?
                                repoConn.referencess && repoConn.referencess[522]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Blue-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[523]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[525]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[526]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[527]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["313"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[531]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[534]["Ar content"]}</div>}
                        {repoConn.answers["213"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[532]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[535]["Ar content"]}</div>}
                        {repoConn.answers["113"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[533]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[536]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[528]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[529]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[530]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[526]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["113"] === 1 && repoConn.answers["213"] === 1 && repoConn.answers["313"] === 1 ?
                                repoConn.referencess && repoConn.referencess[537]["Ar content"] : ""}
                                {repoConn.answers["113"] === 1 && repoConn.answers["213"] === 1 && repoConn.answers["313"] === 0 ?
                                repoConn.referencess && repoConn.referencess[538]["Ar content"] : ""}
                                {repoConn.answers["113"] === 1 && repoConn.answers["213"] === 0 && repoConn.answers["313"] === 1 ?
                                repoConn.referencess && repoConn.referencess[539]["Ar content"] : ""}
                                {repoConn.answers["113"] === 1 && repoConn.answers["213"] === 0 && repoConn.answers["313"] === 0 ?
                                repoConn.referencess && repoConn.referencess[540]["Ar content"] : ""}
                                {repoConn.answers["113"] === 0 && repoConn.answers["213"] === 1 && repoConn.answers["313"] === 1 ?
                                repoConn.referencess && repoConn.referencess[541]["Ar content"] : ""}
                                {repoConn.answers["113"] === 0 && repoConn.answers["213"] === 1 && repoConn.answers["313"] === 0 ?
                                repoConn.referencess && repoConn.referencess[542]["Ar content"] : ""}
                                {repoConn.answers["113"] === 1 && repoConn.answers["213"] === 0 && repoConn.answers["313"] === 1 ?
                                repoConn.referencess && repoConn.referencess[543]["Ar content"] : ""}
                                {repoConn.answers["113"] === 0 && repoConn.answers["213"] === 0 && repoConn.answers["313"] === 0 ?
                                repoConn.referencess && repoConn.referencess[544]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ManyBox-2'>
                <img className='ImgReport' src={ManySquareBlue} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Blue-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[545]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[547]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[548]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[549]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["314"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[553]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[556]["Ar content"]}</div>}
                        {repoConn.answers["214"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[554]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[557]["Ar content"]}</div>}
                        {repoConn.answers["114"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[555]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[558]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[550]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[551]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[552]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[546]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["114"] === 1 && repoConn.answers["214"] === 1 && repoConn.answers["314"] === 1 ?
                                repoConn.referencess && repoConn.referencess[559]["Ar content"] : ""}
                                {repoConn.answers["114"] === 1 && repoConn.answers["214"] === 1 && repoConn.answers["314"] === 0 ?
                                repoConn.referencess && repoConn.referencess[560]["Ar content"] : ""}
                                {repoConn.answers["114"] === 1 && repoConn.answers["214"] === 0 && repoConn.answers["314"] === 1 ?
                                repoConn.referencess && repoConn.referencess[561]["Ar content"] : ""}
                                {repoConn.answers["114"] === 1 && repoConn.answers["214"] === 0 && repoConn.answers["314"] === 0 ?
                                repoConn.referencess && repoConn.referencess[562]["Ar content"] : ""}
                                {repoConn.answers["114"] === 0 && repoConn.answers["214"] === 1 && repoConn.answers["314"] === 1 ?
                                repoConn.referencess && repoConn.referencess[563]["Ar content"] : ""}
                                {repoConn.answers["114"] === 0 && repoConn.answers["214"] === 1 && repoConn.answers["314"] === 0 ?
                                repoConn.referencess && repoConn.referencess[564]["Ar content"] : ""}
                                {repoConn.answers["114"] === 1 && repoConn.answers["214"] === 0 && repoConn.answers["314"] === 1 ?
                                repoConn.referencess && repoConn.referencess[565]["Ar content"] : ""}
                                {repoConn.answers["114"] === 0 && repoConn.answers["214"] === 0 && repoConn.answers["314"] === 0 ?
                                repoConn.referencess && repoConn.referencess[566]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Blue-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[567]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[569]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[570]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[571]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["315"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[575]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[578]["Ar content"]}</div>}
                        {repoConn.answers["215"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[576]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[579]["Ar content"]}</div>}
                        {repoConn.answers["115"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[577]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[580]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[572]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[573]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[574]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[568]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["115"] === 1 && repoConn.answers["215"] === 1 && repoConn.answers["315"] === 1 ?
                                repoConn.referencess && repoConn.referencess[581]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["215"] === 1 && repoConn.answers["315"] === 0 ?
                                repoConn.referencess && repoConn.referencess[582]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["215"] === 0 && repoConn.answers["315"] === 1 ?
                                repoConn.referencess && repoConn.referencess[583]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["215"] === 0 && repoConn.answers["315"] === 0 ?
                                repoConn.referencess && repoConn.referencess[584]["Ar content"] : ""}
                                {repoConn.answers["115"] === 0 && repoConn.answers["215"] === 1 && repoConn.answers["315"] === 1 ?
                                repoConn.referencess && repoConn.referencess[585]["Ar content"] : ""}
                                {repoConn.answers["115"] === 0 && repoConn.answers["215"] === 1 && repoConn.answers["315"] === 0 ?
                                repoConn.referencess && repoConn.referencess[586]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["215"] === 0 && repoConn.answers["315"] === 1 ?
                                repoConn.referencess && repoConn.referencess[587]["Ar content"] : ""}
                                {repoConn.answers["115"] === 0 && repoConn.answers["215"] === 0 && repoConn.answers["315"] === 0 ?
                                repoConn.referencess && repoConn.referencess[588]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Blue-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[589]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[591]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[592]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[593]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["316"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[597]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[600]["Ar content"]}</div>}
                        {repoConn.answers["216"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[598]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[601]["Ar content"]}</div>}
                        {repoConn.answers["116"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[599]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[602]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[594]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[595]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[596]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[590]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["116"] === 1 && repoConn.answers["216"] === 1 && repoConn.answers["316"] === 1 ?
                                repoConn.referencess && repoConn.referencess[602]["Ar content"] : ""}
                                {repoConn.answers["116"] === 1 && repoConn.answers["216"] === 1 && repoConn.answers["316"] === 0 ?
                                repoConn.referencess && repoConn.referencess[603]["Ar content"] : ""}
                                {repoConn.answers["116"] === 1 && repoConn.answers["216"] === 0 && repoConn.answers["316"] === 1 ?
                                repoConn.referencess && repoConn.referencess[604]["Ar content"] : ""}
                                {repoConn.answers["116"] === 1 && repoConn.answers["216"] === 0 && repoConn.answers["316"] === 0 ?
                                repoConn.referencess && repoConn.referencess[605]["Ar content"] : ""}
                                {repoConn.answers["116"] === 0 && repoConn.answers["216"] === 1 && repoConn.answers["316"] === 1 ?
                                repoConn.referencess && repoConn.referencess[606]["Ar content"] : ""}
                                {repoConn.answers["116"] === 0 && repoConn.answers["216"] === 1 && repoConn.answers["316"] === 0 ?
                                repoConn.referencess && repoConn.referencess[607]["Ar content"] : ""}
                                {repoConn.answers["116"] === 1 && repoConn.answers["216"] === 0 && repoConn.answers["316"] === 1 ?
                                repoConn.referencess && repoConn.referencess[608]["Ar content"] : ""}
                                {repoConn.answers["116"] === 0 && repoConn.answers["216"] === 0 && repoConn.answers["316"] === 0 ?
                                repoConn.referencess && repoConn.referencess[609]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ManyBox-3'>
                <img className='ImgReport' src={ManySquareBlue} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Blue-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[611]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[613]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[614]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[615]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["317"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[619]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[622]["Ar content"]}</div>}
                        {repoConn.answers["217"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[620]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[623]["Ar content"]}</div>}
                        {repoConn.answers["117"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[621]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[624]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[616]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[617]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[618]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[612]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["117"] === 1 && repoConn.answers["217"] === 1 && repoConn.answers["317"] === 1 ?
                                repoConn.referencess && repoConn.referencess[625]["Ar content"] : ""}
                                {repoConn.answers["117"] === 1 && repoConn.answers["217"] === 1 && repoConn.answers["317"] === 0 ?
                                repoConn.referencess && repoConn.referencess[626]["Ar content"] : ""}
                                {repoConn.answers["117"] === 1 && repoConn.answers["217"] === 0 && repoConn.answers["317"] === 1 ?
                                repoConn.referencess && repoConn.referencess[627]["Ar content"] : ""}
                                {repoConn.answers["117"] === 1 && repoConn.answers["217"] === 0 && repoConn.answers["317"] === 0 ?
                                repoConn.referencess && repoConn.referencess[628]["Ar content"] : ""}
                                {repoConn.answers["117"] === 0 && repoConn.answers["217"] === 1 && repoConn.answers["317"] === 1 ?
                                repoConn.referencess && repoConn.referencess[629]["Ar content"] : ""}
                                {repoConn.answers["117"] === 0 && repoConn.answers["217"] === 1 && repoConn.answers["317"] === 0 ?
                                repoConn.referencess && repoConn.referencess[630]["Ar content"] : ""}
                                {repoConn.answers["117"] === 1 && repoConn.answers["217"] === 0 && repoConn.answers["317"] === 1 ?
                                repoConn.referencess && repoConn.referencess[631]["Ar content"] : ""}
                                {repoConn.answers["117"] === 0 && repoConn.answers["217"] === 0 && repoConn.answers["317"] === 0 ?
                                repoConn.referencess && repoConn.referencess[632]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Blue-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[633]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[635]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[636]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[637]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["318"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[641]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[644]["Ar content"]}</div>}
                        {repoConn.answers["218"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[642]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[645]["Ar content"]}</div>}
                        {repoConn.answers["118"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[643]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[646]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[638]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[639]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[640]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[634]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["118"] === 1 && repoConn.answers["218"] === 1 && repoConn.answers["318"] === 1 ?
                                repoConn.referencess && repoConn.referencess[647]["Ar content"] : ""}
                                {repoConn.answers["118"] === 1 && repoConn.answers["218"] === 1 && repoConn.answers["318"] === 0 ?
                                repoConn.referencess && repoConn.referencess[648]["Ar content"] : ""}
                                {repoConn.answers["118"] === 1 && repoConn.answers["218"] === 0 && repoConn.answers["318"] === 1 ?
                                repoConn.referencess && repoConn.referencess[649]["Ar content"] : ""}
                                {repoConn.answers["118"] === 1 && repoConn.answers["218"] === 0 && repoConn.answers["318"] === 0 ?
                                repoConn.referencess && repoConn.referencess[650]["Ar content"] : ""}
                                {repoConn.answers["118"] === 0 && repoConn.answers["218"] === 1 && repoConn.answers["318"] === 1 ?
                                repoConn.referencess && repoConn.referencess[651]["Ar content"] : ""}
                                {repoConn.answers["118"] === 0 && repoConn.answers["218"] === 1 && repoConn.answers["318"] === 0 ?
                                repoConn.referencess && repoConn.referencess[652]["Ar content"] : ""}
                                {repoConn.answers["118"] === 1 && repoConn.answers["218"] === 0 && repoConn.answers["318"] === 1 ?
                                repoConn.referencess && repoConn.referencess[653]["Ar content"] : ""}
                                {repoConn.answers["118"] === 0 && repoConn.answers["218"] === 0 && repoConn.answers["318"] === 0 ?
                                repoConn.referencess && repoConn.referencess[654]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Blue-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[655]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[657]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[658]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[659]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["319"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[568]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[568]["Ar content"]}</div>}
                        {repoConn.answers["219"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[568]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[568]["Ar content"]}</div>}
                        {repoConn.answers["119"] ? <div className="ManyBoxsTop ManyBoxTopCol-Blue ">{repoConn.referencess && repoConn.referencess[568]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Blue ">{repoConn.referencess && repoConn.referencess[568]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[660]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[661]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[662]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[656]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["119"] === 1 && repoConn.answers["219"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[669]["Ar content"] : ""}
                                {repoConn.answers["119"] === 1 && repoConn.answers["219"] === 1 && repoConn.answers["319"] === 0 ?
                                repoConn.referencess && repoConn.referencess[670]["Ar content"] : ""}
                                {repoConn.answers["119"] === 1 && repoConn.answers["219"] === 0 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[671]["Ar content"] : ""}
                                {repoConn.answers["119"] === 1 && repoConn.answers["219"] === 0 && repoConn.answers["319"] === 0 ?
                                repoConn.referencess && repoConn.referencess[672]["Ar content"] : ""}
                                {repoConn.answers["119"] === 0 && repoConn.answers["219"] === 1 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[673]["Ar content"] : ""}
                                {repoConn.answers["119"] === 0 && repoConn.answers["219"] === 1 && repoConn.answers["319"] === 0 ?
                                repoConn.referencess && repoConn.referencess[674]["Ar content"] : ""}
                                {repoConn.answers["119"] === 1 && repoConn.answers["219"] === 0 && repoConn.answers["319"] === 1 ?
                                repoConn.referencess && repoConn.referencess[675]["Ar content"] : ""}
                                {repoConn.answers["119"] === 0 && repoConn.answers["219"] === 0 && repoConn.answers["319"] === 0 ?
                                repoConn.referencess && repoConn.referencess[676]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='BigOneGraph-5'>
                <img className='ImgReport' src={OneGraph} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[677]["Ar content"]}</div>
                    </div>
                </div>
                <div className="TopTitle">
                <span>{repoConn.referencess && repoConn.referencess[678]["Ar content"]}</span>
                </div>
                <div className="Graph-1 ">
                    <div className="TopBox">
                        <div></div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[680]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[681]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[682]["Ar content"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.references["R286"]}</span>
                            <span>{repoConn.references["R285"]}</span>
                            <span>{repoConn.references["R284"]}</span>
                        </div>
                    </div>
                    <div className="Graph-Top-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R289"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R288"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R287"]} />
                    </div>
                    <div className="Graph-Bottom-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R295"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R294"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R293"]} />
                    </div>
                    <div className="BottomBox">
                        <div>
                            <span>{repoConn.references["R292"]}</span>
                            <span>{repoConn.references["R291"]}</span>
                            <span>{repoConn.references["R290"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[683]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[684]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[685]["Ar content"]}</span>
                        </div>
                    </div>
                </div>
                <div className="BottomTitle">
                    <span>{repoConn.referencess && repoConn.referencess[579]["Ar content"]}</span>
                </div>
            </div>
            <div className='ManyBox-4'>
                <img className='ImgReport' src={ManySquareBlack} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                        <div>{repoConn.referencess && repoConn.referencess[686]["Ar content"]}</div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Black-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[687]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[689]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[690]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[691]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["321"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[695]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[698]["Ar content"]}</div>}
                        {repoConn.answers["221"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[696]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[699]["Ar content"]}</div>}
                        {repoConn.answers["121"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[697]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[700]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[692]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[693]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[694]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[688]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["121"] === 1 && repoConn.answers["221"] === 1 && repoConn.answers["321"] === 1 ?
                                repoConn.referencess && repoConn.referencess[701]["Ar content"] : ""}
                                {repoConn.answers["121"] === 1 && repoConn.answers["221"] === 1 && repoConn.answers["321"] === 0 ?
                                repoConn.referencess && repoConn.referencess[702]["Ar content"] : ""}
                                {repoConn.answers["121"] === 1 && repoConn.answers["221"] === 0 && repoConn.answers["321"] === 1 ?
                                repoConn.referencess && repoConn.referencess[703]["Ar content"] : ""}
                                {repoConn.answers["112"] === 1 && repoConn.answers["221"] === 0 && repoConn.answers["321"] === 0 ?
                                repoConn.referencess && repoConn.referencess[704]["Ar content"] : ""}
                                {repoConn.answers["121"] === 0 && repoConn.answers["221"] === 1 && repoConn.answers["312"] === 1 ?
                                repoConn.referencess && repoConn.referencess[705]["Ar content"] : ""}
                                {repoConn.answers["121"] === 0 && repoConn.answers["221"] === 1 && repoConn.answers["321"] === 0 ?
                                repoConn.referencess && repoConn.referencess[706]["Ar content"] : ""}
                                {repoConn.answers["121"] === 1 && repoConn.answers["221"] === 0 && repoConn.answers["321"] === 1 ?
                                repoConn.referencess && repoConn.referencess[707]["Ar content"] : ""}
                                {repoConn.answers["121"] === 0 && repoConn.answers["221"] === 0 && repoConn.answers["321"] === 0 ?
                                repoConn.referencess && repoConn.referencess[708]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Black-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[709]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[711]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[712]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[173]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["322"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[717]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[720]["Ar content"]}</div>}
                        {repoConn.answers["222"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[718]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[721]["Ar content"]}</div>}
                        {repoConn.answers["122"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[719]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[722]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[714]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[715]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[716]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[710]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["122"] === 1 && repoConn.answers["222"] === 1 && repoConn.answers["322"] === 1 ?
                                repoConn.referencess && repoConn.referencess[723]["Ar content"] : ""}
                                {repoConn.answers["122"] === 1 && repoConn.answers["222"] === 1 && repoConn.answers["322"] === 0 ?
                                repoConn.referencess && repoConn.referencess[724]["Ar content"] : ""}
                                {repoConn.answers["122"] === 1 && repoConn.answers["222"] === 0 && repoConn.answers["322"] === 1 ?
                                repoConn.referencess && repoConn.referencess[725]["Ar content"] : ""}
                                {repoConn.answers["112"] === 1 && repoConn.answers["222"] === 0 && repoConn.answers["322"] === 0 ?
                                repoConn.referencess && repoConn.referencess[726]["Ar content"] : ""}
                                {repoConn.answers["122"] === 0 && repoConn.answers["222"] === 1 && repoConn.answers["312"] === 1 ?
                                repoConn.referencess && repoConn.referencess[727]["Ar content"] : ""}
                                {repoConn.answers["122"] === 0 && repoConn.answers["222"] === 1 && repoConn.answers["322"] === 0 ?
                                repoConn.referencess && repoConn.referencess[728]["Ar content"] : ""}
                                {repoConn.answers["122"] === 1 && repoConn.answers["222"] === 0 && repoConn.answers["322"] === 1 ?
                                repoConn.referencess && repoConn.referencess[729]["Ar content"] : ""}
                                {repoConn.answers["122"] === 0 && repoConn.answers["222"] === 0 && repoConn.answers["322"] === 0 ?
                                repoConn.referencess && repoConn.referencess[730]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Black-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[731]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[733]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[734]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[735]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["323"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[739]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[742]["Ar content"]}</div>}
                        {repoConn.answers["223"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[740]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[473]["Ar content"]}</div>}
                        {repoConn.answers["123"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[741]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[744]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[736]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[737]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[738]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[730]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["123"] === 1 && repoConn.answers["223"] === 1 && repoConn.answers["323"] === 1 ?
                                repoConn.referencess && repoConn.referencess[745]["Ar content"] : ""}
                                {repoConn.answers["123"] === 1 && repoConn.answers["223"] === 1 && repoConn.answers["323"] === 0 ?
                                repoConn.referencess && repoConn.referencess[746]["Ar content"] : ""}
                                {repoConn.answers["123"] === 1 && repoConn.answers["223"] === 0 && repoConn.answers["323"] === 1 ?
                                repoConn.referencess && repoConn.referencess[747]["Ar content"] : ""}
                                {repoConn.answers["113"] === 1 && repoConn.answers["223"] === 0 && repoConn.answers["323"] === 0 ?
                                repoConn.referencess && repoConn.referencess[749]["Ar content"] : ""}
                                {repoConn.answers["123"] === 0 && repoConn.answers["223"] === 1 && repoConn.answers["313"] === 1 ?
                                repoConn.referencess && repoConn.referencess[750]["Ar content"] : ""}
                                {repoConn.answers["123"] === 0 && repoConn.answers["223"] === 1 && repoConn.answers["323"] === 0 ?
                                repoConn.referencess && repoConn.referencess[751]["Ar content"] : ""}
                                {repoConn.answers["123"] === 1 && repoConn.answers["223"] === 0 && repoConn.answers["323"] === 1 ?
                                repoConn.referencess && repoConn.referencess[752]["Ar content"] : ""}
                                {repoConn.answers["123"] === 0 && repoConn.answers["223"] === 0 && repoConn.answers["323"] === 0 ?
                                repoConn.referencess && repoConn.referencess[753]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ManyBox-5'>
                <img className='ImgReport' src={ManySquareBlack} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Black-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[753]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[755]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[756]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[757]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["324"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[761]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[764]["Ar content"]}</div>}
                        {repoConn.answers["224"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[762]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[765]["Ar content"]}</div>}
                        {repoConn.answers["124"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[763]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[766]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[758]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[759]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[760]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[754]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["124"] === 1 && repoConn.answers["224"] === 1 && repoConn.answers["324"] === 1 ?
                                repoConn.referencess && repoConn.referencess[768]["Ar content"] : ""}
                                {repoConn.answers["124"] === 1 && repoConn.answers["224"] === 1 && repoConn.answers["324"] === 0 ?
                                repoConn.referencess && repoConn.referencess[769]["Ar content"] : ""}
                                {repoConn.answers["124"] === 1 && repoConn.answers["224"] === 0 && repoConn.answers["324"] === 1 ?
                                repoConn.referencess && repoConn.referencess[770]["Ar content"] : ""}
                                {repoConn.answers["114"] === 1 && repoConn.answers["224"] === 0 && repoConn.answers["324"] === 0 ?
                                repoConn.referencess && repoConn.referencess[771]["Ar content"] : ""}
                                {repoConn.answers["124"] === 0 && repoConn.answers["224"] === 1 && repoConn.answers["314"] === 1 ?
                                repoConn.referencess && repoConn.referencess[772]["Ar content"] : ""}
                                {repoConn.answers["124"] === 0 && repoConn.answers["224"] === 1 && repoConn.answers["324"] === 0 ?
                                repoConn.referencess && repoConn.referencess[773]["Ar content"] : ""}
                                {repoConn.answers["124"] === 1 && repoConn.answers["224"] === 0 && repoConn.answers["324"] === 1 ?
                                repoConn.referencess && repoConn.referencess[774]["Ar content"] : ""}
                                {repoConn.answers["124"] === 0 && repoConn.answers["224"] === 0 && repoConn.answers["324"] === 0 ?
                                repoConn.referencess && repoConn.referencess[775]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Black-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[775]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[777]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[778]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[779]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["325"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[783]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[786]["Ar content"]}</div>}
                        {repoConn.answers["225"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[784]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[787]["Ar content"]}</div>}
                        {repoConn.answers["125"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[785]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[788]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[780]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[781]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[782]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[776]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["125"] === 1 && repoConn.answers["225"] === 1 && repoConn.answers["325"] === 1 ?
                                repoConn.referencess && repoConn.referencess[789]["Ar content"] : ""}
                                {repoConn.answers["125"] === 1 && repoConn.answers["225"] === 1 && repoConn.answers["325"] === 0 ?
                                repoConn.referencess && repoConn.referencess[790]["Ar content"] : ""}
                                {repoConn.answers["125"] === 1 && repoConn.answers["225"] === 0 && repoConn.answers["325"] === 1 ?
                                repoConn.referencess && repoConn.referencess[791]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["225"] === 0 && repoConn.answers["325"] === 0 ?
                                repoConn.referencess && repoConn.referencess[792]["Ar content"] : ""}
                                {repoConn.answers["125"] === 0 && repoConn.answers["225"] === 1 && repoConn.answers["315"] === 1 ?
                                repoConn.referencess && repoConn.referencess[793]["Ar content"] : ""}
                                {repoConn.answers["125"] === 0 && repoConn.answers["225"] === 1 && repoConn.answers["325"] === 0 ?
                                repoConn.referencess && repoConn.referencess[794]["Ar content"] : ""}
                                {repoConn.answers["125"] === 1 && repoConn.answers["225"] === 0 && repoConn.answers["325"] === 1 ?
                                repoConn.referencess && repoConn.referencess[795]["Ar content"] : ""}
                                {repoConn.answers["125"] === 0 && repoConn.answers["225"] === 0 && repoConn.answers["325"] === 0 ?
                                repoConn.referencess && repoConn.referencess[796]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Black-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[797]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[799]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[800]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[801]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["326"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[805]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[808]["Ar content"]}</div>}
                        {repoConn.answers["226"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[806]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[809]["Ar content"]}</div>}
                        {repoConn.answers["126"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[807]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[810]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[802]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[803]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[804]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[798]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["126"] === 1 && repoConn.answers["226"] === 1 && repoConn.answers["326"] === 1 ?
                                repoConn.referencess && repoConn.referencess[812]["Ar content"] : ""}
                                {repoConn.answers["126"] === 1 && repoConn.answers["226"] === 1 && repoConn.answers["326"] === 0 ?
                                repoConn.referencess && repoConn.referencess[813]["Ar content"] : ""}
                                {repoConn.answers["126"] === 1 && repoConn.answers["226"] === 0 && repoConn.answers["326"] === 1 ?
                                repoConn.referencess && repoConn.referencess[814]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["226"] === 0 && repoConn.answers["326"] === 0 ?
                                repoConn.referencess && repoConn.referencess[815]["Ar content"] : ""}
                                {repoConn.answers["126"] === 0 && repoConn.answers["226"] === 1 && repoConn.answers["315"] === 1 ?
                                repoConn.referencess && repoConn.referencess[816]["Ar content"] : ""}
                                {repoConn.answers["126"] === 0 && repoConn.answers["226"] === 1 && repoConn.answers["326"] === 0 ?
                                repoConn.referencess && repoConn.referencess[817]["Ar content"] : ""}
                                {repoConn.answers["126"] === 1 && repoConn.answers["226"] === 0 && repoConn.answers["326"] === 1 ?
                                repoConn.referencess && repoConn.referencess[818]["Ar content"] : ""}
                                {repoConn.answers["126"] === 0 && repoConn.answers["226"] === 0 && repoConn.answers["326"] === 0 ?
                                repoConn.referencess && repoConn.referencess[819]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ManyBox-6'>
                <img className='ImgReport' src={ManySquareBlack} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Black-1">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[819]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[821]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[822]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[823]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["327"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[827]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[830]["Ar content"]}</div>}
                        {repoConn.answers["227"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[828]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[831]["Ar content"]}</div>}
                        {repoConn.answers["127"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[829]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[832]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[824]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[825]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[826]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[820]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["127"] === 1 && repoConn.answers["227"] === 1 && repoConn.answers["327"] === 1 ?
                                repoConn.referencess && repoConn.referencess[832]["Ar content"] : ""}
                                {repoConn.answers["127"] === 1 && repoConn.answers["227"] === 1 && repoConn.answers["327"] === 0 ?
                                repoConn.referencess && repoConn.referencess[833]["Ar content"] : ""}
                                {repoConn.answers["127"] === 1 && repoConn.answers["227"] === 0 && repoConn.answers["327"] === 1 ?
                                repoConn.referencess && repoConn.referencess[834]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["227"] === 0 && repoConn.answers["327"] === 0 ?
                                repoConn.referencess && repoConn.referencess[835]["Ar content"] : ""}
                                {repoConn.answers["127"] === 0 && repoConn.answers["227"] === 1 && repoConn.answers["317"] === 1 ?
                                repoConn.referencess && repoConn.referencess[836]["Ar content"] : ""}
                                {repoConn.answers["127"] === 0 && repoConn.answers["227"] === 1 && repoConn.answers["327"] === 0 ?
                                repoConn.referencess && repoConn.referencess[837]["Ar content"] : ""}
                                {repoConn.answers["127"] === 1 && repoConn.answers["227"] === 0 && repoConn.answers["327"] === 1 ?
                                repoConn.referencess && repoConn.referencess[838]["Ar content"] : ""}
                                {repoConn.answers["127"] === 0 && repoConn.answers["227"] === 0 && repoConn.answers["327"] === 0 ?
                                repoConn.referencess && repoConn.referencess[839]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Black-2 ">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[841]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[843]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[844]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[845]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["328"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[849]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[852]["Ar content"]}</div>}
                        {repoConn.answers["228"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[850]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[853]["Ar content"]}</div>}
                        {repoConn.answers["128"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[851]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[854]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[846]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[847]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[848]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[842]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["128"] === 1 && repoConn.answers["228"] === 1 && repoConn.answers["328"] === 1 ?
                                repoConn.referencess && repoConn.referencess[855]["Ar content"] : ""}
                                {repoConn.answers["128"] === 1 && repoConn.answers["228"] === 1 && repoConn.answers["328"] === 0 ?
                                repoConn.referencess && repoConn.referencess[856]["Ar content"] : ""}
                                {repoConn.answers["128"] === 1 && repoConn.answers["228"] === 0 && repoConn.answers["328"] === 1 ?
                                repoConn.referencess && repoConn.referencess[867]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["228"] === 0 && repoConn.answers["328"] === 0 ?
                                repoConn.referencess && repoConn.referencess[868]["Ar content"] : ""}
                                {repoConn.answers["128"] === 0 && repoConn.answers["228"] === 1 && repoConn.answers["318"] === 1 ?
                                repoConn.referencess && repoConn.referencess[869]["Ar content"] : ""}
                                {repoConn.answers["128"] === 0 && repoConn.answers["226"] === 1 && repoConn.answers["328"] === 0 ?
                                repoConn.referencess && repoConn.referencess[870]["Ar content"] : ""}
                                {repoConn.answers["128"] === 1 && repoConn.answers["228"] === 0 && repoConn.answers["328"] === 1 ?
                                repoConn.referencess && repoConn.referencess[871]["Ar content"] : ""}
                                {repoConn.answers["128"] === 0 && repoConn.answers["228"] === 0 && repoConn.answers["328"] === 0 ?
                                repoConn.referencess && repoConn.referencess[872]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ManyBoxesBox ManyBoxPostion-Black-3">
                    <div className="LiftBox">
                        <span className="TopTitle">{repoConn.referencess && repoConn.referencess[863]["Ar content"]}</span>
                        <div className="TopTitleBoxs">
                            <div>{repoConn.referencess && repoConn.referencess[865]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[866]["Ar content"]}</div>
                            <div>{repoConn.referencess && repoConn.referencess[867]["Ar content"]}</div>
                        </div>
                        <div className="CenterBox">
                        {repoConn.answers["329"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[871]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[874]["Ar content"]}</div>}
                        {repoConn.answers["229"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[872]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[875]["Ar content"]}</div>}
                        {repoConn.answers["129"] ? <div className="ManyBoxsTop ManyBoxTopCol-Gray">{repoConn.referencess && repoConn.referencess[873]["Ar content"]}</div> : <div className="ManyBoxsBottom ManyBoxBottomCol-Gray">{repoConn.referencess && repoConn.referencess[876]["Ar content"]}</div>}
                        </div>
                        <div className="BottumTitleBoxs">
                        <div>{repoConn.referencess && repoConn.referencess[868]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[869]["Ar content"]}</div>
                        <div>{repoConn.referencess && repoConn.referencess[870]["Ar content"]}</div>
                        </div>
                        <span className="BottumTitle">{repoConn.referencess && repoConn.referencess[864]["Ar content"]}</span>
                    </div>
                    <div className="RightBox">
                        <div className="BOX">
                            <span>
                            {repoConn.answers["129"] === 1 && repoConn.answers["229"] === 1 && repoConn.answers["329"] === 1 ?
                                repoConn.referencess && repoConn.referencess[877]["Ar content"] : ""}
                                {repoConn.answers["129"] === 1 && repoConn.answers["229"] === 1 && repoConn.answers["329"] === 0 ?
                                repoConn.referencess && repoConn.referencess[871]["Ar content"] : ""}
                                {repoConn.answers["129"] === 1 && repoConn.answers["229"] === 0 && repoConn.answers["329"] === 1 ?
                                repoConn.referencess && repoConn.referencess[872]["Ar content"] : ""}
                                {repoConn.answers["115"] === 1 && repoConn.answers["229"] === 0 && repoConn.answers["329"] === 0 ?
                                repoConn.referencess && repoConn.referencess[873]["Ar content"] : ""}
                                {repoConn.answers["129"] === 0 && repoConn.answers["229"] === 1 && repoConn.answers["329"] === 1 ?
                                repoConn.referencess && repoConn.referencess[874]["Ar content"] : ""}
                                {repoConn.answers["129"] === 0 && repoConn.answers["229"] === 1 && repoConn.answers["329"] === 0 ?
                                repoConn.referencess && repoConn.referencess[875]["Ar content"] : ""}
                                {repoConn.answers["129"] === 1 && repoConn.answers["229"] === 0 && repoConn.answers["329"] === 1 ?
                                repoConn.referencess && repoConn.referencess[876]["Ar content"] : ""}
                                {repoConn.answers["129"] === 0 && repoConn.answers["229"] === 0 && repoConn.answers["329"] === 0 ?
                                repoConn.referencess && repoConn.referencess[877]["Ar content"] : ""}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='BigOneGraph-6'>
                <img className='ImgReport' src={OneGraph} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                        <div>{repoConn.referencess && repoConn.referencess[885]["Ar content"]}</div>
                    </div>
                </div>
                <div className="TopTitle">
                <span>{repoConn.referencess && repoConn.referencess[886]["Ar content"]}</span>
                </div>
                <div className="Graph-1 ">
                    <div className="TopBox">
                        <div></div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[888]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[889]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[890]["Ar content"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.references["R325"]}</span>
                            <span>{repoConn.references["R324"]}</span>
                            <span>{repoConn.references["R323"]}</span>
                        </div>
                    </div>
                    <div className="Graph-Top-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R328"]}/>
                        <canvas className="Canvas" width={50} height={repoConn.references["R327"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R326"]} />
                    </div>
                    <div className="Graph-Bottom-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R334"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R333"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R332"]} />
                    </div>
                    <div className="BottomBox">
                        <div>
                            <span>{repoConn.references["R331"]}</span>
                            <span>{repoConn.references["R330"]}</span>
                            <span>{repoConn.references["R329"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[891]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[892]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[893]["Ar content"]}</span>
                        </div>
                    </div>
                </div>
                <div className="BottomTitle">
                    <span>{repoConn.referencess && repoConn.referencess[887]["Ar content"]}</span>
                </div>
            </div>

            </div>
        </>
    )
}

export default Report4