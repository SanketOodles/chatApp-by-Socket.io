import { useState } from 'react';
import axios from "axios";
import useConversation from '../statemanage/useConversation.js';
import{sendMessageRoute} from '../utils/Apiroutes.jsx'
const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessage, selectedConversation } = useConversation();
    const sendMessage=async()=>{
        setLoading(true);
        if(selectedConversation && selectedConversation._id) {
            try {
               const res = await axios.post(`${sendMessageRoute}/${selectedConversation._id}`);
               setMessage([...messages, res.data]);
               setLoading(false);
            } catch (error) {
                console.log(error);
    
            }
        }
        try {
            
        } catch (error) {
            console.log("Error in send messages", error);
            setLoading(false);
        }
    }
 
    return { loading, sendMessage };
  
}

export default useSendMessage