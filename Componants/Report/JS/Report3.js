import LogoBlu from "../../../FemilerCom/Logo/LogoBlu"
import Logowhit from "../../../FemilerCom/Logo/Logowhit"
import ScoCover from '../../../Media/Twindexreport/ScoCover.png'
import EmpatyPage from '../../../Media/Twindexreport/EmpatyPage.png'
import OneGraph from '../../../Media/Twindexreport/OneGraph.png'
import ManyBoxRed from '../../../Media/Twindexreport/ManyBoxRed.png'
import ManyBoxBlack from '../../../Media/Twindexreport/ManyBoxBlack.png'
import ManyBoxGreen from '../../../Media/Twindexreport/ManyBoxGreen.png'
import { useContext } from "react"
import { repoCon } from "../ReportCom"
// import ButtonBlueRight from "../../../Media/Twindexreport/ButtonBlueRight.png"
// import ButtonBlueLeft from "../../../Media/Twindexreport/ButtonBlueLeft.png"
// import ButtonBlackLeft from "../../../Media/Twindexreport/ButtonBlackLeft.png"
// import ButtonBlackRight from "../../../Media/Twindexreport/ButtonBlackRight.png"
// import ButtonGreenLeft from "../../../Media/Twindexreport/ButtonGreenLeft.png"
// import ButtonGreenRight from "../../../Media/Twindexreport/ButtonGreenRight.png"
// import ButtonRedLeft from "../../../Media/Twindexreport/ButtonRedLeft.png"
// import ButtonRedRight from "../../../Media/Twindexreport/ButtonRedRight.png"
// import ButtonRedRight from "../../../Media/Twindexreport/ButtonGreenRight.png"
// import ButtonGreenRight from "../../../Media/Twindexreport/ButtonGreenRight.png"
function Report3 ()  {
    let repoConn = useContext(repoCon)
    return (
        <>
            <div id="Third">
            <div className='ManyBox-2Report-3'>
                <img className='ImgReport' src={ManyBoxBlack} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[316]["Ar content"]}</div>
                    </div>
                </div>
                <div className="BoxsContaner">
                <div className="SmallBox">
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[317]["Ar content"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[328]["Ar content"]}</span>
                        </div>
                    </div>
                    <div className="BigBox">
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["221"] == 0 ? "ImportBox ManyBoxGray" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["221"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[327]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[318]["Ar content"]}</span>
                            <span className={repoConn.answers["221"] == 1 ? "ImportBox ManyBoxGray" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["221"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["222"] == 0 ? "ImportBox ManyBoxGray" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["222"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[329]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[219]["Ar content"]}</span>
                            <span className={repoConn.answers["222"] == 1 ? "ImportBox ManyBoxGray" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["222"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                                                    </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["223"] == 0 ? "ImportBox ManyBoxGray" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["223"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                            
                        <span className="ImportBox">الإعتماد علي خبرات المدراء في تشغيل المؤسسة</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[330]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[220]["Ar content"]}</span>
                            <span className={repoConn.answers["223"] == 1 ? "ImportBox ManyBoxGray" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["223"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        </div>
                        <div className="DetilsBoxs">
                                                    <span className={repoConn.answers["224"] == 0 ? "ImportBox ManyBoxGray" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["224"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[331]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[221]["Ar content"]}</span>
                            <span className={repoConn.answers["224"] == 1 ? "ImportBox ManyBoxGray" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["224"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                                                    </div>
                        <div className="DetilsBoxs">
                                                    <span className={repoConn.answers["225"] == 0 ? "ImportBox ManyBoxGray" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["225"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[332]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[222]["Ar content"]}</span>
                            <span className={repoConn.answers["225"] == 1 ? "ImportBox ManyBoxGray" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["225"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                                                    </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["226"] == 0 ? "ImportBox ManyBoxGray" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["226"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[333]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[223]["Ar content"]}</span>
                            <span className={repoConn.answers["226"] == 1 ? "ImportBox ManyBoxGray" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["226"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        </div>
                        <div className="DetilsBoxs">
                                                    <span className={repoConn.answers["227"] == 0 ? "ImportBox ManyBoxGray" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["227"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[334]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[224]["Ar content"]}</span>
                            <span className={repoConn.answers["227"] == 1 ? "ImportBox ManyBoxGray" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["227"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["228"] == 0 ? "ImportBox ManyBoxGray" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["228"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[335]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[225]["Ar content"]}</span>
                            <span className={repoConn.answers["228"] == 1 ? "ImportBox ManyBoxGray" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["228"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                                                    <span className={repoConn.answers["229"] == 0 ? "ImportBox ManyBoxGray" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["229"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[336]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[226]["Ar content"]}</span>
                            <span className={repoConn.answers["229"] == 1 ? "ImportBox ManyBoxGray" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["229"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        </div>
                    </div>
                </div>
            </div>
            <div className='Empaty-8Report3'>
                <img className='ImgReport' src={EmpatyPage} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>أبرز المعتقدات المؤسسية التي قد تؤثر
علي أداء المؤسسة ( العلمية - الخبراتية )</div>
                    </div>
                </div>
                <div className='BigText'>
                {repoConn.answers["231"] == 1 ? repoConn.referencess && repoConn.referencess[373]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[338]["Ar content"]}
                    <br />
                    {repoConn.answers["232"] == 1 ? repoConn.referencess && repoConn.referencess[339]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[340]["Ar content"]}
                    <br />
                    {repoConn.answers["233"] == 1 ? repoConn.referencess && repoConn.referencess[341]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[342]["Ar content"]}
                    <br />
                    {repoConn.answers["234"] == 1 ? repoConn.referencess && repoConn.referencess[343]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[345]["Ar content"]}
                    <br />
                    {repoConn.answers["235"] == 1 ? repoConn.referencess && repoConn.referencess[346]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[347]["Ar content"]}
                    <br />
                    {repoConn.answers["236"] == 1 ? repoConn.referencess && repoConn.referencess[348]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[349]["Ar content"]}
                    <br />
                    {repoConn.answers["237"] == 1 ? repoConn.referencess && repoConn.referencess[350]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[351]["Ar content"]}
                    <br />
                    {repoConn.answers["238"] == 1 ? repoConn.referencess && repoConn.referencess[352]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[353]["Ar content"]}
                    <br />
                    {repoConn.answers["239"] == 1 ? repoConn.referencess && repoConn.referencess[354]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[355]["Ar content"]}
                    <br />
                </div>
            </div>
            <div className='ManyBox-3Report-3'>
                <img className='ImgReport' src={ManyBoxRed} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[256]["Ar content"]}</div>
                    </div>
                </div>
                <div className="BoxsContaner">
                <div className="SmallBox">
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[257]["Ar content"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[267]["Ar content"]}</span>
                        </div>
                    </div>
                    <div className="BigBox">
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["231"] == 0 ? "ImportBox ManyBoxRed" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["231"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[368]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[358]["Ar content"]}</span>
                            <span className={repoConn.answers["231"] == 1 ? "ImportBox ManyBoxRed" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["231"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        
                            </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["232"] == 0 ? "ImportBox ManyBoxRed" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["232"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                            
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[369]["Ar content"]}</span>
                            
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[359]["Ar content"]}</span>
                            <span className={repoConn.answers["232"] == 1 ? "ImportBox ManyBoxRed" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["232"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                       
                             </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["233"] == 0 ? "ImportBox ManyBoxRed" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["233"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                            
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[370]["Ar content"]}</span>
                            
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[360]["Ar content"]}</span>

                            <span className={repoConn.answers["233"] == 1 ? "ImportBox ManyBoxRed" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["233"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        
                            </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["234"] == 0 ? "ImportBox ManyBoxRed" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["234"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                            
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[371]["Ar content"]}</span>
                            
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[361]["Ar content"]}</span>

                            <span className={repoConn.answers["234"] == 1 ? "ImportBox ManyBoxRed" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["234"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        
                            </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["235"] == 0 ? "ImportBox ManyBoxRed" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["235"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                            
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[372]["Ar content"]}</span>
                            
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[362]["Ar content"]}</span>

                            <span className={repoConn.answers["235"] == 1 ? "ImportBox ManyBoxRed" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["235"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        
                            </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["236"] == 0 ? "ImportBox ManyBoxRed" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["236"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                            
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[373]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[363]["Ar content"]}</span>

                            <span className={repoConn.answers["236"] == 1 ? "ImportBox ManyBoxRed" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["236"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        
                            </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["237"] == 0 ? "ImportBox ManyBoxRed" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["237"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                            
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[374]["Ar content"]}</span>
                            
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[364]["Ar content"]}</span>

                            <span className={repoConn.answers["237"] == 1 ? "ImportBox ManyBoxRed" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["237"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        
                            </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["238"] == 0 ? "ImportBox ManyBoxRed" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["238"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                            
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[375]["Ar content"]}</span>
                            
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[365]["Ar content"]}</span>

                            <span className={repoConn.answers["238"] == 1 ? "ImportBox ManyBoxRed" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["238"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        
                            </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["239"] == 0 ? "ImportBox ManyBoxRed" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["239"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                            
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[376]["Ar content"]}</span>
                            
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[366]["Ar content"]}</span>
                            <span className={repoConn.answers["239"] == 1 ? "ImportBox ManyBoxRed" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["239"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                        
                            </div>
                    </div>
                </div>
            </div>
            <div className='Empaty-9Report3'>
                <img className='ImgReport' src={EmpatyPage} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[377]["Ar content"]}</div>
                    </div>
                </div>
                <div className='BigText'>
                {repoConn.answers["241"] == 1 ? repoConn.referencess && repoConn.referencess[378]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[379]["Ar content"]}
                    <br />
                    {repoConn.answers["242"] == 1 ? repoConn.referencess && repoConn.referencess[380]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[381]["Ar content"]}
                    <br />
                    {repoConn.answers["243"] == 1 ? repoConn.referencess && repoConn.referencess[382]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[383]["Ar content"]}
                    <br />
                    {repoConn.answers["244"] == 1 ? repoConn.referencess && repoConn.referencess[384]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[385]["Ar content"]}
                    <br />
                    {repoConn.answers["245"] == 1 ? repoConn.referencess && repoConn.referencess[386]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[387]["Ar content"]}
                    <br />
                    {repoConn.answers["246"] == 1 ? repoConn.referencess && repoConn.referencess[388]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[389]["Ar content"]}
                    <br />
                    {repoConn.answers["247"] == 1 ? repoConn.referencess && repoConn.referencess[390]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[391]["Ar content"]}
                    <br />
                    {repoConn.answers["248"] == 1 ? repoConn.referencess && repoConn.referencess[392]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[393]["Ar content"]}
                    <br />
                    {repoConn.answers["249"] == 1 ? repoConn.referencess && repoConn.referencess[394]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[395]["Ar content"]}
                    <br />
                </div>
            </div>
            <div className='ManyBox-4Report-3'>
                <img className='ImgReport' src={ManyBoxGreen} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[396]["Ar content"]}</div>
                    </div>
                </div>
                <div className="BoxsContaner">
                <div className="SmallBox">
                        <div>
                            <span> {repoConn.referencess && repoConn.referencess[397]["Ar content"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[407]["Ar content"]}</span>
                        </div>
                    </div>
                    <div className="BigBox">
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["241"] == 1 ? "ImportBox ManyBoxGreen" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["241"] == 1 ? "" : "DisplayNON"}> اهم </span></span>  
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[408]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[398]["Ar content"]}</span>
                            <span className={repoConn.answers["241"] == 0 ? "ImportBox ManyBoxGreen" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["241"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["242"] == 1 ? "ImportBox ManyBoxGreen" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["242"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                            
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[409]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[399]["Ar content"]}</span>
                            <span className={repoConn.answers["242"] == 0 ? "ImportBox ManyBoxGreen" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["242"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                        </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["243"] == 1 ? "ImportBox ManyBoxGreen" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["243"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                              
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[410]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[400]["Ar content"]}</span>
                            <span className={repoConn.answers["243"] == 0 ? "ImportBox ManyBoxGreen" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["243"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                        </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["244"] == 1 ? "ImportBox ManyBoxGreen" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["244"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                              
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[411]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[401]["Ar content"]}</span>
                                                        <span className={repoConn.answers["244"] == 0 ? "ImportBox ManyBoxGreen" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["244"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["245"] == 1 ? "ImportBox ManyBoxGreen" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["245"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                              
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[412]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[402]["Ar content"]}</span>
                        <span className={repoConn.answers["245"] == 0 ? "ImportBox ManyBoxGreen" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["245"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["246"] == 1 ? "ImportBox ManyBoxGreen" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["246"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                              
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[413]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[403]["Ar content"]}</span>
                            <span className={repoConn.answers["246"] == 0 ? "ImportBox ManyBoxGreen" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["246"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                        </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["247"] == 1 ? "ImportBox ManyBoxGreen" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["247"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                              
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[414]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[404]["Ar content"]}</span>
                            <span className={repoConn.answers["247"] == 0 ? "ImportBox ManyBoxGreen" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["247"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["248"] == 1 ? "ImportBox ManyBoxGreen" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["248"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                              
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[415]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[405]["Ar content"]}</span>
                            <span className={repoConn.answers["248"] == 0 ? "ImportBox ManyBoxGreen" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["248"] == 0 ? "" : "DisplayNON"}> اهم </span></span>                        </div>
                        <div className="DetilsBoxs">
                        <span className={repoConn.answers["249"] == 1 ? "ImportBox ManyBoxGreen" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["249"] == 1 ? "" : "DisplayNON"}> اهم </span></span>                              
                        <span className="ImportBox">{repoConn.referencess && repoConn.referencess[416]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[406]["Ar content"]}</span>
                        <span className={repoConn.answers["249"] == 0 ? "ImportBox ManyBoxGreen" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["249"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ScoCover-3'>
                <img className='ImgReport' src={ScoCover} alt="ReportImge" />
                <div className='AsidLogo'>
                    <Logowhit />
                </div>
                <div className="Text">{repoConn.referencess && repoConn.referencess[417]["Ar content"]}</div>
            </div>
            <div className='BigOneGraph-3'>
                <img className='ImgReport' src={OneGraph} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[418]["Ar content"]}</div>
                    </div>
                </div>
                <div className="Graph-1 ">
                    <div className="TopBox">
                        <div></div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[420]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[421]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[422]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[223]["Ar content"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.references["R160"]}</span>
                            <span>{repoConn.references["R159"]}</span>
                            <span>{repoConn.references["R158"]}</span>
                            <span>{repoConn.references["R157"]}</span>
                        </div>
                    </div>
                    <div className="Graph-Top-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R164"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R163"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R162"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R161"]} />
                    </div>
                    <div className="Graph-Bottom-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R172"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R171"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R170"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R169"]} />
                    </div>
                    <div className="BottomBox">
                        <div>
                            <span>{repoConn.references["R168"]}</span>
                            <span>{repoConn.references["R167"]}</span>
                            <span>{repoConn.references["R166"]}</span>
                            <span>{repoConn.references["R165"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[424]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[425]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[426]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[227]["Ar content"]}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* 429 */}
            {/* <div className='Btn-1'>
                <img className='ImgReport' src={EmpatyPage} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[428]["Ar content"]}</div>
                    </div>
                    <div className="BtnsContaner">
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[429]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlueLeft : ButtonBlueRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[430]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlueLeft : ButtonBlueRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[431]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlueLeft : ButtonBlueRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[432]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlueLeft : ButtonBlueRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[433]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlueLeft : ButtonBlueRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[434]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlueLeft : ButtonBlueRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[435]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlueLeft : ButtonBlueRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[436]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlueLeft : ButtonBlueRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[337]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlueLeft : ButtonBlueRight } alt="ss" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='Btn-2'> 
                <img className='ImgReport' src={EmpatyPage} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[438]["Ar content"]}</div>
                    </div>
                    <div className="BtnsContaner">
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[429]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlackLeft : ButtonBlackRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[430]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlackLeft : ButtonBlackRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[431]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlackLeft : ButtonBlackRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[432]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlackLeft : ButtonBlackRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[433]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlackLeft : ButtonBlackRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[434]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlackLeft : ButtonBlackRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[435]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlackLeft : ButtonBlackRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[436]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlackLeft : ButtonBlackRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[337]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonBlackLeft : ButtonBlackRight } alt="ss" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='Btn-3'>
                <img className='ImgReport' src={EmpatyPage} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[448]["Ar content"]}</div>
                    </div>
                    <div className="BtnsContaner">
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[429]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonGreenLeft : ButtonGreenRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[430]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonGreenLeft : ButtonGreenRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[431]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonGreenLeft : ButtonGreenRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[432]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonGreenLeft : ButtonGreenRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[433]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonGreenLeft : ButtonGreenRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[434]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonGreenLeft : ButtonGreenRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[435]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonGreenLeft : ButtonGreenRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[436]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonGreenLeft : ButtonGreenRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[337]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonGreenLeft : ButtonGreenRight } alt="ss" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='Btn-4'>
                <img className='ImgReport' src={EmpatyPage} alt="ReportImge" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[458]["Ar content"]}</div>
                    </div>
                    <div className="BtnsContaner">
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[429]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonRedLeft : ButtonRedRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[430]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonRedLeft : ButtonRedRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[431]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonRedLeft : ButtonRedRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[432]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonRedLeft : ButtonRedRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[433]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonRedLeft : ButtonRedRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[434]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonRedLeft : ButtonRedRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionLeft">
                            <div className="ButtonsText">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[435]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonRedLeft : ButtonRedRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[436]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonRedLeft : ButtonRedRight } alt="ss" />
                        </div>
                        <div className="BtnCon postionRight">
                            <div className="ButtonsText ">
                                <div>فعال</div>
                                <div className={repoConn.answers["248"] == 1 ? "left" : "Right" }>{repoConn.referencess && repoConn.referencess[337]["Ar content"]}</div>
                                <div>غير فعال</div>
                            </div>
                            <img className="ButtonImage"  src={repoConn.answers["248"] == 1 ? ButtonRedLeft : ButtonRedRight } alt="ss" />
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </>
    )
}

export default Report3