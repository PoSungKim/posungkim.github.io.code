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

const TextArea = styled.textarea`
    padding: 0.5rem 0.5rem 0 0.5rem;
    border: 1px solid gray;
    min-height: 12rem;
    font-size: 1.2rem;
    outline: none;
    width: 100%;
`;

const Select = styled.select`
    padding: 0.5rem 0 0.5rem 0.5rem;
    border: 1px solid gray;
    outline: none;
    width: 9rem;
`;

const InputWithLabel = ({children, label, infoType, ...rest}) => {

    const switchToInfoType = (infoType) => {
        switch (infoType) {
            case 'input' :
                return <Input {...rest} />;
            case 'textArea' :
                return <TextArea {...rest} />;
            case 'select':
                return <Select {...rest}>{children}</Select>
        }
    };

    return (
        <Wrapper>
            <Label>{label}</Label>
            { switchToInfoType(infoType) }
        </Wrapper>
    );
};

export default InputWithLabel;