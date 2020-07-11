import React from 'react';
import {Link} from "react-router-dom";
import './HeaderComp.css';
import bgMusic from './homepageBgMusic.mp3';

class HeaderComp extends React.Component {

    componentDidMount() {
        // Background Music Action 추가
        const backgroundMusic = document.querySelector('audio');
        //backgroundMusic.autoplay = true;
        let isPlayed = false;
        document.addEventListener("click", ()=> {
            if (isPlayed)
                return;
            isPlayed = true;
            //backgroundMusic.pause();
            //backgroundMusic.currentTime = 0;
            backgroundMusic.loop = false;
            backgroundMusic.play();
        })

        // 햄버거 Click Action 추가
        const navbar = document.querySelector(".header__navbar");
        const toggleBtn = document.querySelector(".navbar__toggleBtn");
        const menu = document.querySelector(".navbar__menu");
        const icons = document.querySelector(".navbar__icons");
        console.log(toggleBtn);
        toggleBtn.addEventListener('click', (event)=> {
            console.log(event.target);
            toggleBtn.scrollIntoView();
            if (event.target.tagName === "I" && event.target.parentNode.tagName === "BUTTON") {
                menu.classList.toggle('active');
                icons.classList.toggle('active');
                navbar.classList.toggle('active');
            }
        })


        const lsList = document.querySelector('.navbar__menu').childNodes;
        for(let i = 0; i < lsList.length; i++) {
            lsList[i].addEventListener('click', ()=> {
                menu.classList.toggle('active');
                icons.classList.toggle('active');
                navbar.classList.toggle('active');
            })
        }


        // Section Scroll Action 추가
        const navbarMenu = document.querySelector('.navbar__menu');
        navbarMenu.addEventListener('click', (event) => {
            console.log(event.target);
            if (event.target.tagName === "LI" && !event.target.matches(".navbar__menu__sidebar")) {
                const id = event.target.dataset.section;
                if (id === null)
                    return;
                console.log(id);
                const toScroll = document.querySelector(id);
                if (toScroll === null) {
                    alert("해당 페이지에는 About Me가 없어요! Resume 페이지로 가주세요!");
                    return;
                }
                toScroll.scrollIntoView({behavior: "smooth", block: (id !== "#experience")? "center" : "start", inline: "center"});
            }
        })

        // SideBar Click Action 추가
        const sideBarBtn = document.querySelector(".navbar__menu__sidebar");
        const sideBarSection = document.querySelector("section#sidebar");
        sideBarBtn.addEventListener("click", ()=>{
            console.log("sideBarBtn clicked!");
            if (sideBarSection.matches(".show")) {
                sideBarSection.classList.remove("show");
                sideBarSection.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            }
            else {
                sideBarSection.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
                window.setTimeout(() => {
                    sideBarSection.classList.add("show");
                }, window.scrollY <= window.innerHeight/2? 500: 1000);
            }
        });

        ["scroll", "click"].forEach(event => {
            document.addEventListener(event, ()=> {
                if (sideBarSection.matches(".show")) {
                    sideBarSection.classList.remove("show");
                }
            })
        })


        // Navbar Scroll Action 추가
        const navbarHeight = navbar.getBoundingClientRect().height;
        document.addEventListener("scroll", () => {
            if (window.scrollY > navbarHeight/5) {
                navbar.classList.add("navbar--dark");
            }
            else {
                navbar.classList.remove("navbar--dark");
            }
        })
    };

    render() {
        return (
            <header>
                <nav className="header__navbar">
                    <audio src={bgMusic}></audio>
                    <div className="navbar__logo">
                        <a href="/"><i className="fas fa-puzzle-piece"></i> BeneBean's Coding</a>
                    </div>

                    <ul className="navbar__menu">
                        <li className="navbar__menu__sidebar">SideBar</li>
                        <li className="navbar__menu__item" data-section="#about">About Me</li>
                        <li className="navbar__menu__item" data-section="#skills">Skills</li>
                        <li className="navbar__menu__item" data-section="#experience">Experience</li>
                        <li className="navbar__menu__item" data-section="#activity">Activity</li>
                        {/*
                            <li><Link to={"/journals"}>Journals</Link></li>
                            <li><Link to={"/news"}>News</Link></li>
                            <li><Link to={"/functions"}>Functions</Link></li>
                            <li><Link to={"/problems"}>Problem Solving </Link></li>
                        */}
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
                    <button className="navbar__toggleBtn">
                        <i className="fas fa-bars"></i>
                    </button>
                </nav>
            </header>
        );
    }
}

export default HeaderComp;