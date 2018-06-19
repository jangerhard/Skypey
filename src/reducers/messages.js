import {getMessages} from "../static-data";
import _ from "lodash"

export const SEND_MESSAGE = "SEND_MESSAGE";

export default function messages(state = getMessages(10), action) {
    switch (action.type) {
        case SEND_MESSAGE:
            const { message, userId } = action.payload;
            const allUserMsgs = state[userId];
            const number = +_.keys(allUserMsgs).pop()+1;

            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            };
        default:
            return state;
    }
}

export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
});