import React, {useEffect} from "react";

const ChatInputBtn = ({messageState, onClick, onChange}) => {

    useEffect(()=>{
        console.log("RENDER ChatInputBtn PAGE useEffect");
    }, [messageState]);
    return (
        <>
            <input type="text" value = {messageState.content} onChange={onChange} />
            <button onClick={onClick}>눌러</button>
        </>
    )
}

export default React.memo(ChatInputBtn);