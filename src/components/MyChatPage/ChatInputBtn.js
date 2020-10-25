import React, {useEffect} from "react";
import styled from "styled-components";
import oc from "open-color";

const Input = styled.input`
    border-bottom-left-radius: 15px;
    background-color: ${oc.gray[3]};
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
        background-color: ${oc.white};
        border-bottom-left-radius: unset;
        font-size: 1.3rem;
        &::-webkit-input-placeholder {
            font-size: 0.85rem;
        }
    }
`;

const Btn = styled.div`
    border-bottom-right-radius: 15px;
    background-color: ${oc.yellow[5]};
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    height: auto;
    width: 20%;
    
    &:hover {
        background-color: ${oc.yellow[3]};
    }
    
    @media screen and (max-width: 768px) {
        border-bottom-right-radius: unset;
        font-size: 1rem;
    }
`;

const ChatInputBtn = React.memo(({messageState, name, onClick, onKeyPress, onChange}) => {

    useEffect(()=>{
        // console.log("RENDER ChatInputBtn PAGE useEffect");
    }, [messageState]);
    return (
        <>
            <Input autoFocus type="text" name={name} onKeyPress={onKeyPress} placeholder="사용자분들에게 여러분의 소식을 들려주세요 ㅎㅎ" value = {messageState.content} onChange={onChange} />
            <Btn onClick={onClick}>Click</Btn>
        </>
    )
});

export default React.memo(ChatInputBtn);