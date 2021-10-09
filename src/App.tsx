import React, { useEffect } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000/", {
    transports: ["websocket", "polling"],
});

function App() {
    useEffect(() => {
        socket.on("hello", (message) => {
            console.log(`server said ${message}`);
        });
    }, []);

    function handleJoinRoom() {
        socket.emit("join room", "mart");
    }

    return <button onClick={handleJoinRoom}>Join room</button>;
}

export default App;
