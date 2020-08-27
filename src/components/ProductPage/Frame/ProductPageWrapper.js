import React, {useEffect} from "react";
import styled from "styled-components";

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