import React, { useEffect, useState } from "react";
import useConversation from "../statemanage/useConversation.js"
import axios from "axios";
import { getMessageRoute } from '../utils/Apiroutes.jsx'

const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessage, selectedConversation } = useConversation();
    useEffect(() => {
        const getMessaegs = async () => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                try {
                    const responce = await axios.get(`${getMessageRoute}/${selectedConversation._id}`)
                    console.log(responce.data);
                    setMessage(responce.data);
                    setLoading(false);
                } catch (error) {
                    console.log(error);

                }
            }
        }
        getMessaegs();
    }, [selectedConversation, setMessage])
    return (
      {loading, messages}
    )
}

export default useGetMessage;
