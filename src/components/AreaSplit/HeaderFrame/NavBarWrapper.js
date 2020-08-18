import React from "react";
import styled from "styled-components";
import oc from "open-color";

const Header = styled.header`
    background: ${oc.white};
    position: fixed;
    width: 100vw;
    height: 10vh;
    z-index: 10;
    top: 0;
`;

const NavBar = styled.nav`
    transition: all 200ms ease-in-out;
    display: flex;
    &.navbar--dark {
        box-shadow: rgba(0.5, 0.5, 0.5, 0.5) 0px 5px 5px 0px;
    }
    
    // 작은 스크린 혹은 Mobile 관련 설정은 모두 NavBarWrapper에서 설정  
    @media screen and (max-width: 768px) {
        flex-direction: column;
        
        .navbar__logo {
            justify-content: flex-start;
        }
        
        .navbar__container {
            flex-direction: column;
            background: ${oc.white};
            padding: 0;
            
            div {
                width: 100%;
                &:nth-child(1) {
                    padding: 0;
                    ul {
                        flex-direction: column;
                        padding: 0;
                        li {
                            width: 100%;
                            padding: 3px 0;
                            text-align: center;
                        }
                    }
                }  
            }   
        }
    }
`;

const NavBarWrapper = ({children, ...rest}) => {
    return (
        <Header>
            <NavBar {...rest}>
                {children}
            </NavBar>
        </Header>
    )
}

export default NavBarWrapper;