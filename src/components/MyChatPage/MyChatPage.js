import React, {useEffect, useMemo, useState} from 'react';
import styled from "styled-components";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import {useSelector} from "react-redux";
import ChatInputBtn from "./ChatInputBtn";
import ChatContent from "./ChatContent";

const PageContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    height: auto;
`;

const PageSection = styled.div`
    min-height: 90vh;
    padding: 5vh 0;
    margin: auto;
    width: 80%;
    
    @media screen and (max-width: 768px) {
        width: 95%;
    }
    
`;

const initialMessage = {
    sender: "",
    content: "TestContent",
    date: "",
}

const MyChatPage = () => {
    const userState = useSelector(state=>state.userReducer);

    const [messageState, setMessage] = useState(initialMessage);
    const [contentState, setContent] = useState([]);

    const connect = async () => {
        await stompClient.connect({}, (frame) => {
            console.log("connected??");
            console.log(frame);
            stompClient.subscribe('/topic/public', (data)=>{
                console.log(data);
                const newMessage = JSON.parse(data.body);
                addMessage(newMessage);
            });
        });
    }

    const onClick = () => {
        try {
            console.log(JSON.stringify({...messageState, sender: userState.login.username, date: `${new Date().toDateString()}`}));
            stompClient.send("/mychat/send", {},  JSON.stringify({...messageState, sender: userState.login.username, date: `${new Date().toDateString()}`}));
        } catch(error) {
            console.error(error);
        }
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
        setContent([...contentState, content]);
    }

    //let sockJS = useMemo( ()=> new SockJS("http://localhost:8080/webSocket"), [contentState]);
    let sockJS = useMemo( ()=> new SockJS("https://springboot--backend.herokuapp.com/webSocket"), [contentState]);
    let stompClient = useMemo( ()=> Stomp.over(sockJS), [contentState]);
    stompClient.debug = (error) => {console.log(error)};

    useEffect(()=>{
        console.log("RENDER MYCHAT PAGE useEffect");
        connect()
            .then(()=>console.log("Connect and subscribe done!"))
            .catch(err=>console.log(err));
        return ()=> {
            stompClient.disconnect();
        }
    },[contentState]);


    console.log("RENDER MYCHAT PAGE", contentState);
    return (
        <PageContainer>
            <PageSection>
                <ChatContent contentState = {contentState} />
                <ChatInputBtn messageState = {messageState} onClick = {event => onClick(event)} onChange = {event => onChange(event)}/>
            </PageSection>
        </PageContainer>
    );
}

export default MyChatPage;
