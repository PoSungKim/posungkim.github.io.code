import React, {useEffect, useState} from "react";
import PageWrapper from "../UserPage/Frame/PageWrapper";
import InputWithLabel from "../UserPage/Frame/InputWithLabel";
import LinkButton from "../UserPage/Frame/LinkButton";
import {useDispatch} from "react-redux";
import FileDropZone from "./Frame/FileDropZone";

const initialState = {
    images: [],
    title: '',
    content: '',
    price : '',
    continent: 'Asia',
}

const continents = [
    {key: 1, value: "Africa"},
    {key: 2, value: "Europe"},
    {key: 3, value: "Asia"},
    {key: 4, value: "North America"},
    {key: 5, value: "South America"},
    {key: 6, value: "Australia"},
    {key: 7, value: "Antarctica"},
]

const UploadProductPage = () => {
    const dispatch = useDispatch();

    const [formState, setForm] = useState(initialState);
    const {images, title, content, price, continent} = formState;

    const onChangeHandler = (event) => {
        setForm({
            ...formState,
            [event.target.name]: event.target.value,
        });
    }

    const onClickHandler = () => {
        dispatch();
    }

    const onKeyPressHandler= (event) => {
        if (event.key == "Enter")
            onClickHandler()
    };

    const imagesStateRefreshHandler = (images) => {
        setForm({
            ...formState,
            images,
        })
    }
    console.log(formState);
    return (
        <>
            <PageWrapper info = {"Share Your Travel Plan"}>
                <FileDropZone imagesStateRefreshHandler={imagesStateRefreshHandler}/>

                <InputWithLabel infoType="input"    type = "text"    label="제목" name="title"   placeholder="제목을 적어주세요"  value = {title}     onChange = {onChangeHandler} onKeyPress = {onKeyPressHandler} />
                <InputWithLabel infoType="textArea"                  label="설명" name="content" placeholder="설명을 적어주세요"  value = {content}   onChange = {onChangeHandler} onKeyPress = {onKeyPressHandler} />
                <InputWithLabel infoType="input"    type = "number"  label="가격" name="price"                               value = {price}     onChange = {onChangeHandler} onKeyPress = {onKeyPressHandler} />
                <InputWithLabel infoType="select"                    label="장소" name="continent"                           value = {continent} onChange = {onChangeHandler}>
                    {continents.map(
                            (continent) =>
                                (<option key = {continent.key} value={continent.value}>
                                    {continent.value}
                                </option>)
                        )
                    }
                </InputWithLabel>

                <LinkButton content="등록" width = "100%" />
            </PageWrapper>
        </>
    );
}

export default UploadProductPage;