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
    margin-left: 10px;
    position: relative;
    overflow-x: scroll;
    display: flex;
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

    const [previewState, setPreview] = useState([]);

    const onDropHander = acceptedFiles => {
        console.log(acceptedFiles);
        console.log([...acceptedFiles]);

        const formData = new FormData();
        // append 하나씩 acceptedFiles 배열의 element들을 append해줘야함
        for(let i  = 0; i < acceptedFiles.length; i++)
            formData.append('files', acceptedFiles[i]);

        const config = {
            header: {
                'content-type' : 'multipart/form-data'
            }
        }
        console.log(formData);

        uploadImage(formData, config).then(imageList => {
            console.log(imageList);

            if (imageList) {
                alert("good!");
                setPreview(imageList);
            }
            else {
                alert("bad!");
            }
        })
    };

    const onClickPreviewHandler = (removingKey) => {
        setPreview(previewState.filter((image)=>image.key !== removingKey));
    }

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
                {previewState
                && previewState.map((image) =>
                    (<img onClick = { () => onClickPreviewHandler(image.key)} key = {image.key} src={`data:image/png;base64,${image.imageByteData}`} style={{ width: "100%", height: "100%"}} />)
                )
                }
            </DropZoneAreaPreview>
        </DropZoneWrapper>
    )
}

export default FileDropZone;