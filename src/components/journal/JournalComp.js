import React from "react"
import ReactMarkdown from "react-markdown";
import './JournalComp.css'

const title = "# React 일지 1 - FLEXBOX FROGGY, CSS DINER\n";
const content = "##### dfdf\n ";

class JournalComp extends React.Component {
    render() {
        return (
            <div className="JournalComp">
                <ReactMarkdown source={title}/>
                <br/>
                <ReactMarkdown source={content}/>
                <div className="code__Area">
                    <code>int i = 0 </code><br/>
                    <code>int j = 0 </code>
                </div>
            </div>
        )
    }
}

export default JournalComp;