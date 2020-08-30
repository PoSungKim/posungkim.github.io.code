import React, {useEffect, useMemo, useState} from 'react';
import {useSelector} from "react-redux";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import styled from "styled-components";
import oc from "open-color";

import ChatInputBtn from "./ChatInputBtn";
import ChatContent from "./ChatContent";

const PageContainer = styled.section`
    min-height: 90vh;
    height: auto;
    width: 100%;
`;

const PageSection = styled.div`
    min-height: 90vh;
    padding: 5vh 0;
    margin: auto;
    width: 60%;
    
    @media screen and (max-width: 768px) {
        width: 95%;
    }
`;

const ChatRoom = styled.div`
    box-shadow: rgba(0.5, 0.5, 0.5, 0.5) 0px 5px 5px 0px;
    background-color: ${oc.black};
    flex-direction: column;
    display: flex;
    height: 70vh;
    width: 100%;
    
    @media screen and (max-width: 768px) {
        height: 90vh;
    }
`;

const ChatHeader = styled.div`
    background-color: ${oc.blue[5]};
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    display: flex;
    flex: 2;
    
    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const ChatFooter = styled.div`
    background-color: ${oc.red[5]};
    border-bottom-right-radius: 15px;
    display: flex;
    flex: 1;
    &:hover {
        background-color: ${oc.red[3]};
    }
`;

const initialMessage = {
    sender: "",
    content: "",
    date: "",
}

const MyChatPage = () => {
    const userState = useSelector(state=>state.userReducer);

    const [messageState, setMessage] = useState(initialMessage);
    const [contentState, setContent] = useState([]);

    const connect = (contentState) => {
        stompClient.connect({}, (frame) => {
            console.log(frame);

            stompClient.subscribe('/topic/public', (data)=>{
                console.log(data + "VS" + contentState);
                const newMessage = JSON.parse(data.body);
                addMessage(newMessage);
            });
        });
    }

    const onClick = () => {
        if (messageState.content === "")
            return;

        try {
            console.log(JSON.stringify({...messageState, sender: userState.login.username? userState.login.username : "손님", date: `${new Date().toDateString()}`}));
            console.log(contentState);
            stompClient.send("/mychat/send", {},  JSON.stringify({...messageState, sender: userState.login.username? userState.login.username : "손님", date: `${new Date().toDateString()}`}));
            setMessage(initialMessage);
        } catch(error) {
            console.error(error);
        }
    }

    const onKeyPress = (event) => {
        if (event.key === "Enter")
            onClick();
    }

    const onChange = (event) => {
        event.preventDefault();
        setMessage({
            ...messageState,
            content : event.target.value,
        })
        console.log(messageState.content, contentState);
    }
    const addMessage = (content) => {
        console.log([...contentState, content]);
        setContent(prev => [...prev, content]);
    }

    //let sockJS = useMemo( ()=> new SockJS("http://localhost:8080/webSocket"), [contentState]);
    let sockJS = useMemo( ()=> new SockJS("https://springboot--backend.herokuapp.com/webSocket"), []);
    let stompClient = useMemo( ()=> Stomp.over(sockJS), []);
    stompClient.debug = (error) => {console.log(error)};

    useEffect(()=>{
        console.log("RENDER MYCHAT PAGE useEffect");
        connect();

        return ()=> {
            if (stompClient.connected)
                stompClient.disconnect();
        }
    },[]);


    console.log("RENDER MYCHAT PAGE", contentState);
    return (
        <PageContainer>
            <PageSection>
                <ChatRoom>
                    <ChatHeader >
                        {userState.login.username ? userState.login.username + "님" : "손님"} 안녕하세요! <br/> 오픈 채팅방에 오신 것을 환영합니다!
                    </ChatHeader>
                    <ChatContent contentState = {contentState} />
                    <ChatFooter>
                        <ChatInputBtn name = "content" onKeyPress={onKeyPress} messageState = {messageState} onClick = {event => onClick(event)} onChange = {event => onChange(event)}/>
                    </ChatFooter>
                </ChatRoom>
            </PageSection>
        </PageContainer>
    );
}

export default MyChatPage;
