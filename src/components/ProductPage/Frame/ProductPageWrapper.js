import React, {useEffect} from "react";
import styled from "styled-components";

const PageContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    height: auto;
`;

const PageSection = styled.div`
    padding: 5vh 10vw;
    min-height: 90vh;
    
    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

const ProductPageWrapper = ({children}) => {

    return (
        <PageContainer>
            <PageSection>
                {children}
            </PageSection>
        </PageContainer>
    )
}

export default ProductPageWrapper;