import { create } from 'zustand'

const useConversation = create((set) => ({
    selectedConversation: null,

    // Function to set the selected conversation
    // This function updates the state with the selected conversation
    // and also sets the messages to an empty array
    setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
    
    // Function to set the messages
    // This function updates the state with the messages
    // for the selected conversation
    messages: [],
    setMessage: (messages) => set({ messages }),
}))

export default useConversation