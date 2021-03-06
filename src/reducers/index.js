import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";
import messages from "./messages";
import activeUserId from "./activeUserId";
import typing from "./typing";

export default combineReducers({
    contacts,
    user,
    messages,
    activeUserId,
    typing
});