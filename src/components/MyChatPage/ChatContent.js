import React, {useEffect} from "react";
import {BsPersonFill} from "react-icons/bs"
import styled from "styled-components";
import oc from "open-color";
import {useSelector} from "react-redux";
import emojiHello from "./emoji_hello.png";
import emojiDeveloper from "./emoji_developer.png";

const ChatContentWrapper = styled.div`
    background-color: ${oc.white};
    overflow-y: scroll;
    padding: 2rem;
    flex: 7;
    
    @media screen and (max-width: 768px) {
        background-color: ${oc.yellow[0]};
    }
`;

const ChatMessage = styled.div`
    & + & {
        margin-top: 1.5rem;
    }
    display: flex;
    ${props=>props.myMessage && 'justify-content: flex-end'};
    width: auto;
    height: auto;
`;

const ChatMessageWrapper = styled.div`
    transform: translateX(${props=> props.myMessage ? '-0.5rem' : '0.5rem'});
    width: fit-content;
`;

const ChatMessageName = styled.div`
    ${props=> props.myMessage && "text-align: right"};
    font-weight: 500;
`;

const ChatMessageContentWrapper = styled.div`
    display: flex;  
`;

const ChatMessageContent = styled.div`
    overflow-wrap: anywhere;
    background-color: ${props=>props.myMessage? oc.yellow[4] : oc.gray[3]};
    padding: 0.2rem 2rem;
    border-radius: 3px;
    max-width: 30rem;
    
    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        max-width: 15rem;
    }
`;

const ChatMessageProfile = styled.div`
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 50px;
    width: 50px;
    svg, img {
        width: 100%;
        height: auto;
    }
`;

const ChatMessageDate = styled.div`
    align-items: flex-end;
    padding: 0 0.5rem;
    font-size: 0.5rem;
    font-weight: 300;
    display: flex;
    color: black;
`;

const scrollChatRoomToBottom = () => {
    const ChatRoom = document.querySelector(".ChatRoomScroll");
    ChatRoom.scrollTop = ChatRoom.scrollHeight;
}

const ChatContent = React.memo(({contentState}) => {
    const userState = useSelector(state => state.userReducer);
    useEffect(()=>{
        scrollChatRoomToBottom();
        // console.log("RENDER ChatContent PAGE useEffect");
    }, [contentState]);

    return (
        <ChatContentWrapper className={"ChatRoomScroll"}>
                {contentState.length > 0 &&  contentState.map( (content, index) => {
                    if (userState.login.username && content.sender === userState.login.username) {
                        return (
                            <ChatMessage myMessage key={index + 1}>
                                <ChatMessageWrapper myMessage>
                                    <ChatMessageName myMessage > {content.sender}</ChatMessageName>
                                    <ChatMessageContentWrapper>
                                        <ChatMessageDate>  {content.date} </ChatMessageDate>
                                        <ChatMessageContent myMessage>{content.content}</ChatMessageContent>
                                    </ChatMessageContentWrapper>
                                </ChatMessageWrapper>
                                <ChatMessageProfile>
                                    {content.sender === "BeneBean" ? <img src={emojiDeveloper} /> : content.sender === "Babymong" ? <img src={emojiHello} /> : <BsPersonFill/> }
                                </ChatMessageProfile>
                            </ChatMessage>
                        )
                    } else {
                        return (
                            <ChatMessage key={index + 1}>
                                <ChatMessageProfile>
                                    {content.sender === "BeneBean" ? <img src={emojiDeveloper} /> : content.sender === "Babymong" ? <img src={emojiHello} /> : <BsPersonFill/> }
                                </ChatMessageProfile>
                                <ChatMessageWrapper>
                                    <ChatMessageName>{content.sender}</ChatMessageName>
                                    <ChatMessageContentWrapper>
                                        <ChatMessageContent>{content.content}</ChatMessageContent>
                                        <ChatMessageDate>  {content.date} </ChatMessageDate>
                                    </ChatMessageContentWrapper>
                                </ChatMessageWrapper>
                            </ChatMessage>
                        )
                    }
                })
                }
        </ChatContentWrapper>
    )
});

export default React.memo(ChatContent);