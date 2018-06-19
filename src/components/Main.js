import React from "react";
import "./Main.css";
import Empty from "../components/Empty";
import ChatWindow from "../containers/ChatWindow";

const Main = ({user, activeUserId}) => (
    <main className="Main">
        {
            !activeUserId ?
                <Empty user={user} activeUserId={activeUserId}/> :
                <ChatWindow activeUserId={activeUserId}/>
        }
    </main>
);

export default Main