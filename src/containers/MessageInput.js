import React from "react";
import store from "../store";
import "./MessageInput.css";
import {setTypingValue} from "../reducers/typing";
import {sendMessage} from "../reducers/messages";

const MessageInput = ({value}) => {

    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };

    const state = store.getState();
    const handleSubmit = e => {
        e.preventDefault();
        const {typing, activeUserId} = state;
        store.dispatch(sendMessage(typing, activeUserId));
    };

    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    );
};

export default MessageInput;