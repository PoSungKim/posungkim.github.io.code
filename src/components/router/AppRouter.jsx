import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import NewsComp from "../news/NewsComp";
import HeaderComp from "../basic/HeaderComp";
import FooterComp from "../basic/FooterComp";
import FunctionComp from "../function/FunctionComp";
import ProblemSolveComp from "../problem/ProblemSolveComp";
import GameComp from "../function/GameComp/GameComp";
import NewsCreateComp from "../news/NewsCreateComp";
import CalculatorComp from "../function/CalculatorComp";
import JournalComp from "../journal/JournalComp";
import ResumeComp from "../resume/ResumeComp";
import YouTubeCloning from "../function/YouTubeCloning/YouTubeCloning";
import ShoppingComp from "../function/ShoppingComp/ShoppingComp";
import SideBar from "./SideBar";
import "./AppRouter.scss";

class AppRouter extends React.Component{

    componentDidMount() {
        // Background Music Action 추가
        const backgroundMusic = document.querySelector('#bgmAudio');
        backgroundMusic.autoplay = false;
        backgroundMusic.volume = 0.2;

        {/*
        document.addEventListener("click", ()=>{
            backgroundMusic.play();
        })
        */}


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
        */}
    }

    render() {
        return (
            <div className="router">
                <HeaderComp />
                <main id="content">
                    <SideBar/>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path = "/" component={ResumeComp}/>
                            <Route exact path = "/journals" component={JournalComp}/>
                            <Route exact path = "/news"  component={NewsComp}/>
                            <Route exact path = "/news/create" component={NewsCreateComp}/>
                            <Route exact path = {"/news/edit/:id"}  component={NewsCreateComp}/>
                            <Route exact path = "/functions" component={FunctionComp}/>
                            <Route exact path = "/functions/calculator" component={CalculatorComp}/>
                            <Route exact path = "/functions/game" component={GameComp}/>
                            <Route exact path = "/functions/youtube" component={YouTubeCloning}/>
                            <Route exact path = "/functions/shopping" component={ShoppingComp}/>
                            <Route exact path = "/problems" component={ProblemSolveComp}/>
                            <Redirect from = "*" to="/" />
                        </Switch>
                    </BrowserRouter>
                    <FooterComp/>
                </main>
            </div>
        )
    }
}
export default AppRouter;