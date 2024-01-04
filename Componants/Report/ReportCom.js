import React, { createContext, useContext, useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import { PDFDocument } from 'pdf-lib'
import Report1 from './JS/Report1';
import Report2 from './JS/Report2';
import Report3 from './JS/Report3';
import Report4 from './JS/Report4';
import Report5 from './JS/Report5';
import "./CSS/Report1.css"
import "./CSS/Report2.css"
import "./CSS/Report3.css"
import "./CSS/Report4.css"
import "./CSS/Report5.css"
import "./CSS/GlopalReport.css"
import { saveAs } from 'file-saver';
import axios from "axios"
// import axios from 'axios';
export const repoCon = createContext(null);

const GenerateAndMergePDFs = () => {

    // Start Convert Page to PDFs And Marge them In One PDF And Send It To Server
    
    
    const [pdfs, setPdfs] = useState([]);
    const [referencess, setReferences] = useState();
    const [answers, setAnswers] = useState();
    const [template, setTemplate] = useState();
    const [references, setReferencess] = useState([]);

    const generateAndMergePDF = async () => {
        const htmlContents = Array.from(document.querySelectorAll('.pdf-container'));
        
        const generatedPdfs = await Promise.all(
            htmlContents.map(async (htmlContent, index) => {
                const dataUrl = await generatePdfFromHtml(htmlContent);
                return await convertDataUrlToPdf(dataUrl, index);
            })
            );
            
            const mergedPdfBytes = await mergePdfs(generatedPdfs);
            
            // Handle the merged PDF as needed (e.g., display or save)
    // console.log('Merged PDF:', mergedPdfBytes);

    const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
    saveAs(blob, 'merged.pdf');
    
    // Update the state or perform any other actions if needed
    setPdfs(generatedPdfs);
};
    //First Main Function To Send PDF To Server

    const sendPdfToServer = async (pdfBytes, dynamicId) => {
        try {
            // Create a FormData object to send the PDF as a file
            const formData = new FormData();
            const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
            formData.append('pdfFile', pdfBlob, `Twindix-Report-${dynamicId}.pdf`);
            
            // Make a POST request to your server endpoint
            const response = await fetch('https://reqres.in/api/users?page=2', {
                method: 'POST',
                body: formData,
            });
            
            // Handle the server response
            if (response.ok) {
                console.log('PDF successfully sent to the server with dynamic ID:', dynamicId);
                console.log(pdfBytes);
            } else {
                console.error('Failed to send PDF to the server');
            }
        } catch (error) {
            console.error('Error sending PDF to the server:', error);
        }
    };
    

  // The rest of your functions remain unchanged


    const generatePdfFromHtml = async (htmlContent) => {
        const canvas = await html2canvas(htmlContent);
        return canvas.toDataURL('image/png');
        };
    
    const convertDataUrlToPdf = async (dataUrl, index) => {
        const pdfDoc = await PDFDocument.create();
        const image = await pdfDoc.embedPng(dataUrl);
        const page = pdfDoc.addPage([image.width, image.height]);
        const { width, height } = page.getSize();
        page.drawImage(image, {
            x: 0,
            y: 0,
            width,
            height,
        });
        return pdfDoc.save();
    };
    
    const mergePdfs = async (pdfArray) => {
        const mergedPdf = await PDFDocument.create();
        
        for (const pdfBytes of pdfArray) {
            const pdfDoc = await PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    
    return mergedPdf.save();
};


            //Function To Handeled All Function 
            let HandlingFun = () => {
                let dynamicId = new Date().getTime(); // You can use a more sophisticated method for generating dynamic IDs
                let PDF = generateAndMergePDF();
                sendPdfToServer(PDF, dynamicId);
            };
            let numsArray = [];
            function arrayCreator(ourReferences) {
                for(let i = 1; i <= 400; i++) {
                    ourReferences['R' + i] = 0;
                }
                setReferencess(ourReferences)
                console.log(references);
                console.log(ourReferences);
            }

            useEffect(() => {
                const searchParams = new URLSearchParams(window.location.search);
                const enroId = searchParams.get("enro_id");
                const examId = searchParams.get("exam_id");
                const isAdminPara = searchParams.get("isAdmin");
                arrayCreator(numsArray)
                axios.get("https://api.twindix.com/exams/"+ examId , { headers: {
                    Authorization: "Bearer " + localStorage.token
                }}).then(res => {
                    console.log(res.data)
                    setReferences(res.data.payload.template.references);
                })
                if(isAdminPara == 1) {
                    axios.get("https://api.twindix.com/dashboard/enrollments/" + enroId, {headers: {
                        Authorization: "Bearer " + localStorage.token
                    }}).then((res) => setAnswers(res.data.payload.answers))
                } else {
                    axios.get("https://api.twindix.com/enrollments/" + enroId, {headers: {
                        Authorization: "Bearer " + localStorage.token
                    }}).then((res) => setAnswers(res.data.payload.answers))
                }
            }, []);
            // End Convert Page to PDFs And Marge them In One PDF And Send It To Server
            
            return (
                <>
                {references ? 
                    <div>
        <h1>{references}</h1>
        <button onClick={HandlingFun}>Generate and Merge PDFs</button>
        <repoCon.Provider value={{referencess, answers, references}}>
        {answers && repoCon ? <div  className="PDF" >
            <div id="PDF" className='BackGroundImge' >
                <div className="pdf-container">
                    <Report1 />
                </div>
                <div className="pdf-container">
                    <Report2 />
                </div>
                <div className="pdf-container">
                    <Report3 />
                </div>
                <div className="pdf-container">
                    <Report4 />
                </div>
                <div className="pdf-container">
                    <Report5 />
                </div>
            </div>
        </div> : ""}
        </repoCon.Provider>
    </div>
                    : ""}
                </>
    

);
};

export default GenerateAndMergePDFs;