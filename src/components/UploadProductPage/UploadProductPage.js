import React from "react";
import styled from "styled-components";

const PageContainer = styled.section`
    width: 100vw;
    height: 90vh; 
`;

const PageContent = styled.div`
    width: 80vw;
    margin: auto;
`;

const UploadProductPage = () => {

    return (
        <PageContainer>
            <PageContent>
                UploadProductPage 시작!
            </PageContent>
        </PageContainer>
    );
}

export default UploadProductPage;