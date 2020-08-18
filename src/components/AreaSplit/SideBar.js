import React from "react";

function SideBar() {
    return (
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
    )
}

export default SideBar;