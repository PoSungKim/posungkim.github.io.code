import React from "react";
import styled from "styled-components";
import oc from "open-color";

const Header = styled.header`
    transition: all 200ms ease-in-out;
    background: ${oc.white};
    position: fixed;
    z-index: 1;
    top: 0;
    
    
    &.navbar--dark {
        box-shadow: rgba(0.5, 0.5, 0.5, 0.5) 0px 5px 5px 0px;
    }
    
    // 하나의 컴포넌트 NavBarSection에 너무 많은 props들을 넣는 것이 오히려 정리되어 보이지 않아서 틀이 아닌, 
    // 스타일링 관련 내용은 NavBarWrapper에서 처리  
    
    .navbar__logo i {
        color: ${oc.yellow[5]};
    }
    
    .navbar__container {
        div:nth-child(1) ul li {
            transition: background 300ms ease-out;
            &:hover {
                color: white;
                background: ${oc.yellow[5]};
            }
        }
        div:nth-child(2) ul li {
            i {
                font-size: 1.5rem;
            }
            &:hover {
                i {
                    transform: scale(1.5);
                }
                a { 
                    color: #007bff;
                }
            }
        }
    }
    
`;

const NavBar = styled.nav`
    display: flex;
    min-height: 10vh;
    width: 100vw;
    
    // 작은 스크린 혹은 Mobile 관련 설정은 모두 NavBarWrapper에서 설정  
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        
        .navbar__logo {
            justify-content: flex-start;
            a {
                transform: translateX(20px);
            }
        }
        
        .navbar__container {
            flex-direction: column;
            background: ${oc.white};
            padding: 0;
            display: none;
            
            &.active {
                display: block;
            }
            
            div {
                width: 100%;
                &:nth-child(1) {
                    padding: 0;
                    ul {
                        flex-direction: column;
                        padding: 0;
                        li {
                            width: 100%;
                            padding: 6px 0;
                            text-align: center;
                        }
                    }
                }  
            }
            div:nth-child(2) {
                ul {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    li {
                        text-align: center;
                        flex: 1;
                    }
                }
            }   
        }
    }
`;

const NavBarWrapper = ({children, ...rest}) => {
    return (
        <Header {...rest}>
            <NavBar >
                {children}
            </NavBar>
        </Header>
    )
}

export default NavBarWrapper;