export const SET_ACTIVE_USER_ID = "SET_ACTIVE_USER_ID";

export default function activeUserId(state = null, action) {
    switch (action.type) {
        case SET_ACTIVE_USER_ID:
            return action.payload;
        default:
            return state;
    }
}

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id
});