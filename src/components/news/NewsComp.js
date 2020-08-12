import React from 'react';
import {Button, Table} from 'react-bootstrap';
import {Link} from "react-router-dom";
import axios from 'axios';

class NewsComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount = () => {
        this.getNews();
    }
    getNews = () => {
        axios.get("http://localhost:8080/rest/news")
            .then(response => {
                console.log("Received Data : ", response.data);
                return response.data
            })
            .then(data => this.setState({news: data}))
    }
    deleteUser = (news_id) => {
        axios.delete("http://localhost:8080/rest/news/" + news_id)
            .then(response => {
                console.log("Deleted Data : ", response.data);
                return response.data
            })
            .then(this.setState(
                {
                    news: this.state.news.filter(news => {
                        return news.id !== news_id
                    })
                }
            ))
            .catch(err => {
                alert("ERROR : " + news_id);
            })
    }

    render() {
        //console.log("IS it working???");
        let num = 0;
        return (
            <div className="news">
                <h1>
                    News
                    <Link style={{textDecoration: 'none'}} className={"text-muted"}
                          to={this.props.location.pathname + "/create"}>(작성)</Link>
                </h1>
                <Table hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.news.length === 0 ?
                            <tr align="center">
                                <td colSpan={6}>No News Available.</td>
                            </tr> :
                            this.state.news.map((news) => (
                                <tr key={++num}>
                                    <td>{num}</td>
                                    <td>{news.title}</td>
                                    <td>{news.content}</td>
                                    <td>
                                        <Link to={"/news/edit/" + news.id}>
                                            <Button> 수정 </Button>
                                        </Link> {" "}
                                        <Button variant="danger" onClick={() => {
                                            this.deleteUser(news.id)
                                        }}> 삭제</Button>
                                    </td>
                                </tr>
                            ))
                    }
                    </tbody>
                </Table>
            </div>
        );
    };
}

export default NewsComp;