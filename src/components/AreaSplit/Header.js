import React, {useState, useRef, useEffect} from 'react';
import NavBarSection from "./HeaderFrame/NavBarSection";
import NavBarWrapper from "./HeaderFrame/NavBarWrapper";

const Header = ()=> {
    const [visible, setVisible] = useState(false);
    const [shadowClassName, setShadow] = useState("");
    const NavBar = useRef();

    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };
    
    // NavBar 위치에 따라 그림자 효과 주기
    const onScroll = () => {
        window.scrollY > 10 ? setShadow("navbar--dark") :  setShadow("");
    }

    useEffect( ()=> {
        document.addEventListener("scroll", ()=> {
            onScroll();
            return ()=>document.removeEventListener("scroll", onScroll);
        })
    }, []);

    return (
        <NavBarWrapper ref={NavBar} className={shadowClassName}>
            <NavBarSection className = "navbar__logo" flex={2} justifyContent={"center"}  >
                <a href="/"><i className="fas fa-puzzle-piece"></i> <span>BeneBean's Coding</span></a>
            </NavBarSection>
            <NavBarSection className = "navbar__container" flex={8} justifyContent={"center"}>
                <NavBarSection flex={2} ulList ulStyle={"padding: 0 60px"}>
                    <ul>
                        <li>Home</li>
                        <li>Community</li>
                        <li>CrawledInfo</li>
                        <li>History</li>
                        <li>Upload</li>
                    </ul>
                </NavBarSection>
                <NavBarSection flex={1} ulList>
                    <ul>
                        <li>Login</li>
                        <li>Sign In</li>
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