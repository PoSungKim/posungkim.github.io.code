import React, {useEffect} from "react";

const ChatContent = ({contentState}) => {
    useEffect(()=>{
        console.log("RENDER ChatContent PAGE useEffect");
    }, [contentState]);

    return (
        <>
            {contentState.length > 0 &&  contentState.map(content => (
                <div>{content.sender} {content.content} {content.date} </div>
            ))}
        </>
    )
}

export default ChatContent;