import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
    background: orange;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`;

const LogoArea = ({logo}) => (
    <Logo>
        <span>{logo}</span>
    </Logo>
);

export default LogoArea;