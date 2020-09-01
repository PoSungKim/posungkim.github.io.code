import React, {useEffect} from "react";
import styled from "styled-components";
import oc from "open-color";
import {useSelector} from "react-redux";

const ChatContentWrapper = styled.div`
    background-color: ${oc.yellow[5]};
    overflow-y: scroll;
    padding: 2rem;
    flex: 7;
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
`;

const ChatMessageContentWrapper = styled.div`
    display: flex;  
`;

const ChatMessageContent = styled.div`
    overflow-wrap: anywhere;
    background-color: gray;
    padding: 0.2rem 2rem;
    border-radius: 3px;
    max-width: 30rem;
    color: white;
    
    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        max-width: 15rem;
    }
`;

const ChatMessageProfile = styled.div`
    background-color: ${oc.black};
    border-radius: 50%;
    height: 50px;
    width: 50px;
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

const ChatContent = ({contentState}) => {
    const userState = useSelector(state => state.userReducer);
    useEffect(()=>{
        scrollChatRoomToBottom();
        console.log("RENDER ChatContent PAGE useEffect");
    }, [contentState]);

    return (
        <ChatContentWrapper className={"ChatRoomScroll"}>
                {contentState.length > 0 &&  contentState.map( (content, index) => {
                    if (userState.login.username && content.sender === userState.login.username) {
                        return (
                            <ChatMessage myMessage key={index + 1}>
                                <ChatMessageWrapper myMessage>
                                    <ChatMessageName myMessage >{content.sender}</ChatMessageName>
                                    <ChatMessageContentWrapper>
                                        <ChatMessageDate>  {content.date} </ChatMessageDate>
                                        <ChatMessageContent>{content.content}</ChatMessageContent>
                                    </ChatMessageContentWrapper>
                                </ChatMessageWrapper>
                                <ChatMessageProfile/>
                            </ChatMessage>
                        )
                    } else {
                        return (
                            <ChatMessage key={index + 1}>
                                <ChatMessageProfile/>
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
}

export default ChatContent;