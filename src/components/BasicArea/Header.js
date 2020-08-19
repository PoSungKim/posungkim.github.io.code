import React, {useState, useRef, useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {logOutUser} from "../../_actions/userAction";
import {Link} from "react-router-dom";
import oc from "open-color";

import NavBarSection from "./HeaderFrame/NavBarSection";
import NavBarWrapper from "./HeaderFrame/NavBarWrapper";
import NavbarBtn from "./HeaderFrame/NavbarBtn";
import CrossBtn from "./HeaderFrame/CrossBtn";


const Header = ()=> {
    const users = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const onLogOut = () => {
        dispatch(logOutUser());
        console.log(users.currentUser);
    }

    const [visible, setVisible] = useState(false);
    const [shadowClassName, setShadow] = useState("");
    const [navbarContainerActive, setContainer] = useState(false);

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };
    
    // NavBar 위치에 따라 그림자 효과 주기
    const checkScrollHeight = () => {
        window.scrollY > 10 ? setShadow("navbar--dark") : setShadow("");
    };

    const onClickCrossBtn = (event) => {
        event.preventDefault();
        setContainer(!navbarContainerActive);
    };

    console.log(navbarContainerActive);
    useEffect( ()=> {
        checkScrollHeight();
        document.addEventListener("scroll", checkScrollHeight);
        return ()=> {
            document.removeEventListener("scroll", checkScrollHeight);
        };
    }, []);

    return (
        <NavBarWrapper className={shadowClassName}>
            <CrossBtn className="navbar__crossBtn" onClick={onClickCrossBtn} navbarContainerActive = {navbarContainerActive} />
            <NavBarSection className = "navbar__logo" flex={2} justifyContent={"center"} fontColor = {oc.yellow[5]} fontSize = {"1.5rem"}>
                <Link to = "/"><i className="fas fa-puzzle-piece"></i> <span>BeneBean's Coding</span></Link>
            </NavBarSection>

            <NavBarSection className = {navbarContainerActive ? "navbar__container active" : "navbar__container"} flex={8} justifyContent={"center"}>
                <NavBarSection flex={2} ulList ulStyle={"padding: 0 120px"}>
                    <ul>
                        <Link to = "/"><li>Home</li></Link>
                        <Link to = "/"><li>Community</li></Link>
                        <Link to = "/"><li>CrawledInfo</li></Link>
                        <Link to = "/"><li>History</li></Link>
                        <Link to = "/uploadproduct"><li>Upload</li></Link>
                    </ul>
                </NavBarSection>
                <NavBarSection flex={1} ulList ulStyle={"padding: 0 30px"}>
                    <ul>
                        <li>
                            {
                                !users.isLoggedIn
                                ? <NavbarBtn to = "/login">Log In</NavbarBtn>
                                : <NavbarBtn to = "/" onClick={onLogOut}>Log Out</NavbarBtn>
                            }
                        </li>
                        <li>
                            {
                                !users.isLoggedIn
                                && <NavbarBtn to = "/register">Sign In</NavbarBtn>
                            }
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/posungkim">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/posung.kim">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </li>
                    </ul>
                </NavBarSection>
            </NavBarSection>

        </NavBarWrapper>
    )
}

export default Header;