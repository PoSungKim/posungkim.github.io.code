import React from "react";
import {Card, Container} from "react-bootstrap";

class ProfileComp extends React.Component {
    render() {
        return (
            <div className="d-none d-lg-block">
                <Container style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Card style={{width: '18rem'}}>

                        <Card.Img variant="top" src="https://avatars2.githubusercontent.com/u/37537227?s=460&u=202a41ec807e7d974885904913c6c46649020392&v=4" />

                        <Card.Body>
                            <Card.Title>김보성</Card.Title>
                            <Card.Text>
                                꾸준히 열심히 배우자!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default ProfileComp;