import LogoBlu from "../../../FemilerCom/Logo/LogoBlu"
import Logowhit from "../../../FemilerCom/Logo/Logowhit"
import BigOneGraph from '../../../Media/Twindexreport/BigOneGraph.png'
import ScoCover from '../../../Media/Twindexreport/ScoCover.png'
import ManyPhraseGreen from '../../../Media/Twindexreport/ManyPhraseGreen.png'
import ManyPhraseBrown from '../../../Media/Twindexreport/ManyPhraseBrown.png'
import EmpatyPage from '../../../Media/Twindexreport/EmpatyPage.png'
import ManyPhraseBlack from '../../../Media/Twindexreport/ManyPhraseBlack.png'
import ManyBoxBlue from '../../../Media/Twindexreport/ManyBoxBlue.png'
import { repoCon } from "../ReportCom"
import { useContext, useEffect } from "react"
function Report2 ()  {
    let repoConn = useContext(repoCon)
    function sortElementsByClass(containerId, className, appearFirst = true) {
        const containerElement = document.getElementById(containerId);
    
        if (!containerElement) {
            console.error(`Element with ID '${containerId}' not found.`);
            return;
        }
    
        const childElements = Array.from(containerElement.children);
    
        const customSort = (a, b) => {
            const hasClassA = a.classList.contains(className);
            const hasClassB = b.classList.contains(className);
    
            if (appearFirst) {
                return hasClassA ? -1 : hasClassB ? 1 : 0; 
            } else {
                return hasClassA ? 1 : hasClassB ? -1 : 0; 
            }
        };
    
        const sortedChildElements = childElements.sort(customSort);
    
        containerElement.innerHTML = '';
    
        sortedChildElements.forEach((child) => {
            containerElement.appendChild(child);
        });
    }
    useEffect(() => {
        sortElementsByClass("con3", "bg-dark", false )
        sortElementsByClass("con4", "bg-secondary", true )
        sortElementsByClass("con5", "con5Child", false)
        sortElementsByClass("con6", "con6Child", true)
        sortElementsByClass("con7", "con7Child", false)
        sortElementsByClass("con8", "con8Child", true)
    }, [])
    return (
        <>
            <div id="Scond">
            <div className='ManyPhraseInSkills-2'>
                <img className='ImgReport' src={ManyPhraseBlack} alt="Reportimg" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[143]["Ar content"]}</div>
                    </div>
                </div>                
                <div className='SmallIntroBatrn'>{repoConn.referencess && repoConn.referencess[144]["Ar content"]}</div>
                <div className="ManyPhraseBox">
                    <div className="con3" id="con3">
                        <div  className={repoConn.answers["121"] == 1  ? "bg-dark text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[146]["Ar content"]}</span>
                        </div>
                        <div  className={repoConn.answers["122"] == 1  ? "bg-dark text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[147]["Ar content"]}</span>
                        </div>
                        <div  className={repoConn.answers["123"] == 1  ? "bg-dark text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[148]["Ar content"]}</span>
                        </div>
                        <div  className={repoConn.answers["124"] == 1  ? "bg-dark text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[149]["Ar content"]}</span>
                        </div>
                        <div  className={repoConn.answers["125"] == 1  ? "bg-dark text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[150]["Ar content"]}</span>
                        </div>
                        <div  className={repoConn.answers["126"] == 1  ? "bg-dark text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[151]["Ar content"]}</span>
                        </div>
                        <div  className={repoConn.answers["127"] == 1  ? "bg-dark text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[152]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["128"] == 1  ? "bg-dark text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[153]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["129"] == 1  ? "bg-dark text-white PhraseText" : "PhraseText"}>
                            <span>{repoConn.referencess && repoConn.referencess[154]["Ar content"]}</span>
                        </div>
                    </div>
                    <div className="con4" id="con4">
                        <div className={repoConn.answers["121"] == 0  ? "bg-secondary text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[155]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["122"] == 0  ? "bg-secondary text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[156]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["123"] == 0  ? "bg-secondary text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[157]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["124"] == 0  ? "bg-secondary text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[158]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["125"] == 0  ? "bg-secondary text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[159]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["126"] == 0  ? "bg-secondary text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[160]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["127"] == 0  ? "bg-secondary text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[161]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["128"] == 0  ? "bg-secondary text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[162]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["129"] == 0  ? "bg-secondary text-white PhraseText" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[163]["Ar content"]}</span>
                        </div>

                    </div>
                </div>
                <div className='SmallIntroBatrnBottom'>{repoConn.referencess && repoConn.referencess[145]["Ar content"]}</div>
            </div>
            <div className='Empaty-4Report2'>
                <img className='ImgReport' src={EmpatyPage} alt="Reportimg" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[164]["Ar content"]}</div>
                    </div>
                </div>                
                <h1 className='H1Text'>
                {repoConn.referencess && repoConn.referencess[165]["Ar content"]}
                </h1>
                <div className='BigText'>
                {repoConn.answers["131"] == 1 ? repoConn.referencess && repoConn.referencess[168]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[169]["Ar content"]}
                    <br />
                    {repoConn.answers["132"] == 1 ? repoConn.referencess && repoConn.referencess[170]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[172]["Ar content"]}
                    <br />
                    {repoConn.answers["133"] == 1 ? repoConn.referencess && repoConn.referencess[172]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[173]["Ar content"]}
                    <br />
                    {repoConn.answers["134"] == 1 ? repoConn.referencess && repoConn.referencess[174]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[175]["Ar content"]}
                    <br />
                    {repoConn.answers["135"] == 1 ? repoConn.referencess && repoConn.referencess[176]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[177]["Ar content"]}
                    <br />
                    {repoConn.answers["136"] == 1 ? repoConn.referencess && repoConn.referencess[178]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[179]["Ar content"]}
                    <br />
                    {repoConn.answers["137"] == 1 ? repoConn.referencess && repoConn.referencess[180]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[181]["Ar content"]}
                    <br />
                    {repoConn.answers["138"] == 1 ? repoConn.referencess && repoConn.referencess[182]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[183]["Ar content"]}
                    <br />
                    {repoConn.answers["139"] == 1 ? repoConn.referencess && repoConn.referencess[184]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[185]["Ar content"]}
                    <br />
                </div>
            </div>
            <div className='ManyPhraseInSkills-3'>
                <img className='ImgReport' src={ManyPhraseBrown} alt="Reportimg" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[184]["Ar content"]}</div>
                    </div>
                </div>               
                <div className='SmallIntroBatrn'>{repoConn.referencess && repoConn.referencess[185]["Ar content"]}</div>
                <div className="ManyPhraseBox">
                    <div className="con5" id="con5">
                        <div className={repoConn.answers["131"] == 1 ? "PhraseText con5Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[187]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["132"] == 1 ? "PhraseText con5Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[188]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["133"] == 1 ? "PhraseText con5Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[189]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["134"] == 1 ? "PhraseText con5Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[190]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["135"] == 1 ? "PhraseText con5Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[191]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["136"] == 1 ? "PhraseText con5Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[192]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["137"] == 1 ? "PhraseText con5Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[193]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["138"] == 1 ? "PhraseText con5Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[194]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["139"] == 1 ? "PhraseText con5Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[195]["Ar content"]}</span>
                        </div>
                    </div>
                    <div className="con6" id="con6">
                        <div className={repoConn.answers["131"] == 0 ? "PhraseText con6Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[196]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["132"] == 0 ? "PhraseText con6Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[197]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["133"] == 0 ? "PhraseText con6Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[198]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["134"] == 0 ? "PhraseText con6Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[199]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["135"] == 0 ? "PhraseText con6Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[200]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["136"] == 0 ? "PhraseText con6Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[201]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["137"] == 0 ? "PhraseText con6Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[202]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["138"] == 0 ? "PhraseText con6Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[203]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["139"] == 0 ? "PhraseText con6Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[204]["Ar content"]}</span>
                        </div>
                    </div>
                </div>
                <div className='SmallIntroBatrnBottom'>{repoConn.referencess && repoConn.referencess[186]["Ar content"]}</div>
            </div>
            <div className='Empaty-5Report2'>
                <img className='ImgReport' src={EmpatyPage} alt="Reportimg" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[205]["Ar content"]}</div>
                    </div>
                </div>                
                <h1 className='H1Text'>
                {repoConn.referencess && repoConn.referencess[206]["Ar content"]}
                </h1>
                <div className='BigText'>
                {repoConn.answers["141"] == 1 ? repoConn.referencess && repoConn.referencess[207]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[208]["Ar content"]}
                    <br />
                    {repoConn.answers["142"] == 1 ? repoConn.referencess && repoConn.referencess[209]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[210]["Ar content"]}
                    <br />
                    {repoConn.answers["143"] == 1 ? repoConn.referencess && repoConn.referencess[211]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[212]["Ar content"]}
                    <br />
                    {repoConn.answers["144"] == 1 ? repoConn.referencess && repoConn.referencess[213]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[214]["Ar content"]}
                    <br />
                    {repoConn.answers["145"] == 1 ? repoConn.referencess && repoConn.referencess[215]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[216]["Ar content"]}
                    <br />
                    {repoConn.answers["146"] == 1 ? repoConn.referencess && repoConn.referencess[217]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[218]["Ar content"]}
                    <br />
                    {repoConn.answers["147"] == 1 ? repoConn.referencess && repoConn.referencess[219]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[220]["Ar content"]}
                    <br />
                    {repoConn.answers["148"] == 1 ? repoConn.referencess && repoConn.referencess[221]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[222]["Ar content"]}
                    <br />
                    {repoConn.answers["149"] == 1 ? repoConn.referencess && repoConn.referencess[223]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[224]["Ar content"]}
                    <br />
                </div>
            </div>
            <div className='ManyPhraseInSkills-4'>
                <img className='ImgReport' src={ManyPhraseGreen} alt="Reportimg" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[225]["Ar content"]}</div>
                    </div>
                </div>
                <div className='SmallIntroBatrn'>{repoConn.referencess && repoConn.referencess[226]["Ar content"]}</div>
                <div className="ManyPhraseBox">
                    <div className="con7" id="con7">
                        <div className={repoConn.answers["141"] == 1 ? "PhraseText con7Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[228]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["142"] == 1 ? "PhraseText con7Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[229]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["143"] == 1 ? "PhraseText con7Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[230]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["144"] == 1 ? "PhraseText con7Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[231]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["145"] == 1 ? "PhraseText con7Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[232]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["146"] == 1 ? "PhraseText con7Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[233]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["147"] == 1 ? "PhraseText con7Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[234]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["148"] == 1 ? "PhraseText con7Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[235]["Ar content"]}</span>
                        </div>

                    <div className={repoConn.answers["149"] == 1 ? "PhraseText con7Child" : "PhraseText"}>
                        <span >{repoConn.referencess && repoConn.referencess[236]["Ar content"]}</span>
                    </div>
                    </div>
                    <div id="con8">
                        <div className={repoConn.answers["141"] == 0 ? "PhraseText con8Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[237]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["142"] == 0 ? "PhraseText con8Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[238]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["143"] == 0 ? "PhraseText con8Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[239]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["144"] == 0 ? "PhraseText con8Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[240]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["145"] == 0 ? "PhraseText con8Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[241]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["146"] == 0 ? "PhraseText con8Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[242]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["147"] == 0 ? "PhraseText con8Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[243]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["148"] == 0 ? "PhraseText con8Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[244]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["149"] == 0 ? "PhraseText con8Child" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[245]["Ar content"]}</span>
                        </div>
                    </div>
                </div>
                <div className='SmallIntroBatrnBottom'>{repoConn.referencess && repoConn.referencess[227]["Ar content"]}</div>
            </div>
            <div className='ScoCover-2'>
                <img className='ImgReport' src={ScoCover} alt="Reportimg" />
                <div className='AsidLogo'>
                    <Logowhit />
                </div>
                <div className="Text">{repoConn.referencess && repoConn.referencess[246]["Ar content"]}</div>
            </div>
            <div className='BigOneGraph-2'>
                <img className='ImgReport' src={BigOneGraph} alt="Reportimg" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[247]["Ar content"]}</div>
                    </div>
                </div>                
                <div className="Graph-1 ">
                    <div className="TopBox">
                        {/* <div>{repoConn.referencess && repoConn.referencess[248]["Ar content"]}</div> */}
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[249]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[250]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[251]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[252]["Ar content"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.references["R72"]}</span>
                            <span>{repoConn.references["R71"]}</span>
                            <span>{repoConn.references["R70"]}</span>
                            <span>{repoConn.references["R69"]}</span>
                        </div>
                    </div>
                    <div className="Graph-Top-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R76"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R75"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R74"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R73"]} />
                    </div>
                    <div className="Graph-Bottom-1">
                        <canvas className="Canvas" width={50} height={repoConn.references["R84"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R83"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R82"]} />
                        <canvas className="Canvas" width={50} height={repoConn.references["R81"]} />
                    </div>
                    <div className="BottomBox">
                        <div>
                            <span>{repoConn.references["R80"]}</span>
                            <span>{repoConn.references["R79"]}</span>
                            <span>{repoConn.references["R78"]}</span>
                            <span>{repoConn.references["R77"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[253]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[354]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[355]["Ar content"]}</span>
                            <span>{repoConn.referencess && repoConn.referencess[356]["Ar content"]}</span>
                        </div>
                    </div>
                </div>
                <div className="BottomTitleGraph">{repoConn.referencess && repoConn.referencess[248]["Ar content"]}</div>
            </div>
            <div className='Empaty-6Report2'>
                <img className='ImgReport' src={EmpatyPage} alt="Reportimg" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[257]["Ar content"]}</div>
                    </div>
                </div>
                <div className='BigText'>
                {repoConn.answers["211"] == 1 ? repoConn.referencess && repoConn.referencess[258]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[259]["Ar content"]}
                    <br />
                    {repoConn.answers["212"] == 1 ? repoConn.referencess && repoConn.referencess[260]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[261]["Ar content"]}
                    <br />
                    {repoConn.answers["213"] == 1 ? repoConn.referencess && repoConn.referencess[262]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[263]["Ar content"]}
                    <br />
                    {repoConn.answers["214"] == 1 ? repoConn.referencess && repoConn.referencess[264]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[265]["Ar content"]}
                    <br />
                    {repoConn.answers["215"] == 1 ? repoConn.referencess && repoConn.referencess[266]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[267]["Ar content"]}
                    <br />
                    {repoConn.answers["216"] == 1 ? repoConn.referencess && repoConn.referencess[268]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[269]["Ar content"]}
                    <br />
                    {repoConn.answers["217"] == 1 ? repoConn.referencess && repoConn.referencess[270]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[271]["Ar content"]}
                    <br />
                    {repoConn.answers["218"] == 1 ? repoConn.referencess && repoConn.referencess[272]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[273]["Ar content"]}
                    <br />
                    {repoConn.answers["219"] == 1 ? repoConn.referencess && repoConn.referencess[274]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[275]["Ar content"]}
                    <br />
                </div>
            </div>
            <div className='ManyBox-1Report-2'>
                <img className='ImgReport' src={ManyBoxBlue} alt="Reportimg" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[276]["Ar content"]}</div>
                    </div>
                </div>
                <div className="BoxsContaner">
                    <div className="SmallBox">
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[287]["Ar content"]}</span>
                        </div>
                        <div>
                            <span>{repoConn.referencess && repoConn.referencess[277]["Ar content"]}</span>
                        </div>
                    </div>
                    <div className="BigBox">
                        <div className="DetilsBoxs">
                            <span className={repoConn.answers["211"] == 0 ? "ImportBox ManyBoxBlue" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["211"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[288]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[278]["Ar content"]}</span>
                            <span className={repoConn.answers["211"] == 1 ? "ImportBox ManyBoxBlue" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["211"] == 1 ? "" : "DisplayNON"}> اهم </span></span>  {/*R85 */}
                        </div>
                        <div className="DetilsBoxs">
                                                        <span className={repoConn.answers["212"] == 0 ? "ImportBox ManyBoxBlue" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["212"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[289]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[279]["Ar content"]}</span>
                            <span className={repoConn.answers["212"] == 1 ? "ImportBox ManyBoxBlue" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["212"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                                                        <span className={repoConn.answers["213"] == 0 ? "ImportBox ManyBoxBlue" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["213"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[290]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[280]["Ar content"]}</span>
                            <span className={repoConn.answers["213"] == 1 ? "ImportBox ManyBoxBlue" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["213"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                                                        <span className={repoConn.answers["214"] == 0 ? "ImportBox ManyBoxBlue" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["214"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[291]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[281]["Ar content"]}</span>
                            <span className={repoConn.answers["214"] == 1 ? "ImportBox ManyBoxBlue" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["214"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                                                        <span className={repoConn.answers["215"] == 0 ? "ImportBox ManyBoxBlue" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["215"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[292]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[282]["Ar content"]}</span>
                            <span className={repoConn.answers["215"] == 1 ? "ImportBox ManyBoxBlue" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["215"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                                                        <span className={repoConn.answers["216"] == 0 ? "ImportBox ManyBoxBlue" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["216"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[293]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[283]["Ar content"]}</span>
                            <span className={repoConn.answers["216"] == 1 ? "ImportBox ManyBoxBlue" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["216"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                                                        <span className={repoConn.answers["217"] == 0 ? "ImportBox ManyBoxBlue" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["217"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[294]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[284]["Ar content"]}</span>
                            <span className={repoConn.answers["217"] == 1 ? "ImportBox ManyBoxBlue" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["217"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                                                        <span className={repoConn.answers["218"] == 0 ? "ImportBox ManyBoxBlue" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["218"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[295]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[285]["Ar content"]}</span>
                            <span className={repoConn.answers["218"] == 1 ? "ImportBox ManyBoxBlue" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["218"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                        <div className="DetilsBoxs">
                                                        <span className={repoConn.answers["219"] == 0 ? "ImportBox ManyBoxBlue" :"ImportBox ManyBoxTransparent"}><span className={repoConn.answers["219"] == 0 ? "" : "DisplayNON"}> اهم </span></span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[296]["Ar content"]}</span>
                            <span className="ImportBox">{repoConn.referencess && repoConn.referencess[286]["Ar content"]}</span>
                            <span className={repoConn.answers["219"] == 1 ? "ImportBox ManyBoxBlue" : "ImportBox ManyBoxTransparent"}><span className={repoConn.answers["219"] == 1 ? "" : "DisplayNON"}> اهم </span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Empaty-7Report2'>
                <img className='ImgReport' src={EmpatyPage} alt="Reportimg" />
                <div className='AsidLogo'>
                    <LogoBlu />
                </div>
                                <div className='IntroBatrn'>
                    <div className="StrepCountaner">
                    <div>{repoConn.referencess && repoConn.referencess[297]["Ar content"]}</div>
                    </div>
                </div>
                {/* <h1 className='H1Text'>
                لديك مهارات مؤسسية متعددة - تخطيطية أو تلقائية قد تكون فطرية أو مكتسبة وتلك أبرزها 
                </h1> */}
                <div className='BigText'>
                {repoConn.answers["211"] == 1 ? repoConn.referencess && repoConn.referencess[298]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[299]["Ar content"]}
                    <br />
                    {repoConn.answers["212"] == 1 ? repoConn.referencess && repoConn.referencess[300]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[301]["Ar content"]}
                    <br />
                    {repoConn.answers["213"] == 1 ? repoConn.referencess && repoConn.referencess[302]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[303]["Ar content"]}
                    <br />
                    {repoConn.answers["214"] == 1 ? repoConn.referencess && repoConn.referencess[304]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[305]["Ar content"]}
                    <br />
                    {repoConn.answers["215"] == 1 ? repoConn.referencess && repoConn.referencess[306]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[307]["Ar content"]}
                    <br />
                    {repoConn.answers["216"] == 1 ? repoConn.referencess && repoConn.referencess[308]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[309]["Ar content"]}
                    <br />
                    {repoConn.answers["217"] == 1 ? repoConn.referencess && repoConn.referencess[310]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[311]["Ar content"]}
                    <br />
                    {repoConn.answers["218"] == 1 ? repoConn.referencess && repoConn.referencess[312]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[313]["Ar content"]}
                    <br />
                    {repoConn.answers["219"] == 1 ? repoConn.referencess && repoConn.referencess[314]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[315]["Ar content"]}
                    <br />
                </div>
            </div>

            </div>
        </>
    )
}

export default Report2