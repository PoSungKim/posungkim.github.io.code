import React, {useEffect} from "react";
import styled from "styled-components";

const Input = styled.input`
    border-bottom-left-radius: 15px;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    padding: 0 2rem;
    display: flex;
    outline: none;
    border: none;
    height: auto;
    width: 80%;
    
    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const Btn = styled.div`
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    display: flex;
    height: auto;
    width: 20%;
    
    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

const ChatInputBtn = ({messageState, name, onClick, onKeyPress, onChange}) => {

    useEffect(()=>{
        console.log("RENDER ChatInputBtn PAGE useEffect");
    }, [messageState]);
    return (
        <>
            <Input autoFocus type="text" name={name} onKeyPress={onKeyPress} placeholder="사용자분들에게 여러분의 소식을 들려주세요 ㅎㅎ" value = {messageState.content} onChange={onChange} />
            <Btn onClick={onClick}>Click</Btn>
        </>
    )
}

export default React.memo(ChatInputBtn);