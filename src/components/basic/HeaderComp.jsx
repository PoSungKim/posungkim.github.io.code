import React from 'react';
import {Link} from "react-router-dom";
import './HeaderComp.css'

class HeaderComp extends React.Component {

    componentDidMount() {

        // 햄버거 Click Action 추가
        const toggleBtn = document.querySelector(".navbar__toggleBtn");
        const menu = document.querySelector(".navbar__menu");
        const icons = document.querySelector(".navbar__icons");

        toggleBtn.addEventListener('click', ()=> {
            menu.classList.toggle('active');
            icons.classList.toggle('active');
            navbar.classList.toggle('active');
        })

        const lsList = document.querySelectorAll('.navbar__menu li');
        for(let i = 0; i < lsList.length; i++) {
            lsList[i].addEventListener('click', ()=> {
                menu.classList.toggle('active');
                icons.classList.toggle('active');
                navbar.classList.toggle('active');
            })
        }

        // Navbar Scroll Action 추가
        const navbar = document.querySelector('#navbar');
        const navbarHeight = navbar.getBoundingClientRect().height;
        document.addEventListener("scroll", () => {
            if (window.scrollY > navbarHeight/5) {
                navbar.classList.add("navbar--dark");
            }
            else {
                navbar.classList.remove("navbar--dark");
            }
        })

        // Section Scroll Action 추가
        const navbarMenu = document.querySelector('.navbar__menu__item');
        navbarMenu.addEventListener('click', (event) => {
            const id = event.target.dataset.section;
            if (id === null) {
                return;
            }
            console.log(id);
            const toScroll = document.querySelector(id);
            if (toScroll === null) {
                alert("해당 페이지에는 About Me가 없어요! Resume 페이지로 가주세요!");
                return;
            }
            toScroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        })
    };

    render() {
        return (
            <div className="Header">
                <nav id="navbar">
                    <div className="navbar__logo">
                        <Link to={"/"} ><i className="fas fa-puzzle-piece"></i> BeneBean's Coding</Link>
                    </div>

                    <ul className="navbar__menu">
                        <li className="navbar__menu__item" data-section="#about">About Me</li>
                        <li><Link to={"/resume"}>Resume</Link></li>
                        <li><Link to={"/journals"}>Journals</Link></li>
                        <li><Link to={"/news"}>News</Link></li>
                        <li><Link to={"/functions"}>Functions</Link></li>
                        <li><Link to={"/problems"}>Problem Solving </Link></li>
                    </ul>

                    <ul className="navbar__icons">
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/posungkim">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/posung.kim">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </li>
                    </ul>

                    <a href="#" className="navbar__toggleBtn">
                        <i className="fas fa-bars"></i>
                    </a>
                </nav>
            </div>
        );
    }
}

export default HeaderComp;