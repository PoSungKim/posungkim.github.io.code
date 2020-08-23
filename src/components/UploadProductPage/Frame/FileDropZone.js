import React, {useState} from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import oc from "open-color";
import {uploadImage} from "../../../utils/axios/uploadApi";

const DropZoneWrapper = styled.div`
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
    display: flex;
`;

const DropZoneAreaImage = styled.div`

    border: 1px solid gray;
    position: relative;
    margin-right: 10px;
    height: 15rem;
    width: 100%;
    
    &:hover {
        border: 1px solid ${oc.blue[5]};
    }
    
    
`;

const DropZoneAreaPreview = styled.div`
    border: 0.5px dashed gray;
    position: relative;
    margin-left: 10px;
    height: 15rem;
    width: 100%;
`;

const DropZoneCrossImage = styled.div`
    justify-content: center;
    align-items: center;
    position: absolute;
    display:flex;
    height: 100%;
    width: 100%;
    
    span {
        position: absolute;
        background-color: ${oc.black};
        &:nth-child(1) {
            width: 3rem;
            height: 0.5rem;
        }
        &:nth-child(2) {
            width: 0.5rem;
            height: 3rem;
        }
    }
`

const FileDropZone = () => {

    const [previewState, setPreview] = useState(null);

    const onDropHander = acceptedFiles => {
        console.log(acceptedFiles[0]);

        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        const config = {
            header: {
                'content-type' : 'multipart/form-data'
            }
        }
        console.log(formData);

        uploadImage(formData, config).then(r => {
            console.log(r);

            if (r.data) {
                alert("good!");
                setPreview(r.data);
                console.log(previewState);
            }
            else {
                alert("bad!");
            }
        })
    };

    return (
        <DropZoneWrapper>
            <Dropzone onDrop={onDropHander}>
                {({getRootProps, getInputProps}) => (
                    <DropZoneAreaImage {...getRootProps()}>
                        <DropZoneCrossImage>
                            <span></span>
                            <span></span>
                        </DropZoneCrossImage>
                        <input {...getInputProps()} />
                    </DropZoneAreaImage>
                )}
            </Dropzone>
            <DropZoneAreaPreview>
                {previewState && <img src={`data:image/png;base64,${previewState}`} style={{position: "absolute", width: "100%", height: "100%"}} alt="Preview"/>}
            </DropZoneAreaPreview>
        </DropZoneWrapper>
    )
}

export default FileDropZone;