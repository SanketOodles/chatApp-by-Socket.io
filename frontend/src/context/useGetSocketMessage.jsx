import { useEffect } from 'react';
import { useSocketContext } from './SocketContest.jsx';
import useConversation from '../statemanage/useConversation.js';
import sound from '../assets/soundmp3.wav';


const useGetSocketMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessage } = useConversation();
   

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            const notification = new Audio(sound);
            notification.play();
            setMessage((prev) => [...prev, newMessage]);
        };

        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("newMessage", handleNewMessage);
        };
    }, [socket, messages, setMessage]);
};

export default useGetSocketMessage;
