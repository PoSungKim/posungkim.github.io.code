import React from 'react';
import styled, {css} from 'styled-components';

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 1rem;
    color: gray;
    margin-bottom: 0.25rem;
`;

const Input = styled.input`
    width: 100%;
    border: 1px solid gray;
    outline: none;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

export const LoginButton = styled.button`
    
    margin-right: 10px;
    margin-top: 30px;
    
    padding: 8px 12px;
    border-radius: 4px;
    background-color: #ffd43b;
    ${props => props.content && css`
        &::after {
            content: "${props.content}";
        }
    `}
`;

// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputWithLabel = ({label, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {...rest}/>
    </Wrapper>
);

export default InputWithLabel;