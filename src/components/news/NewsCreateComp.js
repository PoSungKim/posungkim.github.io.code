import React from "react";
import {Form, Col, Row, Button} from 'react-bootstrap';
import axios from 'axios';

class NewsCreateComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {"id": -1, "title": "", "content": ""}

    componentDidMount() {
        const newsId = this.props.match.params.id;
        console.log("here is the param : " + newsId);
        if (newsId) {
            this.findNewsById(newsId);
        }
    }

    findNewsById = (newsId) => {
        axios.get("http://localhost:8080/rest/news/" + newsId)
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        id: response.data.id,
                        title: response.data.title,
                        content: response.data.content
                    });
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    alertNews = (mes) => {
        alert(mes + "!  제목 : " + this.state.title + "\n내용 : " + this.state.content);
    }
    goBack = () => {
        this.props.history.push("/news")
    }
    updateNews = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitNews = (event) => {
        event.preventDefault()

        const news = {
            title: this.state.title,
            content: this.state.content
        }

        axios.post("http://localhost:8080/rest/news/submit/", news)
            .then(response => {
                this.alertNews("SAVED")
                this.setState(this.initialState)
                this.goBack();
            })
            .catch(err => {
                alert("NOT SAVED!");
            })
    }

    editNews = (event) => {
        event.preventDefault()

        const news = {
            id: this.state.id,
            title: this.state.title,
            content: this.state.content
        }

        axios.put("http://localhost:8080/rest/news/edit/" + this.state.id, news)
            .then(response => {
                this.alertNews("EDIT");
                this.props.history.push("/news");
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        return (
            <div className={"NewsCreate"}>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextTitle">
                        <Form.Label column sm="2" className="ml-2">
                            제목
                        </Form.Label>
                        <Col sm="11">
                            <Form.Control required
                                          type="text" name="title" placeholder="제목을 작성해주세요"
                                          value={this.state.title}
                                          onChange={this.updateNews}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextContent">
                        <Form.Label column sm="2" className="ml-2">
                            내용
                        </Form.Label>
                        <Col sm="11" style={{height: "25rem"}}>
                            <Form.Control required style={{height: "100%"}}
                                          type="text" name="content" placeholder="내용을 작성해주세요"
                                          as="textarea" value={this.state.content}
                                          onChange={this.updateNews}
                            />
                            <div className="mt-3" style={{"textAlign": "right"}}>
                                <Button onClick={this.goBack} variant="success" type={"submit"}>
                                    뒤로 가기
                                </Button>
                                {" "}
                                <Button onClick={this.state.id === -1 ? this.submitNews : this.editNews}
                                        variant="primary" type={"submit"}>
                                    {this.state.id === -1 ? "Save" : "Edit"}
                                </Button>
                            </div>
                        </Col>
                    </Form.Group>

                </Form>
            </div>
        )
    }
}

export default NewsCreateComp;