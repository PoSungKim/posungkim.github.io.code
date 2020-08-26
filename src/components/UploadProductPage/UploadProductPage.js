import React, {useEffect, useState} from "react";
import PageWrapper from "../UserPage/Frame/PageWrapper";
import InputWithLabel from "../UserPage/Frame/InputWithLabel";
import LinkButton from "../UserPage/Frame/LinkButton";
import {useDispatch, useSelector} from "react-redux";
import FileDropZone from "./Frame/FileDropZone";
import {goToHome, goToLogin, uploadAll, uploadRefresh} from "../../_actions/productAction";
import {getContext} from "redux-saga/effects";

const initialState = {
    writer: '',
    title: '',
    content: '',
    price : '$',
    continent: 'Asia',
    images: [],
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
    const productState = useSelector(state=>state.productReducer);
    const userState = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const [formState, setForm] = useState(initialState);
    const {images, title, content, price, continent} = formState;

    const onChangeHandler = (event) => {
        setForm({
            ...formState,
            [event.target.name]: event.target.value,
        });
    }

    const onClickButtonHandler = (event) => {
        event.preventDefault();

        if (!formState.writer ||
            !formState.images ||
            !formState.title ||
            !formState.content ||
            !formState.price ||
            !formState.continent
        )
            return alert("작성하지 않은 항목이 있습니다");

        dispatch({
            ...uploadAll(),
            data: formState,
        });
    }

    const onKeyPressHandler= (event) => {
        if (event.key == "Enter")
            onClickButtonHandler();
    };

    const imagesStateRefreshHandler = (images) => {
        setForm({
            ...formState,
            images,
        })
    }
    useEffect(()=>{
        setForm({
            ...formState,
            writer: userState.login.username,
        })
    }, [userState.login.username, dispatch]);
    console.log(formState);
    if (productState.uploadProduct.isSaved) {
        dispatch(uploadRefresh());
        dispatch(goToHome());
    }
    if (!userState.isLoggedIn) {
        dispatch(goToLogin());
    }

    return (
        <>
            <PageWrapper info = {"Share Your Travel Plan"}>
                <FileDropZone imagesStateRefreshHandler={imagesStateRefreshHandler}/>

                <InputWithLabel infoType="input"    type = "text"    label="제목" name="title"   placeholder="제목을 적어주세요"  value = {title}     onChange = {onChangeHandler} onKeyPress = {onKeyPressHandler} />
                <InputWithLabel infoType="textArea"                  label="설명" name="content" placeholder="설명을 적어주세요"  value = {content}   onChange = {onChangeHandler} onKeyPress = {onKeyPressHandler} />
                <InputWithLabel infoType="input"    type = "text"    label="가격" name="price"                               value = {price}     onChange = {onChangeHandler} onKeyPress = {onKeyPressHandler} />
                <InputWithLabel infoType="select"                    label="장소" name="continent"                           value = {continent} onChange = {onChangeHandler}>
                    {continents.map(
                            (continent) =>
                                (<option key = {continent.key} value={continent.value}>
                                    {continent.value}
                                </option>)
                        )
                    }
                </InputWithLabel>

                <LinkButton content="등록" width = "100%" onClick ={onClickButtonHandler} />
            </PageWrapper>
        </>
    );
}

export default UploadProductPage;