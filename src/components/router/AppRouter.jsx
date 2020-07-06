import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import NewsComp from "../news/NewsComp";
import HeaderComp from "../basic/HeaderComp";
import FooterComp from "../basic/FooterComp";
import FunctionComp from "../function/FunctionComp";
import ProblemSolveComp from "../problem/ProblemSolveComp";
import GameComp from "../function/GameComp/GameComp";
import NewsCreateComp from "../news/NewsCreateComp";
import {Row, Col} from "react-bootstrap";
import ProfileComp from "../profile/ProfileComp";
import CalculatorComp from "../function/CalculatorComp";
import JournalComp from "../journal/JournalComp";
import ResumeComp from "../resume/ResumeComp";
import YouTubeCloning from "../function/YouTubeCloning/YouTubeCloning";
import "./AppRouter.css";

function AppRouter(){
    return (
        <div className="Router">
            <BrowserRouter>
                <HeaderComp />
                <Row>
                    <Col xs={4} md={3}>
                        <ProfileComp/>
                    </Col>
                    <Col xs={12} md={8}>
                        <Switch>
                            <Redirect exact path = "/" to = "/resume" />
                            <Route exact path = "/resume" component={ResumeComp}/>
                            <Route exact path = "/journals" component={JournalComp}/>
                            <Route exact path = "/news"  component={NewsComp}/>
                            <Route exact path = "/news/create" component={NewsCreateComp}/>
                            <Route exact path = {"/news/edit/:id"}  component={NewsCreateComp}/>
                            <Route exact path = "/functions" component={FunctionComp}/>
                            <Route exact path = "/functions/calculator" component={CalculatorComp}/>
                            <Route exact path = "/functions/game" component={GameComp}/>
                            <Route exact path = "/functions/youtube" component={YouTubeCloning}/>
                            <Route exact path = "/problems" component={ProblemSolveComp}/>
                        </Switch>
                    </Col>
                </Row>
                <FooterComp/>
            </BrowserRouter>
        </div>
    )
}
export default AppRouter;