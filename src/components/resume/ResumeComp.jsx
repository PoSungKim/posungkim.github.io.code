import React from "react";
import "./ResumeComp.css"

class ResumeComp extends React.Component {
    componentDidMount() {
        // ArrowUp Button 액션 추가 -- 스크롤 내려갈 시 보이게
        const button = document.querySelector('#arrowUp');
        const about = document.querySelector('#navbar');
        document.addEventListener('scroll', () => {
            if (window.scrollY > about.getBoundingClientRect().height) {
                button.classList.add("visible");
            }
            else {
                button.classList.remove('visible');
            }
        })

        // ArrowUp Button 액션 추가 -- 클릭 시 최상단으로 갈 수 있게
        const header = document.querySelector('#navbar');
        button.addEventListener('click', ()=> {
            console.log(header);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        })

        // Projects Filtering 액션 추가 -- 버튼 클릭 시 filtered results가 나오게
        const expBtnContainer = document.querySelector(".experience__categories");
        const projContainer = document.querySelector(".experience__projects")
        const projects = document.querySelectorAll(".project")
        expBtnContainer.addEventListener('click', (event) => {

            const data = (event.target.dataset.filter)? event.target.dataset.filter :event.target.parentNode.dataset.filter;
            const targetBtn = (event.target.nodeName === 'BUTTON')? event.target : event.target.parentNode;
            if (data === undefined) return;

            projContainer.classList.add("animation-bottom");
            setTimeout(()=> {
                projects.forEach( (project) => {
                    const type = project.dataset.type;
                    (data === '*' || data === type) ?  project.classList.remove("invisible") : project.classList.add("invisible");
                })
                projContainer.classList.remove("animation-bottom");
            }, 300);

            // Button 액션 추가 -- 클릭된 Button의 Background가 바뀌게
            const btn = document.querySelector('.category__btn.selected');
            btn.classList.remove('selected');
            targetBtn.classList.add('selected');
        })

        // Coordinate 액션 추가 -- 커서에 좌표가 함께 표시될 수 있게
        const coordinate = document.querySelector('.pointer');
        document.addEventListener('mousemove', (event) => {

            const clientY = event.clientY;
            const clientX = event.clientX;

            const pageY = event.pageY;
            const pageX = event.pageX;

            // React Component로 인한 Offset 처리
            const offsetWidth = document.querySelector('.row').childNodes[0].offsetWidth;
            const offsetHeight = document.querySelector('#navbar').offsetHeight;

            coordinate.innerText = `(${clientX} , ${clientY})`;
            coordinate.style.left = `${pageX - offsetWidth}px`;
            coordinate.style.top = `${pageY - offsetHeight}px`;

        })
    }

