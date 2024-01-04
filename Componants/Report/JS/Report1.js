import LogoBlu from "../../../FemilerCom/Logo/LogoBlu"
import Logowhit from "../../../FemilerCom/Logo/Logowhit"
import Cover from '../../../Media/Twindexreport/Cover.png'
import EmpatyPageSmallAside from '../../../Media/Twindexreport/EmpatyPageSmallAside.png'
import EmpatyPageBigAside from '../../../Media/Twindexreport/EmpatyPageBigAside.png'
import ManyGraph from '../../../Media/Twindexreport/ManyGraph.png'
import BigOneGraph from '../../../Media/Twindexreport/BigOneGraph.png'
import ScoCover from '../../../Media/Twindexreport/ScoCover.png'
import EmpatyPage from '../../../Media/Twindexreport/EmpatyPage.png'
import ManyPhrase from '../../../Media/Twindexreport/ManyPhrase.png'
import streb from "../../../Media/Strep/streb.webp";
import { useContext, useEffect, useState } from "react"
import { repoCon } from "../ReportCom"


function Report1 (index)  {
    const repoConn = useContext(repoCon)
    let releventAnswers1 = ["111","112","113","114","115", "116", "117", "118","119"];
    let releventAnswers2 = ["211", "212", "213", "214", "215", "216", "217", "218", "219"];
    let releventAnswers3 = ["121","122","123","124","125", "126", "127", "128","129"];
    let releventAnswers4 = ["311", "312", "313", "314", "315", "316", "317", "318", "319"];
    let releventAnswers5 = ["131", "132", "133", "134", "135", "136", "137", "138", "139"];
    let releventAnswers6 = ["141", "142", "143", "144", "145", "146", "147", "148", "149"];
    let releventAnswers7 = ["221", "222", "223", "224", "225", "226", "227", "228", "229"];
    let releventAnswers8 = ["321", "322", "323", "324", "325", "326", "327", "328", "329"];
    let releventAnswers9 = ["331", "332", "333", "334", "335", "336", "337", "338", "339"];
    let releventAnswers10 = ["231", "232", "233", "234", "235", "236", "237", "238", "239"];
    let releventAnswers11 = ["241", "242", "243", "244", "245", "246", "247", "248", "249"];
    let releventAnswers12 = ["341", "342", "343", "344", "345", "346", "347", "348", "349"];


    // let releventAnswers3 = ["311", "312", "313", "314", "315", "316", "317", "318", "319"]
    let commonValuesToAdd = [7, 9, 15, 10, 12, 11, 14, 9, 7];
    let commonValuesToAdd3 = [6, 14, 13, 11, 10, 12, 8, 7, 9];
    let commonValuesToAdd4 = [13, 14, 11, 10, 11, 12, 9, 7, 8];
    let commonValuesToAdd5 = [12, 5, 15, 14, 8, 11, 7, 10, 9];
            useEffect(() => {
                

                for (let i = 0; i < releventAnswers1.length; i++) {
                    const answerKey = releventAnswers1[i];
                    const answerKey2 = releventAnswers2[i];
                    const answerKey3 = releventAnswers3[i];
                    const answerKey4 = releventAnswers4[i];
                    const answerKey5 = releventAnswers5[i];
                    const answerKey6 = releventAnswers6[i];
                    const answerKey7 = releventAnswers7[i];
                    const answerKey8 = releventAnswers8[i];
                    const answerKey9 = releventAnswers9[i];
                    const answerKey10 = releventAnswers10[i];
                    const answerKey11 = releventAnswers11[i];
                    const answerKey12 = releventAnswers12[i];
                    const commonValue = commonValuesToAdd[i];
                    const commonValue3 = commonValuesToAdd3[i];
                    const commonValue4 = commonValuesToAdd4[i];
                    const commonValue5 = commonValuesToAdd5[i];
                
                    if (repoConn.answers[answerKey] == 1) {
                        repoConn.references["R1"] += commonValue;//
                        repoConn.references["R4"] += commonValue;//
                        repoConn.references["R49"] += commonValue;//
                        repoConn.references["R53"] += commonValue; // Add R53 to each one
                        repoConn.references["R245"] += commonValue; // Add R53 to each one
                        repoConn.references["R248"] += commonValue; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey] == 0) {
                        repoConn.references["R7"] += commonValue; //
                        repoConn.references["R10"] += commonValue;
                        repoConn.references["R57"] += commonValue;
                        repoConn.references["R61"] += commonValue; // Add R53 to each one
                        repoConn.references["R251"] += commonValue; // Add R53 to each one
                        repoConn.references["R254"] += commonValue; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey2] == 1) {
                        repoConn.references["R2"] += commonValue;
                        repoConn.references["R5"] += commonValue;
                        repoConn.references["R69"] += commonValue;
                        repoConn.references["R73"] += commonValue; // Add R53 to each one
                        repoConn.references["R246"] += commonValue; // Add R53 to each one
                        repoConn.references["R249"] += commonValue; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey2] == 0) {
                        repoConn.references["R8"] += commonValue;
                        repoConn.references["R11"] += commonValue;
                        repoConn.references["R77"] += commonValue;
                        repoConn.references["R81"] += commonValue; // Add R53 to each one
                       repoConn.references["R252"] += commonValue; // Add R53 to each one
                        repoConn.references["R255"] += commonValue; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey3] == 1) {
                        repoConn.references["R13"] += commonValue3;
                        repoConn.references["R16"] += commonValue3;
                        repoConn.references["R50"] += commonValue3;
                        repoConn.references["R54"] += commonValue3; // Add R53 to each one
                        repoConn.references["R284"] += commonValue3; // Add R53 to each one
                        repoConn.references["R287"] += commonValue3; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey3] == 0) {
                        repoConn.references["R19"] += commonValue3;
                        repoConn.references["R22"] += commonValue3;
                        repoConn.references["R58"] += commonValue3;
                        repoConn.references["R62"] += commonValue3; // Add R53 to each one
                        repoConn.references["R290"] += commonValue3; // Add R53 to each one
                        repoConn.references["R293"] += commonValue3; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey7] == 1) {
                        repoConn.references["R14"] += commonValue3;
                        repoConn.references["R17"] += commonValue3;
                        repoConn.references["R70"] += commonValue3;
                        repoConn.references["R74"] += commonValue3; // Add R53 to each one
                        repoConn.references["R285"] += commonValue3; // Add R53 to each one
                        repoConn.references["R288"] += commonValue3; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey7] == 0) {
                        repoConn.references["R20"] += commonValue3;
                        repoConn.references["R23"] += commonValue3;
                        repoConn.references["R78"] += commonValue3;
                        repoConn.references["R82"] += commonValue3; // Add R53 to each one
                        repoConn.references["R294"] += commonValue3; // Add R53 to each one
                        repoConn.references["R291"] += commonValue3; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey8] == 1) {
                        repoConn.references["R15"] += commonValue3;
                        repoConn.references["R18"] += commonValue3;
                        repoConn.references["R158"] += commonValue3;
                        repoConn.references["R162"] += commonValue3; // Add R53 to each one
                        repoConn.references["R286"] += commonValue3; // Add R53 to each one
                        repoConn.references["R289"] += commonValue3; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey8] == 0) {
                        repoConn.references["R21"] += commonValue3;
                        repoConn.references["R24"] += commonValue3;
                        repoConn.references["R166"] += commonValue3;
                        repoConn.references["R170"] += commonValue3; // Add R53 to each one
                        repoConn.references["R295"] += commonValue3; // Add R53 to each one
                        repoConn.references["R292"] += commonValue3; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey4] == 1) {
                        repoConn.references["R3"] += commonValue;
                        repoConn.references["R6"] += commonValue;
                        repoConn.references["R157"] += commonValue;
                        repoConn.references["R161"] += commonValue; // Add R53 to each one
                        repoConn.references["R247"] += commonValue; // Add R53 to each one
                        repoConn.references["R250"] += commonValue; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey4] == 0) {
                        repoConn.references["R9"] += commonValue;
                        repoConn.references["R12"] += commonValue;
                        repoConn.references["R165"] += commonValue;
                        repoConn.references["R169"] += commonValue; // Add R53 to each one
                        repoConn.references["R253"] += commonValue; // Add R53 to each one
                        repoConn.references["R256"] += commonValue; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey5] == 1) {
                        repoConn.references["R25"] += commonValue4;
                        repoConn.references["R28"] += commonValue4;
                        repoConn.references["R51"] += commonValue4;
                        repoConn.references["R55"] += commonValue4; // Add R53 to each one
                        repoConn.references["R323"] += commonValue4; // Add R53 to each one
                        repoConn.references["R326"] += commonValue4; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey5] == 0) {
                        repoConn.references["R31"] += commonValue4;
                        repoConn.references["R34"] += commonValue4;
                        repoConn.references["R59"] += commonValue4;
                        repoConn.references["R63"] += commonValue4; // Add R53 to each one
                        repoConn.references["R332"] += commonValue4; // Add R53 to each one
                        repoConn.references["R329"] += commonValue4; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey9] == 1) {
                        repoConn.references["R27"] += commonValue4;
                        repoConn.references["R30"] += commonValue4;
                        repoConn.references["R159"] += commonValue4;
                        repoConn.references["R163"] += commonValue4; // Add R53 to each one
                        repoConn.references["R325"] += commonValue4; // Add R53 to each one
                        repoConn.references["R328"] += commonValue4; // Add R53 to each one
                    }
                    
                    if (repoConn.answers[answerKey9] == 0) {
                        repoConn.references["R33"] += commonValue4;
                        repoConn.references["R36"] += commonValue4;
                        repoConn.references["R167"] += commonValue4;
                        repoConn.references["R171"] += commonValue4; // Add R53 to each one
                        repoConn.references["R331"] += commonValue4; // Add R53 to each one
                        repoConn.references["R334"] += commonValue4; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey10] == 1) {
                        repoConn.references["R26"] += commonValue4;
                        repoConn.references["R29"] += commonValue4;
                        repoConn.references["R71"] += commonValue4;
                        repoConn.references["R75"] += commonValue4; // Add R53 to each one
                        repoConn.references["R324"] += commonValue4; // Add R53 to each one
                        repoConn.references["R327"] += commonValue4; // Add R53 to each one
                    }
                    
                    if (repoConn.answers[answerKey10] == 0) {
                        repoConn.references["R32"] += commonValue4;
                        repoConn.references["R35"] += commonValue4;
                        repoConn.references["R79"] += commonValue4;
                        repoConn.references["R83"] += commonValue4; // Add R53 to each one
                        repoConn.references["R330"] += commonValue4; // Add R53 to each one
                        repoConn.references["R333"] += commonValue4; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey6] == 1) {
                        repoConn.references["R37"] += commonValue5;
                        repoConn.references["R40"] += commonValue5;
                        repoConn.references["R52"] += commonValue5;
                        repoConn.references["R56"] += commonValue5; // Add R53 to each one
                       repoConn.references["R362"] += commonValue5; // Add R53 to each one
                        repoConn.references["R365"] += commonValue5; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey6] == 0) {
                        repoConn.references["R43"] += commonValue5;
                        repoConn.references["R46"] += commonValue5;
                        repoConn.references["R60"] += commonValue5;
                        repoConn.references["R64"] += commonValue5; // Add R53 to each one
                        repoConn.references["R371"] += commonValue5; // Add R53 to each one
                        repoConn.references["R368"] += commonValue5; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey11] == 1) {
                        repoConn.references["R38"] += commonValue5;
                        repoConn.references["R41"] += commonValue5;
                        repoConn.references["R72"] += commonValue5;
                        repoConn.references["R76"] += commonValue5; // Add R53 to each one
                        repoConn.references["R363"] += commonValue5; // Add R53 to each one
                        repoConn.references["R366"] += commonValue5; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey11] == 0) {
                        repoConn.references["R44"] += commonValue5;
                        repoConn.references["R47"] += commonValue5;
                        repoConn.references["R80"] += commonValue5;
                        repoConn.references["R84"] += commonValue5; // Add R53 to each one
                        repoConn.references["R372"] += commonValue5; // Add R53 to each one
                        repoConn.references["R369"] += commonValue5; // Add R53 to each one
                    }



                    if (repoConn.answers[answerKey12] == 1) {
                        repoConn.references["R39"] += commonValue5;
                        repoConn.references["R42"] += commonValue5;
                        repoConn.references["R160"] += commonValue5;
                        repoConn.references["R164"] += commonValue5; // Add R53 to each one
                        repoConn.references["R364"] += commonValue5; // Add R53 to each one
                        repoConn.references["R367"] += commonValue5; // Add R53 to each one
                    }
                    if (repoConn.answers[answerKey12] == 0) {
                        repoConn.references["R45"] += commonValue5;
                        repoConn.references["R48"] += commonValue5;
                        repoConn.references["R373"] += commonValue5; // Add R53 to each one
                        repoConn.references["R168"] += commonValue5;
                        repoConn.references["R172"] += commonValue5; // Add R53 to each one
                        repoConn.references["R370"] += commonValue5; // Add R53 to each one
                    }
                }



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
sortElementsByClass("con1", "bg-primary", false);
sortElementsByClass("con2", "bg-info", true);
                }, [])





    return (
            <>
                <div id="First" >
                <div id='Cover' className='Cover'>
                    <img className='ImgReport' src={Cover} alt="ReportImge" />
                    <div className='BigCover'>
                        <div className='Tilte'>
                            <span>{repoConn.referencess ? repoConn.referencess[0]["Ar content"] : ""}</span>
                        </div>
                        <div className='DivLogo'>
                                <div className='Logo'>
                                    <LogoBlu />
                                </div>
                                <span>{repoConn.referencess ? repoConn.referencess[1]["Ar content"] : ""}</span>
                        </div>
                        <div className='PersonDetils'>
                            <span>Mohamed Nashat</span>
                            <span>2023/9/3</span>
                        </div>
                    </div>
                </div>
                <div className='Intro'>
                    <img className='ImgReport' src={EmpatyPageSmallAside} alt="ReportImge" />
                    <div className='AsidLogo'>
                        <LogoBlu />
                    </div>
                    <div className='IntroBatrn'>
                        <div className="StrepCountaner">
                        <div>{repoConn.referencess ? repoConn.referencess[2]["Ar content"] : ""}</div>
                        </div>
                    </div>
                    <div className='IntroText'>
                        <div className='Text'>
                        {repoConn.referencess ? repoConn.referencess[3]["Ar content"] + " "+ repoConn.referencess[4]["Ar content"]: ""}
                        </div>
                    </div>
                </div>
                <div className='catalogue'>
                    <img className='ImgReport' src={EmpatyPageBigAside} alt="ReportImge" />
                    <div className='AsidLogo'>
                        <LogoBlu />
                    </div>
                    <div className='IntroBatrn'>
                        <div className="StrepCountaner">
                        <div> التقرير</div>
                        </div>
                    </div>                
                    <div className='cataloguePhrase'>
                        <div className='Phrase'>
                            <div className='Number'> -1</div>
                            <div className='Text'>الرسم البياني العام</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -2</div>
                            <div className='Text'>الرسم البياني العام للمهارات المؤسسية</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -3</div>
                            <div className='Text'>أبرز المهارات المؤسسية (التخطيطية - التلقائية)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -4</div>
                            <div className='Text'>أبرز المهارات المؤسسية (الشمولية - التركيزية)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -5</div>
                            <div className='Text'>أبرز المهارات المؤسسية (العلمية - الخبراتية)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -6</div>
                            <div className='Text'>أبرز المهارات المؤسسية (التحققية - الاستنزافية)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -7</div>
                            <div className='Text'>الرسم البياني العام للمنظور المؤسسي</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -8</div>
                            <div className='Text'>تقييم المنظور المؤسسي (التخطيطي - التلقائي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -9</div>
                            <div className='Text'>تقييم المنظور المؤسسي (الشمولي - التركيزي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -10</div>
                            <div className='Text'>تقييم المنظور المؤسسي (العلمي - الخبراتي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -11</div>
                            <div className='Text'>تقييم المنظور المؤسسي (التحققي - الاستنزافي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -12</div>
                            <div className='Text'>الرسم البياني العام للسلوك المؤسسي</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -13</div>
                            <div className='Text'>تقييم السلوك المؤسسي (التخطيطي - التلقائي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -14</div>
                            <div className='Text'>تقييم السلوك المؤسسي (الشمولي - التركيزي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -15</div>
                            <div className='Text'>تقييم السلوك المؤسسي (العلمي - الخبراتي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -16</div>
                            <div className='Text'>تقييم السلوك المؤسسي (التحققي - الاستنزافي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -17</div>
                            <div className='Text'>الرسم البياني لمزيج المهارات والمنظور والسلوك المؤسسي (التخطيطي - التلقائي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -18</div>
                            <div className='Text'>مزيج المهارات والمنظور والسلوك المؤسسي (التخطيطي - التلقائي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -19</div>
                            <div className='Text'>الرسم البياني لمزيج المهارات والمنظور والسلوك المؤسسي (الشمولي - التركيزي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -20</div>
                            <div className='Text'>مزيج المهارات والمنظور والسلوك المؤسسي (الشمولي - التركيزي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -21</div>
                            <div className='Text'>الرسم البياني لمزيج المهارات والمنظور والسلوك المؤسسي (العلمي - الخبراتي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -22</div>
                            <div className='Text'>مزيج المهارات والمنظور والسلوك المؤسسي (العلمي - الخبراتي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -23</div>
                            <div className='Text'>الرسم البياني لمزيج المهارات والمنظور والسلوك المؤسسي (التحققي - الاستنزافي)</div>
                        </div>
                        <div className='Phrase'>
                            <div className='Number'> -24</div>
                            <div className='Text'>مزيج المهارات والمنظور والسلوك المؤسسي (التحققي - الاستنزافي)</div>
                        </div>
                    </div>
                    <div className='LastText'>{repoConn.referencess && repoConn.referencess[16]["Ar content"]}</div>
                </div>
                <div className='GenralBigText'>
                    <img className='ImgReport' src={EmpatyPage} alt="ReportImge" />
                    <div className='AsidLogo'>
                        <LogoBlu />
                    </div>
                    <div className='IntroBatrn'>
                        <div className="StrepCountaner">
                        <div>الوصف العام</div>
                        </div>
                    </div>                
                    <div className='BigText'>
                    يتمتع شادي بالعديد من السمات الشخصية والعملية التي تجعله بارزاً في إدارة المؤسسات. يتميز برؤية استراتيجية 
    ومهارات إدارية تساعده على تحقيق أهداف المؤسسة بنجاح والتأقلم مع التغيرات المستمرة في السوق 
    والمنافسة.
    <br />
    أحد أبرز سمات شادي هي التركيز على تحقيق أقصى أرباح ممكنة للمؤسسة. يقوم بتوجيه أنشطة المؤسسة 
    بطريقة تضمن تحقيق الأهداف الربحية والمالية. يعتمد على خبرات المدراء لتشغيل المؤسسة بكفاءة عالية 
    ويعتمد على كفاءة الأفراد لتحقيق هذه الأهداف.
    <br />
    بالإضافة إلى ذلك، يظهر شادي قدرة فائقة على التعامل مع المخاطر المؤسسية فور وقوعها، مما يساعد في 
    الحفاظ على استقرار المؤسسة وتفادي التأثيرات السلبية. كما يهتم برصد الفرص السوقية المتاحة ويتبنى رؤية 
    استراتيجية كبيرة للمؤسسة.
    <br/>
    ُ شادي يدير الشركة بشكل شمولي، ويتعامل بحكمة مع متغيرات إدارات مختلفة داخل المؤسسة، حيث يفهم 
    عملية التشغيل في كل قسم بعمق وتفاصيله. ويسعى لبناء هيكل متكامل من الأفراد القادرين على دعم وتحقيق 
    أهداف المؤسسة بفعالية.
    <br />
    يضع شادي خططاً داعمة للمؤسسة ويتابع عوامل الأداء الداخلية والخارجية المؤثرة عليها بشكل مستمر، ويتمكن 
    من موازنة مصالح المؤسسة والمساهمين والعملاء والموظفين بذكاء لضمان تحقيق أهدافها بأقل تكلفة ممكنة.
    تع ُ تمد إدارته على الخبرات المتراكمة والتجارب السابقة للأفراد، حيث يدار المشروع بتوجيهات إدارية ومركزية. 
    وعلاوة على ذلك، يثق بكفاءة الأفراد ويحفزهم للتركيز على إتمام المهام بنجاح وتحقيق الأهداف المرجوة.
    يتحلى شادي بمفهوم الدعم المستمر للأفراد والإدارات، حيث يوجه جهودهم للتركيز على تحقيق الأهداف 
    ً على ً مدى تحقيقهم للأهداف المرجوة، مما يساهم في رفع كفاءة الإدارات تبعا 
    المرجوة. ويقيم أداء الأفراد بناء
    لمراحل نمو المؤسسة.
    <br />
    تتسم إدارة شادي بالتجربة والخطأ، حيث يقترح ويطبق الحلول والأفكار الجديدة ويتعلم من التجارب السابقة. 
    يستفيد من المعادلات الناجحة المتبعة عادة لتحقيق النجاح ويسخِّ ر كافة الموارد الممكنة لتحقيق أهداف 
    المؤسسة.
    <br/>
    يظهر شادي قدرة فائقة على استيعاب الخسائر الناتجة عن مخاطر وصعوبات التشغيل، مما يمكنه من الاحتفاظ 
    بالثقة في المؤسسة والمواصلة في سبيل تحقيق أهدافها.
    في النهاية، يتميز شادي بقدرته على مراقبة الأفراد وتوجيه مجهودهم للتركيز على إتمام المهام بنجاح وتحقيق 
    الأهداف المرجوة. ويهتم بتقييم الأفراد على أساس تحقيق الأهداف والمحصلة النهائية لأداء المؤسسة بشكل 
    عام. تنظر إدارته بالمستقبل وتهدف إلى تحقيق النمو المستدام والاستمرارية في السوق التنافسية
                    </div>
                </div>
                <div className='ManyGraphs-1'>
                    <img className='ImgReport' src={ManyGraph} alt="ReportImge" />
                    <div className='AsidLogo'>
                        <LogoBlu />
                    </div>
                    <div className='IntroBatrn'>
                        <div className="StrepCountaner">
                        <div>{repoConn.referencess && repoConn.referencess[27]["Ar content"]}</div>
                        </div>
                    </div>                
                    <div className="Graph-1 ">
                        <div className="TopBox">
                            <div> 
                                <span >{repoConn.referencess && repoConn.referencess[33]["Ar content"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.referencess && repoConn.referencess[37]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[36]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[35]["Ar content"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.references["R15"]}</span>
                                <span>{repoConn.references["R14"]}</span>
                                <span>{repoConn.references["R13"]}</span>
                            </div>
                        </div>
                        <div className="Graph-Top-1">
                            <canvas className="Canvas" width={25} height={repoConn.references["R18"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R17"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R16"]} />
                        </div>
                        <div className="Graph-Bottom-1">
                            <canvas className="Canvas" width={25} height={repoConn.references["R24"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R23"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R22"]} />
                        </div>
                        <div className="BottomBox">
                            <div>
                                <span>{repoConn.references["R21"]}</span>
                                <span>{repoConn.references["R20"]}</span>
                                <span>{repoConn.references["R19"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.referencess && repoConn.referencess[42]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[41]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[40]["Ar content"]}</span>
                            </div>
                            <div> 
                                <span >{repoConn.referencess && repoConn.referencess[34]["Ar content"]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="Graph-2">
                    <div className="TopBox">
                            <div> 
                                <span >{repoConn.referencess && repoConn.referencess[28]["Ar content"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.referencess && repoConn.referencess[31]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[31]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[30]["Ar content"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.references["R3"]}</span>
                                <span>{repoConn.references["R2"]}</span>
                                <span>{repoConn.references["R1"]}</span>
                            </div>
                        </div>
                    <div className="Graph-Top-1">
                            <canvas className="Canvas" width={25} height={repoConn.references["R6"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R5"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R4"]} />
                        </div>
                        <div className="Graph-Bottom-1">
                            <canvas className="Canvas" width={25} height={repoConn.references["R12"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R11"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R10"]} />
                        </div>
                        <div className="BottomBox">
                            <div>
                                <span>{repoConn.references["R9"]}</span>
                                <span>{repoConn.references["R8"]}</span>
                                <span>{repoConn.references["R7"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.referencess && repoConn.referencess[31]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[31]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[30]["Ar content"]}</span>
                            </div>
                            <div> 
                                <span >{repoConn.referencess && repoConn.referencess[29]["Ar content"]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="Graph-3">
                    <div className="TopBox">
                            <div> 
                                <span >{repoConn.referencess && repoConn.referencess[43]["Ar content"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.referencess && repoConn.referencess[47]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[46]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[45]["Ar content"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.references["R39"]}</span>
                                <span>{repoConn.references["R38"]}</span>
                                <span>{repoConn.references["R37"]}</span>
                            </div>
                        </div>
                    <div className="Graph-Top-1">
                            <canvas className="Canvas" width={25} height={repoConn.references["R42"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R41"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R40"]} />
                        </div>
                        <div className="Graph-Bottom-1">
                            <canvas className="Canvas" width={25} height={repoConn.references["R48"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R47"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R46"]} />
                        </div>
                        <div className="BottomBox">
                            <div>
                                <span>{repoConn.references["R45"]}</span>
                                <span>{repoConn.references["R44"]}</span>
                                <span>{repoConn.references["R43"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.referencess && repoConn.referencess[47]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[46]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[45]["Ar content"]}</span>
                            </div>
                            <div> 
                                <span >{repoConn.referencess && repoConn.referencess[44]["Ar content"]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="Graph-4">
                    <div className="TopBox">
                            <div> 
                                <span >{repoConn.referencess && repoConn.referencess[38]["Ar content"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.referencess && repoConn.referencess[42]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[41]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[40]["Ar content"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.references["R27"]}</span>
                                <span>{repoConn.references["R26"]}</span>
                                <span>{repoConn.references["R25"]}</span>
                            </div>
                        </div>
                    <div className="Graph-Top-1">
                            <canvas className="Canvas" width={25} height={repoConn.references["R30"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R29"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R28"]} />
                        </div>
                        <div className="Graph-Bottom-1">
                            <canvas className="Canvas" width={25} height={repoConn.references["R36"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R35"]} />
                            <canvas className="Canvas" width={25} height={repoConn.references["R34"]} />
                        </div>
                        <div className="BottomBox">
                            <div>
                                <span>{repoConn.references["R33"]}</span>
                                <span>{repoConn.references["R32"]}</span>
                                <span>{repoConn.references["R31"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.referencess && repoConn.referencess[42]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[41]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[40]["Ar content"]}</span>
                            </div>
                            <div> 
                                <span >{repoConn.referencess && repoConn.referencess[39]["Ar content"]}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='SkillsScoCover'>
                    <img className='ImgReport' src={ScoCover} alt="ReportImge" />
                    <div className='AsidLogo'>
                        <Logowhit />
                    </div>
                    <div className="Text">{repoConn.referencess && repoConn.referencess[48]["Ar content"]}</div>
                </div>
                <div className='BigOneGraph-1'> 
                    <img className='ImgReport' src={BigOneGraph} alt="ReportImge" />
                    <div className='AsidLogo'>
                        <LogoBlu />
                    </div>
                    <div className='IntroBatrn'>
                        <div className="StrepCountaner">
                        <div>{repoConn.referencess && repoConn.referencess[49]["Ar content"]}</div>
                        </div>
                    </div>                <div className="Graph-1 ">
                        <div className="TopBox">
                            <div></div>
                            <div>
                                <span>{repoConn.referencess && repoConn.referencess[54]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[53]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[52]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[51]["Ar content"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.references["R52"]}</span>
                                <span>{repoConn.references["R51"]}</span>
                                <span>{repoConn.references["R50"]}</span>
                                <span>{repoConn.references["R49"]}</span>
                            </div>
                        </div>
                        <div className="Graph-Top-1">
                            <canvas className="Canvas" width={50} height={repoConn.references["R56"]} />
                            <canvas className="Canvas" width={50} height={repoConn.references["R55"]} />
                            <canvas className="Canvas" width={50} height={repoConn.references["R54"]} />
                            <canvas className="Canvas" width={50} height={repoConn.references["R53"]} />
                        </div>
                        <div className="Graph-Bottom-1">
                            <canvas className="Canvas" width={50} height={repoConn.references["R64"]} />
                            <canvas className="Canvas" width={50} height={repoConn.references["R63"]} />
                            <canvas className="Canvas" width={50} height={repoConn.references["R62"]} />
                            <canvas className="Canvas" width={50} height={repoConn.references["R61"]} />
                        </div>
                        <div className="BottomBox">
                            <div>
                                <span>{repoConn.references["R60"]}</span>
                                <span>{repoConn.references["R59"]}</span>
                                <span>{repoConn.references["R58"]}</span>
                                <span>{repoConn.references["R57"]}</span>
                            </div>
                            <div>
                                <span>{repoConn.referencess && repoConn.referencess[55]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[56]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[57]["Ar content"]}</span>
                                <span>{repoConn.referencess && repoConn.referencess[58]["Ar content"]}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='GoodSkillEmpty'>
                    <img className='ImgReport' src={EmpatyPage} alt="ReportImge" />
                    <div className='AsidLogo'>
                        <LogoBlu />
                    </div>
                    <div className='IntroBatrn'>
                        <div className="StrepCountaner">
                        <div>{repoConn.referencess && repoConn.referencess[59]["Ar content"]}</div>
                        </div>
                    </div>                
                    <h1 className='H1Text'>
                    {repoConn.referencess && repoConn.referencess[91]["Ar content"]}
                    </h1>
                    <div className='BigText'>
                    {repoConn.answers["111"] == 1 ? repoConn.referencess && repoConn.referencess[84]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[85]["Ar content"]}
                    <br />
                    {repoConn.answers["112"] == 1 ? repoConn.referencess && repoConn.referencess[86]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[87]["Ar content"]}
                    <br />
                    {repoConn.answers["113"] == 1 ? repoConn.referencess && repoConn.referencess[88]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[89]["Ar content"]}
                    <br />
                    {repoConn.answers["114"] == 1 ? repoConn.referencess && repoConn.referencess[90]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[91]["Ar content"]}
                    <br />
                    {repoConn.answers["115"] == 1 ? repoConn.referencess && repoConn.referencess[92]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[93]["Ar content"]}
                    <br />
                    {repoConn.answers["116"] == 1 ? repoConn.referencess && repoConn.referencess[94]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[95]["Ar content"]}
                    <br />
                    {repoConn.answers["117"] == 1 ? repoConn.referencess && repoConn.referencess[96]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[97]["Ar content"]}
                    <br />
                    {repoConn.answers["118"] == 1 ? repoConn.referencess && repoConn.referencess[98]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[99]["Ar content"]}
                    <br />
                    {repoConn.answers["119"] == 1 ? repoConn.referencess && repoConn.referencess[100]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[101]["Ar content"]}
                    <br />
                    </div>
                </div>
                <div className='ManyPhraseInSkills-1'>
                    <img className='ImgReport' src={ManyPhrase} alt="ReportImge" />
                    <div className='AsidLogo'>
                        <LogoBlu />
                    </div>
                    <div className='IntroBatrn'>
                        <div className="StrepCountaner">
                        <div>{repoConn.referencess && repoConn.referencess[59]["Ar content"]}</div>
                        </div>
                    </div>                
                    <div className='SmallIntroBatrn'>{repoConn.referencess && repoConn.referencess[70]["Ar content"]}</div>
                    <div className="ManyPhraseBox">
                    <div id="con1" className=" con1">
                        <div className={repoConn.answers["111"] == 1 ? "bg-primary PhraseText text-white" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[72]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["112"] == 1 ? "bg-primary PhraseText text-white" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[73]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["113"] == 1 ? "bg-primary PhraseText text-white" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[74]["Ar content"]}</span>
                        </div>
                         
                            <div className={repoConn.answers["114"] == 1 ? "bg-primary PhraseText text-white" : "PhraseText"}>
                                <span >{repoConn.referencess && repoConn.referencess[75]["Ar content"]}</span>
                            </div>
                            <div className={repoConn.answers["115"] == 1 ? "bg-primary PhraseText text-white" : "PhraseText"}>
                                <span >{repoConn.referencess && repoConn.referencess[76]["Ar content"]}</span>
                            </div>
                            <div className={repoConn.answers["116"]  == 1? "bg-primary PhraseText text-white" : "PhraseText"}>
                                <span >{repoConn.referencess && repoConn.referencess[77]["Ar content"]}</span>
                            </div>
                            <div className={repoConn.answers["117"] == 1 ? "bg-primary PhraseText text-white" : "PhraseText"}>
                                <span >{repoConn.referencess && repoConn.referencess[78]["Ar content"]}</span>
                            </div>
                            <div className={repoConn.answers["118"]  == 1 ? "bg-primary PhraseText text-white" : "PhraseText"}>
                                <span >{repoConn.referencess && repoConn.referencess[79]["Ar content"]}</span>
                            </div>
                            <div className={repoConn.answers["119"]  == 1 ? "bg-primary PhraseText text-white" : "PhraseText"}>
                                <span >{repoConn.referencess && repoConn.referencess[80]["Ar content"]}</span>
                            </div>
                            <div id="innerCon1" className="innerCon w-100 bg-primary m-0"></div>
                        </div>
                            <div id="con2" className=" con2">

                            <div className={repoConn.answers["111"]  == 0 ? "bg-info PhraseText text-white" : "PhraseText"}>
                                <span >{repoConn.referencess && repoConn.referencess[81]["Ar content"]}</span>
                            </div>
                            <div className={repoConn.answers["112"]  == 0 ? "bg-info PhraseText text-white" : "PhraseText"}>
                                <span >{repoConn.referencess && repoConn.referencess[82]["Ar content"]}</span>
                            </div>
                            <div className={repoConn.answers["113"]  == 0 ? "bg-info PhraseText text-white" : "PhraseText"}>
                                <span >{repoConn.referencess && repoConn.referencess[83]["Ar content"]}</span>
                            </div>
                        <div className={repoConn.answers["114"]  == 0 ? "bg-info PhraseText text-white" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[84]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["115"]  == 0 ? "bg-info PhraseText text-white" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[85]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["116"]  == 0 ? "bg-info PhraseText text-white" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[86]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["117"]  == 0 ? "bg-info PhraseText text-white" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[87]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["118"]  == 0 ? "bg-info PhraseText text-white" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[88]["Ar content"]}</span>
                        </div>
                        <div className={repoConn.answers["119"]  == 0 ? "bg-info PhraseText text-white" : "PhraseText"}>
                            <span >{repoConn.referencess && repoConn.referencess[89]["Ar content"]}</span>
                        </div>
                            </div>
                    </div>
                    <div className='SmallIntroBatrnBottom'>{repoConn.referencess && repoConn.referencess[71]["Ar content"]}</div>

                </div>
                <div className='Empaty-3Report1'>
                    <img className='ImgReport' src={EmpatyPage} alt="Reportimg" />
                    <div className='AsidLogo'>
                        <LogoBlu />
                    </div>
                    <div className='IntroBatrn'>
                        <div className="StrepCountaner">
                        <div>{repoConn.referencess && repoConn.referencess[90]["Ar content"]}</div>
                        </div>
                    </div>                
                    <h1 className='H1Text'>
                    {repoConn.referencess && repoConn.referencess[91]["Ar content"]}
                    </h1>
                    <div className='BigText'>
                    {repoConn.answers["121"] == 1 ? repoConn.referencess && repoConn.referencess[127]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[128]["Ar content"]}
                    <br />
                    {repoConn.answers["122"] == 1 ? repoConn.referencess && repoConn.referencess[129]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[130]["Ar content"]}
                    <br />
                    {repoConn.answers["123"] == 1 ? repoConn.referencess && repoConn.referencess[134]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[135]["Ar content"]}
                    <br />
                    {repoConn.answers["124"] == 1 ? repoConn.referencess && repoConn.referencess[136]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[137]["Ar content"]}
                    <br />
                    {repoConn.answers["125"] == 1 ? repoConn.referencess && repoConn.referencess[138]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[139]["Ar content"]}
                    <br />
                    {repoConn.answers["126"] == 1 ? repoConn.referencess && repoConn.referencess[140]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[141]["Ar content"]}
                    <br />
                    {repoConn.answers["127"] == 1 ? repoConn.referencess && repoConn.referencess[142]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[143]["Ar content"]}
                    <br />
                    {repoConn.answers["128"] == 1 ? repoConn.referencess && repoConn.referencess[144]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[145]["Ar content"]}
                    <br />
                    {repoConn.answers["129  "] == 1 ? repoConn.referencess && repoConn.referencess[146]["Ar content"] 
                    : repoConn.referencess && repoConn.referencess[147]["Ar content"]}
                    <br />
                    </div>
                </div>
                </div>
            </>
    )
}

export default Report1