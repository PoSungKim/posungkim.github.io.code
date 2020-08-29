import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import {useSelector} from "react-redux";

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


const MyCartPage = () => {
    const userState = useSelector(state=>state.userReducer);
    //let sockJS = new SockJS("http://localhost:8080/webSocket");
    let sockJS = new SockJS("https://springboot--backend.herokuapp.com/webSocket");
    let stompClient = Stomp.over(sockJS);
    stompClient.debug = () => {};

    const [messageState, setMessage] = useState(initialMessage);
    const [contentState, setContent] = useState([]);

    const onClick = async () => {
        try {
            console.log(`${new Date().toDateString()}`);
            await stompClient.send("/mychat/send", {},  JSON.stringify({...messageState, sender: userState.login.username, date: `${new Date().toDateString()}`}));
        } catch(error) {
            console.error(error);
        };
    }

    const onChange = (event) => {
        setMessage({
            ...messageState,
            content : event.target.value,
        })
        console.log(messageState.content, contentState);
    }
    const addMessage = (content) => {
        setContent([...contentState, content]);
    }

    const connect = async () => {
        await stompClient.connect({},(frame)=>{
            console.log("connected??");
            console.log(frame);
            stompClient.subscribe('/topic/public', (data)=>{
                console.log(data);
                const newMessage = JSON.parse(data.body);
                addMessage(newMessage);
            });
        });
    }

    useEffect(()=>{
        connect()
            .then(()=>console.log("보내짐"));

        return () => {
            if (stompClient !== null)
                stompClient.disconnect();
        }
    },[contentState]);

    return (
        <PageContainer>
            <PageSection>
                MyChatPage
                {contentState.length > 0 &&  contentState.map(content => (
                    <div>{content.sender} {content.content} {content.date} </div>
                ))}
                <input type="text" value = {messageState.content} onChange={onChange} />
                <button onClick={onClick}>눌러</button>
            </PageSection>
        </PageContainer>
    );
}

export default MyCartPage;