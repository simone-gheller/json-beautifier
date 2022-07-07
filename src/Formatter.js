import React, { useEffect, useRef, useState } from 'react'
import {useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import Editor, { useMonaco } from "@monaco-editor/react";
import Monaco from './Monaco';
import loader from "@monaco-editor/loader";
import { saveAs } from 'file-saver';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Flex = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: center;
`
const Box = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: ${props=>props.left?"left":"right"};
    margin-bottom: 35px;
    margin-left: 30px;
`


const Button = styled.button`
    width: 150px;
    height: 50px;
    cursor: pointer;
    background-image: linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%);
    background-image: linear-gradient(to right, #30E8BF 0%, #FF8235  51%, #30E8BF  100%);         
    background-image: linear-gradient(to right, #C33764 0%, #1D2671  51%, #C33764  100%);
    background-image: linear-gradient(to right, #3494E6 0%, #EC6EAD  51%, #3494E6  100%);
    font-family: "Roboto";
    font-weight: 500;
    font-size: 15px;
    padding: 15px 15px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    border-color: transparent;
    display: block;

    &:hover{
        background-position: right center; /* change the direction of the change here */
        color: #fff;
        text-decoration: none;
    }
`

function Formatter() {

    const inputFile = useRef(null)
    const [files, setFiles] = useState('')
    const [landingdrop, setLandingdrop] = useState(true)
    const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
    const [tooltipDownload, setTooltipDownload] = useState(false);
    const [formatted, setFormatted] = useState(null)
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: {
            "application/json": ['.json']
        },
        onDrop: acceptedFiles=>{
            let reader = new FileReader();
            reader.onload = function(e) {
                try {
                    let contents = e.target.result;
                    let obj = JSON.parse(contents)
                    setLandingdrop(false)
                    console.log(obj)
                    console.log(JSON.stringify(obj, undefined, 4))
                    setFiles(contents)
                    setFormatted(JSON.stringify(obj, undefined, 4))
                } catch (error) {
                    
                }

            };
            reader.readAsText(acceptedFiles[0], 'utf-8');
        },
        maxFiles: 1,
        multiple: false
    })

    function update(e){
        setFiles(e)
        setLandingdrop(false)
        try {
            let obj = JSON.parse(e)
            setFormatted(JSON.stringify(obj, undefined, 4))
        } catch (error) {
            return
        }
    }

    function upload(e){
        console.log(e)
        setLandingdrop(false)
        let file = e.target.files[0];
        console.log(file);
        const reader = new FileReader();
        reader.onload = function() {              
            setFiles(reader.result)
            let obj = JSON.parse(reader.result)
            setFormatted(JSON.stringify(obj, undefined, 4))
        }
        reader.readAsText(file);
    }

    function download(){
        if(formatted == null){
            setTooltipDownload(true)
            return;
        }
        saveAs(new Blob([formatted], {type: 'application/json'}),"pretty.json")
    }

    return (
        <Flex>
            <div {...getRootProps()} onClick={(e)=>e.stopPropagation()}>
                <Box left>
                    <div>
                        <Button onClick={() => inputFile.current.click()} >upload a file</Button>
                        <input type="file" ref={inputFile} accept="application/json" style={{"display":"none"}} onChange={upload}/>
                    </div>
                </Box>
                <input {...getInputProps()} />
                <Monaco formatted={files} isDropActive={isDragActive} landingDrop={landingdrop} readOnly={false} update={update} />
            </div>   
            <div>
                <Box right>
                <Tooltip
                    open={tooltipIsOpen}
                    disableHoverListener
                    arrow
                    placement="top"
                    onOpen={() => setTooltipIsOpen(true)}
                    onClose={() => setTooltipIsOpen(false)}
                    title={<Typography fontSize={15}>Copied to the clipboard!</Typography>}>
                        <Button onClick={()=>{navigator.clipboard.writeText(formatted);setTooltipIsOpen(!tooltipIsOpen)}}>copy</Button>
                </Tooltip>
                <Tooltip
                    open={tooltipDownload}
                    disableHoverListener
                    arrow
                    placement="top"
                    onOpen={() => setTooltipDownload(true)}
                    onClose={() => setTooltipDownload(false)}
                    title={<Typography fontSize={15}>No data available</Typography>}>
                        <Button onClick={download} >download</Button>
                </Tooltip>
                    
                </Box>
                <Monaco formatted={formatted} readOnly={true} />
            </div>

        </Flex>
    )
}
  
export default Formatter;
  