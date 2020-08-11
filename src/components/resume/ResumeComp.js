import React from "react";
import "./ResumeComp.css"
import {Link} from "react-router-dom";

class ResumeComp extends React.Component {
    componentDidMount() {
        // ArrowUp Button 액션 추가 -- 스크롤 내려갈 시 보이게
        const arrowUpBtn = document.querySelector('#arrowUp');
        const about = document.querySelector('header');
        document.addEventListener('scroll', () => {
            if (window.scrollY > about.getBoundingClientRect().height) {
                arrowUpBtn.classList.add("visible");
            }
            else {
                arrowUpBtn.classList.remove('visible');
            }
        })

        // ArrowUp Button 액션 추가 -- 클릭 시 최상단으로 갈 수 있게
        const header = document.querySelector('header');
        arrowUpBtn.addEventListener('click', ()=> {
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

        // Activity 액션 추가 -- 버튼 클릭 시 Activity 추가되게
        const items = document.querySelector(".items");
        const addBtn = document.querySelector(".input__btn");
        const inputArea = document.querySelector(".input__area");
        function onAddBtn() {
            const inputValue = inputArea.value;
            if (inputValue === '') {
                inputArea.focus();
                return;
            }
            const item = createItem(inputValue);
            items.appendChild(item);
            item.scrollIntoView();
            inputArea.value = "";
            inputArea.focus();
        }
        let id = 0;
        function createItem(inputValue) {
            const item = document.createElement("li");
            item.setAttribute("class", "item");
            item.setAttribute("data-id", id);
            item.innerHTML =
            `
                <div class="item__content">
                    <span class="item__name">${inputValue}</span>
                    <button class="item__delete">
                        <i class="fas fa-trash-alt" data-id=${id}></i>
                    </button>
                </div>
                <div class="item__split"></div>
            `;
            id++;
            return item;
        }
        items.addEventListener('click', (event)=> {
            const id = event.target.dataset.id;
            if (id) {
                const Deleted = document.querySelector(`.item[data-id="${id}"]`);
                Deleted.remove();
            }
        })
        addBtn.addEventListener('click', () => {
            onAddBtn();
        })
        inputArea.addEventListener('keypress', event => {
            if (event.key === "Enter")
                onAddBtn();
        })
    }

    render() {
        return (
            <div className="ResumeComp">
                <section id="about" >
                    <div className = "blackCover"/>
                    <div className= "left">
                        <div className="poster">
                            <h1 className="posterTitle"><strong>개발</strong>이 즐겁습니다!</h1>
                            <figure className="images">
                                {/*
                                    <i className="image fas fa-book"></i>
                                */}
                            </figure>
                        </div>
                    </div>
                    <div className="right">
                        <h3 className="title"><strong>Proactive</strong> <strong>Developer</strong> </h3>
                        <div className="content">
                            <p>
                                컴퓨터를 통해 머리 속의 모든 것이 구현될 수 있는 세상에 큰 매력을 느끼게 되었습니다.
                            </p>

                            <p>
                                이에 따라, 세상에 임팩트를 줄 수 있는 서비스 구현에 대한 흥미가 커졌고, <br/>
                                현재 즐거운 마음으로 형태에 상관없이 다양한 의미와 용도를 제공할 수 있는 서비스를 사회에 제공하고자 합니다.
                            </p>

                            <p>
                                탐구력과 창의력을 기반으로 세계인들과 함께 협업하여 상상을 현실로 만드는 세상,<br/>
                                컴퓨터와 아이디어만 있다면 언제 어디서나 구현을 시작할 수 있는 세상,<br/>
                                능동적인 자세와 열정적인 자세를 통해 하루하루 성장할 수 있는 세상 등 <br/>
                                다음이 기다려지는 세상을 만들어 나가고 싶습니다.
                            </p>
                        </div>
                    </div>
                </section>


                <section id="skills" className="section">
                    <h1><strong>Skills</strong></h1>
                    <div className="skillCompsContainer">
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
                        </div>
                        <div className="skillComps">
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
                    </div>
                </section>


                <section id="experience" className="section">
                    <h1><strong>Experience</strong></h1>
                    <div className="experience__categories">
                        <button className="category__btn selected" data-filter="*" >
                            All <span className="category__count">4</span>
                        </button>
                        <button className="category__btn" data-filter="frontend" >
                            Front-end <span className="category__count">2</span>
                        </button>
                        <button className="category__btn" data-filter="backend" >
                            Back-end <span className="category__count">1</span>
                        </button>
                        <button className="category__btn" data-filter="mobile">
                            Mobile <span className="category__count">1</span>
                        </button>
                    </div>
                    <div className="experience__projects">
                        <Link to="/functions/game" className="project" data-type="frontend">
                            <div className="project__img"></div>
                            <div className="project__description">
                                <h3>Flash Game</h3>
                                <span>Practicing JS Programming</span>
                            </div>
                        </Link>

                        <Link to="/functions/youtube" className="project"  data-type="mobile">
                            <div className="project__img"></div>
                            <div className="project__description">
                                <h3>YouTube Mobile</h3>
                                <span>Clone Coding with HTML, CSS, JS</span>
                            </div>
                        </Link>
                        <Link to="/functions/shopping" className="project"  data-type="frontend">
                            <div className="project__img"></div>
                            <div className="project__description">
                                <h3>Shopping Items</h3>
                                <span>
                                    Fetching JSON File <br/>
                                    Filtering Items using JS
                                </span>
                            </div>
                        </Link>
                        <Link to="/functions/todolist" className="project"  data-type="backend">
                            <div className="project__img"></div>
                            <div className="project__description">
                                <h3>To Do List</h3>
                                <span>
                                    Functional Components <br/>
                                    Styled-components <br/>
                                    Hooks <br/>
                                    Context
                                </span>
                            </div>
                        </Link>
                    </div>
                </section>

                <section id="activity" className="section">
                    <h1><strong>Activity</strong></h1>
                    <div className="list">
                        <ul className="items">
                        </ul>
                    </div>
                    <div className="input">
                        <input type="text" placeholder = "Activity를 기입해주세요" className="input__area"/>
                        <button className="input__btn">Add Button</button>
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