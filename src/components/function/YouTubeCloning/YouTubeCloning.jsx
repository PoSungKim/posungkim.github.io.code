import React from "react";
import "./YouTubeCloning.css";
import youTubeMotion from "./youTubeMotion.mp4"

class YouTubeCloning extends React.Component {
    componentDidMount() {
        const moreBtn = document.querySelector('.info .metaData .titleAndButton .moreBtn');
        const title = document.querySelector('.info .metaData .titleAndButton .title');

        moreBtn.addEventListener('click', ()=> {
           moreBtn.classList.toggle("clicked");
           title.classList.toggle("clamp");
        });
    }
    render() {
        return (
            <div className="YouTubeCloning">
                {/* Header */}
                <section className="header">
                    <div className="logos">
                        <i className="fab fa-youtube"></i>
                        <span> YouTube</span>
                    </div>
                    <div className="icons">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                </section>

                {/* Video Player */}
                <figure className="videoPlayer">
                    <video controls loop autoPlay src={youTubeMotion} type="video/mp4"></video>
                </figure>

                {/* info + Channel + upNext */}
                <section className="infoAndupNext">
                    {/* Information */}
                    <section className="info">
                        <div className="metaData">
                            <ul className="hashTags">
                                <li>#Free Stock Video</li>
                                <li>#Motion Background</li>
                                <li>#Blue Rays</li>
                            </ul>
                            <div className="titleAndButton">
                            <span className="title clamp">
                                YouTube Clone Coding: 모바일용 웹사이트 만들기 |
                                HTML, CSS, JS로 Responsive한 반응 구현하기,
                                Flex Box 및 Justify Content 연습하기,
                                Layout 구성 확인 및 연습하기
                            </span>
                                <button className="moreBtn">
                                    <i class="fas fa-caret-down"></i>
                                </button>
                            </div>
                            <span className="view">
                            1M views 1 month ago
                        </span>
                        </div>
                        <ul className="actions">
                            <li>
                                <button>
                                    <i className="fas fa-thumbs-up active"></i>
                                    <span>5K</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="fas fa-thumbs-down"></i>
                                    <span>0</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="fas fa-share"></i>
                                    <span>Share</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="fas fa-plus"></i>
                                    <span>Save</span>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <i className="fab fa-font-awesome-flag"></i>
                                    <span>Report</span>
                                </button>
                            </li>
                        </ul>

                        {/* Channel Description */}
                        <section className="channel">
                            <div className="metaData">
                                <img src="https://avatars2.githubusercontent.com/u/37537227?s=460&u=202a41ec807e7d974885904913c6c46649020392&v=4" alt="channelImg"/>
                                <div className="info">
                            <span className="channelName">
                                BeneBean's Coding
                            </span>
                                    <span className="subscriberNumber">
                                100M Subscribers
                            </span>
                                </div>
                            </div>
                            <button className="subscribe">
                                Subscribe
                            </button>
                        </section>
                    </section>

                    {/* upNext */}
                    <section className="upNext">
                        <span className="title">Up next</span>
                        <ul>
                            <li className="item">
                                <div className="img">
                                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png" alt="react banner"/>
                                </div>
                                <div className="info">
                                    <span className="title">React 1</span>
                                    <span className="name">BeneBean's Coding</span>
                                    <span className="views">10M views</span>
                                </div>
                                <button className="moreBtn"><i className="fas fa-ellipsis-v"></i></button>
                            </li>
                            <li className="item">
                                <div className="img">
                                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png" alt="react banner"/>
                                </div>
                                <div className="info">
                                    <span className="title">React 2</span>
                                    <span className="name">BeneBean's Coding</span>
                                    <span className="views">15M views</span>
                                </div>
                                <button className="moreBtn"><i className="fas fa-ellipsis-v"></i></button>
                            </li>
                            <li className="item">
                                <div className="img">
                                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--YPqzSSWz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/8i1bx8y9p3t9x223bjhf.png" alt="react banner"/>
                                </div>
                                <div className="info">
                                    <span className="title">React 3</span>
                                    <span className="name">BeneBean's Coding</span>
                                    <span className="views">20M views</span>
                                </div>
                                <button className="moreBtn"><i className="fas fa-ellipsis-v"></i></button>
                            </li>
                        </ul>
                    </section>
                </section>
            </div>
        );
    }
}

export default YouTubeCloning;