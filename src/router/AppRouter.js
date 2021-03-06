import React, {useEffect} from "react";

import {Router, Route, Switch, Redirect} from "react-router-dom";
import {createBrowserHistory} from 'history';

import Header from "../components/BasicArea/Header";
import MainContent from "../components/BasicArea/MainContent";
import Footer from "../components/BasicArea/Footer";

import HomePage from "../components/HomePage/HomePage";
import LoadingPage from "../utils/loading/LoadingPage";
import ProductPage from "../components/ProductPage/ProductPage";
import UploadProductPage from "../components/UploadProductPage/UploadProductPage";
import LoginPage from "../components/UserPage/LoginPage";
import RegisterPage from "../components/UserPage/RegisterPage";

import MyCartPage from "../components/MyCartPage/MyCartPage";
import MyChatPage from "../components/MyChatPage/MyChatPage";
import MyPurchase from "../components/MyPurchase/MyPurchase";


import NewsComp from "../components/news/NewsComp";
import HeaderComp from "../components/BasicArea/HeaderComp";

import FunctionComp from "../components/function/FunctionComp";
import ProblemSolveComp from "../components/problem/ProblemSolveComp";
import GameComp from "../components/function/GameComp/GameComp";
import NewsCreateComp from "../components/news/NewsCreateComp";
import CalculatorComp from "../components/function/CalculatorComp";
import JournalComp from "../components/journal/JournalComp";
import ResumeComp from "../components/resume/ResumeComp";
import YouTubeCloning from "../components/function/YouTubeCloning/YouTubeCloning";
import ShoppingComp from "../components/function/ShoppingComp/ShoppingComp";
import TodoListComp from "../components/function/TodoListComp/TodoListComp";
import SideBar from "../components/BasicArea/SideBar";





export const customHistory = createBrowserHistory();

function AppRouter() {

    useEffect(() => {
        // Background Music Action 추가
        //const backgroundMusic = document.querySelector('#bgmAudio');
        //backgroundMusic.volume = 0.2;
        //backgroundMusic.autoPlay = false;
        //backgroundMusic.play();
    }, [])

    return (
        <>
        <Router history={customHistory}>
            <LoadingPage clearTime={6000} infoText={"무료 Cloud 서비스를 사용하기 때문에, 여유를 갖고 비동기 처리를 기다려주세요 ^^"}/>
            <Header/>
            {/*<HeaderComp/> */}
            <MainContent id="content">
                <SideBar/>
                    <Switch>
                        <Route exact path ="/" component={HomePage}/>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/register" component={RegisterPage}/>
                        <Route exact path="/uploadproduct" component={UploadProductPage}/>
                        <Route exact path={"/product/:id"} component={ProductPage}/>
                        <Route exact path="/mycart" component={MyCartPage}/>
                        <Route exact path="/mychat" component = {MyChatPage}/>
                        <Route exact path="/history" component = {MyPurchase}/>

                        {/* 하단은 기존에 연습한 내용 */}
                        <Route exact path="/resume" component={ResumeComp}/>
                        <Route exact path="/journals" component={JournalComp}/>
                        <Route exact path="/news" component={NewsComp}/>
                        <Route exact path="/news/create" component={NewsCreateComp}/>
                        <Route exact path={"/news/edit/:id"} component={NewsCreateComp}/>
                        <Route exact path="/functions" component={FunctionComp}/>
                        <Route exact path="/functions/calculator" component={CalculatorComp}/>
                        <Route exact path="/functions/game" component={GameComp}/>
                        <Route exact path="/functions/youtube" component={YouTubeCloning}/>
                        <Route exact path="/functions/shopping" component={ShoppingComp}/>
                        <Route exact path="/functions/todolist" component={TodoListComp}/>
                        <Route exact path="/problems" component={ProblemSolveComp}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                <Footer/>
            </MainContent>
        </Router>
        </>
    )
}

export default AppRouter;

{/*
        document.addEventListener("click", ()=>{
            backgroundMusic.play();
        })
        */
}


// Move the content section in accordance with height of the navbar
{/*
        const navbar = document.querySelector("#navbar");
        const content = document.querySelector("#content");
        window.addEventListener("resize", ()=> {
            if(navbar.matches(".active")) {
                const heightOffset = navbar.clientHeight;
                content.style.transform = `translateY(${heightOffset}px)`;
            }
        })
        */
}