import {SEND_MESSAGE} from "./messages";

export const SET_TYPING_VALUE = "SET_TYPING_VALUE";

export default function typing(state = "", action) {
    switch (action.type) {
        case SET_TYPING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
            return "";
        default:
            return state;
    }
}

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
});
