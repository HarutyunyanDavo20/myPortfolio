import React from 'react';

const MessagesTodos = ({messages}) => {
    return (
        <div className="list-messages"> 
        {messages.map(text => <h3 style={{color: text.color}}>{text.body}</h3>)} 
         
        </div>
    );
}

export default MessagesTodos;
