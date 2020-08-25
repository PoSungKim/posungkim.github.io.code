import React, {useEffect, useState} from "react";
import Dropzone from "react-dropzone";
import styled from "styled-components";
import oc from "open-color";
import {uploadPreview} from "../../../_actions/productAction"
import {useDispatch, useSelector} from "react-redux";

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

const DropZoneAreaPreview = styled.div`
    border: 0.5px dashed gray;
    margin-left: 10px;
    position: relative;
    overflow-x: scroll;
    display: flex;
    height: 15rem;
    width: 100%;
`;

const DropZonePreviewImage = styled.img`
    & + & {
        margin-left: 10px;
    }
    border: 1px solid gray;
    height: 100%;
    width: auto;
`;

const FileDropZone = ({imagesStateRefreshHandler}) => {
    const productState = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const [previewState, setPreview] = useState([]);

    const onDropHandler = acceptedFiles => {
        const formData = new FormData();
        // append 하나씩 acceptedFiles 배열의 element들을 append해줘야함
        for(let i  = 0; i < acceptedFiles.length; i++)
            formData.append('files', acceptedFiles[i]);

        const config = {header: {'content-type' : 'multipart/form-data'}};

        dispatch({
            ...uploadPreview(),
            data: formData,
            config: config,
        });
    };

    const onClickPreviewHandler = (removingKey) => {
        const newList = previewState.filter((image)=> image.productImage_id !== removingKey)
        setPreview(newList);
        imagesStateRefreshHandler(newList);
    }

    useEffect(()=>{
        setPreview(productState.uploadProduct.images);
        imagesStateRefreshHandler(productState.uploadProduct.images);
    }, [productState.uploadProduct.images, dispatch]);
    console.log(previewState);

    return (
        <DropZoneWrapper>
            <Dropzone onDrop={onDropHandler}>
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
                    (<DropZonePreviewImage onClick = { () => onClickPreviewHandler(image.productImage_id)} key = {image.productImage_id} src={`data:image/png;base64,${image.imageByteData}`} />))
                }
            </DropZoneAreaPreview>
        </DropZoneWrapper>
    )
}

export default FileDropZone;