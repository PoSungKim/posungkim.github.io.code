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
import "./AppRouter.css";
import ShoppingComp from "../function/ShoppingComp/ShoppingComp";

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
                    <aside id="sidebar">
                        <article>
                            <section>
                                <span>안녕하세요, <br/>공부한 기능들을 정리해놓는 포트폴리오 싸이트입니다.</span>
                            </section>
                            <hr/>
                            <section>
                                <span>지속적으로 업데이트될 예정으로, 아낌없는 개발 관련 팁 혹은 조언 부탁드립니다!
                                    <a href="mailto:psungkr94@korea.ac.kr"><strong>(Email 보내기)</strong></a>
                                    <br/> 현재는 정보처리기사 시험 기간으로 개발에 많은 시간을 할해할 수는 없지만!! 얼릉 정보처리기사 자격증을 얻고, 빠르게 다시 개발에 집중하도록 하겠습니다!!! 화이팅!!!
                                </span>
                            </section>
                        </article>
                    </aside>
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
                            <Redirect from = "*" to={ResumeComp}/>
                        </Switch>
                    </BrowserRouter>
                    <FooterComp/>
                </main>
            </div>
        )
    }
}
export default AppRouter;