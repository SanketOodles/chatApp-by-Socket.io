import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const getMessage = async (req, res) =>{
    try {
        const {id:chatuser}=req.params;
        const senderId = req.user._id;
        const converstation = await Conversation.findOne({ 
            members: { $all: [senderId, chatuser] },
        }).populate("messages");
        if (!converstation) {
            return res.status(404).json({ message: "Conversation not found" });
        }
        const messages = await Message.find({
            $or: [
                { senderId: senderId, receiverId: chatuser },
                { senderId: chatuser, receiverId: senderId },
            ],
        }).populate("senderId", "name")
          .populate("receiverId", "name");
        if (!messages) {
            return res.status(404).json({ message: "Messages not found" });
        }
        res.status(200).json({
            message: "Messages retrieved successfully",
            conversationId: converstation._id,
            messages: messages,
        });
    } catch (error) {
        console.log("Error in getMessage", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const sendMessage = async (req, res) =>{
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // Find existing conversation or create a new one
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId],
                messages: [],
            });
        }

        // Create new message
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
        });

        // Push message into conversation
        conversation.messages.push(newMessage._id);
        await conversation.save();

        res.status(200).json({
            message: "Message sent successfully",
            conversationId: conversation._id,
            messageData: newMessage,
        });
    } catch (error) {
        console.error("Error in sendMessage:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};