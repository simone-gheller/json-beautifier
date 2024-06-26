import styled from 'styled-components'
import Editor, { useMonaco } from "@monaco-editor/react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Wrapper = styled.div`
    position: absolute;
    height: 47vh;
    width: ${props=>props.mBP?"60vh":"80vh"};
    top: -5%;
    left: 0;
    background-image:url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='28' ry='28' stroke='%23333' stroke-width='18' stroke-dasharray='20%2c 23%2c 8%2c 12' stroke-dashoffset='20' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 28px;
    padding: 15px;
    overflow: visible;
    z-index: 10;

    & p,h2,h3,h4{
        font-style: "Roboto";
        text-align: center;
        margin: auto;
    }

`

const TextDrop= styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  & *{
    flex: 1 1 0
  }

`

const FirstDrop= styled.div`
    position: absolute;
    height: 47vh;
    width: ${props=>props.mBP?"60vh":"80vh"};
    top: -5%;
    left: 0;
    padding: 15px;
    overflow: visible;
    z-index: 10;
    opacity: 0.3;
    pointer-events: none;

    & p,h2,h3,h4{
        font-style: "Roboto";
        text-align: center;
        margin: auto;
    }
`

const Mon= styled.div`
  position: relative;


`
const Layer= styled.div`
  opacity: ${props=>props.isDropActive?'0.15':'1'
  };
`
const Test= styled.div`
    position: absolute;
    height: 47vh;
    width: ${props=>props.mBP?"60vh":"80vh"};
    top: -5%;
    left: 0;
    padding: 15px;
    overflow: visible;
    z-index: 10;
    opacity: 0.3;
    pointer-events: none;
    border: 2px solid #A6A6A6;
    background-color:#E6E6E6;
    border-radius: ${props=>props.isDropActive?"28px":"0px"};
    border: ${props=>props.isDropActive?"0px solid #A6A6A6":"2px solid #A6A6A6"};
`


function Monaco({ formatted, isDropActive, landingDrop, readOnly, update, xsBP, mBP }) {
    return (
        <Mon xsBP={xsBP} >
            {
                isDropActive && (
                    <Wrapper mBP={mBP}>
                        <TextDrop>
                            <h2>Drop here your JSON</h2>
                            <h4>or</h4>
                            <h2>Past your code</h2>
                        </TextDrop>
                    </Wrapper>
                )
            }
            {
                landingDrop && (
                    <FirstDrop mBP={mBP}>
                        <TextDrop>
                            <h2>Drop here your JSON</h2>
                            <h4>or</h4>
                            <h2>Past your code</h2>
                        </TextDrop>
                    </FirstDrop>
                )
            }
            <Test mBP={mBP} isDropActive={isDropActive} />
            <Layer isDropActive={isDropActive}>
                <Editor
                style={{opacity: 0.4}}
                height="45vh"
                width={xsBP?"45vh":mBP?"60vh":"80vh"}
                options = {{
                    readOnly: readOnly,
                    overviewRulerLanes: 0,
                    minimap: { enabled: false },
                    wordWrap: 'wordWrapColumn',
                    wordWrapColumn: 65,
                }}
                automaticLayout='true'
                defaultLanguage="json"
                defaultValue={readOnly?`{
    "hello": "world"
    }`:`{"hello":"world"}`}
                value={formatted}
                onChange={update}
                />
            </Layer>

        </Mon>

    );
  }
  
  export default Monaco;
  