    render() {
        return (
            <div className="ResumeComp">
                <section id="coordinate">
                    <span className="pointer">(0 , 0)</span>
                </section>

                <section id="poster__background">
                    <div className = "blackCover"/>
                    <div className="left">
                        <div className="poster">
                            <h1 className="posterTitle">Developer</h1>
                            <figure className="images">
                                {/*
                                    <i className="image fas fa-book"></i>
                                */}
                            </figure>
                        </div>
                    </div>
                    <div className="right">
                        <h3 className="title"> Developer </h3>
                        <p>
                            컴퓨터를 통해 머리 속에 있는 모든 것이 구현되는 세상에 대한 큰 매력을 느끼게 되었습니다.<br/><br/>
                            이에 따라, 세상에 임팩트를 줄 수 있는 서비스 구현에 대한 흥미가 커졌고,<br/> 현재 즐거운 마음으로
                            형태에 상관없이 다양한 의미와 용도를 제공할 수 있는 서비스를 사회에 제공하고자 합니다.
                        </p>
                    </div>
                </section>

                <section id="photo">
                    <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="topPhoto"/>
                </section>


                <section id="about" class="section">
                    <div class="left">
                        <h3 id="about_me">About Me</h3>
                    </div>
                    <div class="right">
                        <h3 className="title"> 궁금증이 많은 개발자 </h3>
                        <p className="content">
                            컴퓨터를 통해 머리 속에 있는 모든 것이 구현되는 세상에 대한 큰 매력을 느끼게 되었습니다.<br/><br/>
                            이에 따라, 세상에 임팩트를 줄 수 있는 서비스 구현에 대한 흥미가 커졌고,<br/> 현재 즐거운 마음으로
                            형태에 상관없이 다양한 의미와 용도를 제공할 수 있는 서비스를 사회에 제공하고자 합니다.
                        </p>
                    </div>
                </section>


                <section id="skills" class="section">
                    <h1>Skills</h1>
                    <div className="skillComps">
                        <div className="skill">
                            <img src="https://user-images.githubusercontent.com/42747200/46140125-da084900-c26d-11e8-8ea7-c45ae6306309.png" alt="c++ icon" className="skillComp"/>
                            <div className="skill__description">
                                <span>70%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="python icon"className="skillComp"/>
                            <div className="skill__description">
                                <span>70%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JS icon" className="skillComp"/>
                            <div className="skill__description">
                                <span>70%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVSn6huPlarccfZEFY__z79K6s-BrjBKVEWQ&usqp=CAU" alt="react icon" className="skillComp"/>
                            <div className="skill__description">
                                <span>70%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png" alt="node.js icon" className="skillComp"/>
                            <div className="skill__description">
                                <span>70%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <img src="https://pngimg.com/uploads/mysql/mysql_PNG23.png" alt="mysql icon" className="skillComp"/>
                            <div className="skill__description">
                                <span>70%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <img src="https://miro.medium.com/max/300/1*UdM3Isk3gfnEOX7r6lWI8A.png" alt="docker icon" className="skillComp"/>
                            <div className="skill__description">
                                <span>70%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <img src="https://cdn.iconscout.com/icon/free/png-512/jenkins-5-569553.png" alt="docker icon" className="skillComp"/>
                            <div className="skill__description">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="experience" class="section">
                    <h1>Experience</h1>
                    <div className="experience__categories">
                        <button className="category__btn selected" data-filter="*" >
                            All <span className="category__count">4</span>
                        </button>
                        <button className="category__btn" data-filter="frontend" >
                            Front-end <span className="category__count">1</span>
                        </button>
                        <button className="category__btn" data-filter="backend" >
                            Back-end <span className="category__count">1</span>
                        </button>
                        <button className="category__btn" data-filter="mobile">
                            Mobile <span className="category__count">2</span>
                        </button>
                    </div>
                    <div className="experience__projects">
                        <a href="/" className="project" target="_blank" data-type="frontend">
                            <div className="project__img"></div>
                            <div className="project__description">
                                <h3>YouTube Mobile Site</h3>
                                <span>Clone Coding with HTML, CSS, JS</span>
                            </div>
                        </a>
                        <a href="/" className="project" target="_blank" data-type="backend">
                            <div className="project__img"></div>
                            <div className="project__description">
                                <h3>YouTube Mobile Site</h3>
                                <span>Clone Coding with HTML, CSS, JS</span>
                            </div>
                        </a>
                        <a href="/" className="project" target="_blank" data-type="mobile">
                            <div className="project__img"></div>
                            <div className="project__description">
                                <h3>YouTube Mobile Site</h3>
                                <span>Clone Coding with HTML, CSS, JS</span>
                            </div>
                        </a>
                        <a href="/" className="project" target="_blank" data-type="mobile">
                            <div className="project__img"></div>
                            <div className="project__description">
                                <h3>YouTube Mobile Site</h3>
                                <span>Clone Coding with HTML, CSS, JS</span>
                            </div>
                        </a>
                    </div>
                </section>

                <button id="arrowUp">
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        );
    }
}

export default ResumeComp;