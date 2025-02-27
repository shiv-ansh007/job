"use client";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { Send, Paperclip, X } from "lucide-react";

const socket = io("http://localhost:5000");

export default function ChatPanel({ userId }) {
  const [activeChats, setActiveChats] = useState([
    { id: 1, name: "Alice Johnson", profileImage: "/images/alice.jpg" },
    { id: 2, name: "Bob Smith", profileImage: "/images/bob.jpg" },
  ]); // Sample mentors
  const [openChat, setOpenChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (openChat) {
      socket.emit("joinRoom", { userId, mentorId: openChat.id });

      const messageHandler = (msg) => setMessages((prev) => [...prev, msg]);
      const typingHandler = (typing) => setIsTyping(typing);

      socket.on("message", messageHandler);
      socket.on("typing", typingHandler);

      return () => {
        socket.off("message", messageHandler);
        socket.off("typing", typingHandler);
      };
    }
  }, [openChat]);

  const sendMessage = () => {
    if (message.trim() !== "" && openChat) {
      const newMessage = {
        userId,
        mentorId: openChat.id,
        type: "text",
        content: message,
        timestamp: new Date().toLocaleTimeString(),
      };
      socket.emit("sendMessage", newMessage);
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  const handleTyping = () => {
    if (openChat) {
      socket.emit("typing", { userId, mentorId: openChat.id });
    }
  };

  const uploadFile = async () => {
    if (!file || !openChat) return;
    setUploading(true);
    
    const formData = new FormData();
    formData.append("attachment", file);
    formData.append("userId", userId);

    try {
      const res = await fetch("http://localhost:5000/uploadAttachment", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      const fileMessage = {
        userId,
        mentorId: openChat.id,
        type: "file",
        content: data.url,
        timestamp: new Date().toLocaleTimeString(),
      };

      socket.emit("sendMessage", fileMessage);
      setMessages((prev) => [...prev, fileMessage]);
      setFile(null);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed bottom-0 px-2 py-2 right-4 flex flex-col items-end z-50">
      {/* Active chat list */}
      <div className="flex flex-col bg-white mt-2 shadow-lg rounded-lg p-3">
        {activeChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setOpenChat(chat)}
            className="flex items-center mt-3 bg-yellow-600 p-2 cursor-pointer hover:bg-yellow-700 rounded-lg"
          >
            <img src={chat.profileImage} alt={chat.name} className="w-10 h-10 rounded-full" />
            <span className="ml-3 font-medium">{chat.name}</span>
          </div>
        ))}
      </div>

      {/* Open Chat Panel */}
      {openChat && (
        <div className="w-80 bg-white shadow-xl rounded-lg fixed bottom-16 right-4 border">
          <div className="p-3 bg-yellow-500 rounded-lg text-white flex justify-between items-center">
            <span className="font-bold">{openChat.name}</span>
            <button onClick={() => setOpenChat(null)} className="text-white">
              <X size={20} />
            </button>
          </div>

          <div className="p-3 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 my-2 ${msg.userId === userId ? "text-right" : "text-left"}`}>
                <div className={`inline-block p-2 rounded-lg ${msg.userId === userId ? "bg-yellow-500 text-white" : "bg-yellow-500 text-white"}`}>
                  {msg.type === "text" ? (
                    <span>{msg.content}</span>
                  ) : (
                    <a href={msg.content} target="_blank" rel="noopener noreferrer" className="underline">
                      📎 {file?.name || "View Attachment"}
                    </a>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-1">{msg.timestamp}</div>
              </div>
            ))}
            {isTyping && <div className="text-gray-400 text-sm">Mentor is typing...</div>}
          </div>

          <div className="p-3 border-t text-white flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleTyping}
              placeholder="Type a message..."
              className="flex-grow bg-yellow-500 text-white p-2 border rounded-lg"
            />
            <button onClick={sendMessage} className="ml-2 p-2 bg-yellow-500 text-white rounded-lg">
              <Send size={20} />
            </button>
            {!file ? (
              <label htmlFor="fileUpload" className="ml-2 p-2 bg-yellow-500 rounded-lg cursor-pointer">
                <Paperclip size={20} />
              </label>
            ) : (
              <button
                onClick={uploadFile}
                className="ml-2 p-2 bg-yellow-500 text-white rounded-lg"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload"}
              </button>
            )}
            <input
              type="file"
              className="hidden"
              id="fileUpload"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>
      )}
    </div>
  );
}