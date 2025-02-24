"use client";

import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();

      setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Error connecting to AI.", sender: "bot" }]);
    }

    setInput("");
  };

  return (
    <div>
      <button
        style={styles.toggleButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        💬
      </button>

      {isOpen && (
        <div style={styles.chatContainer}>
          <div style={styles.chatHeader}>AI Chatbot</div>
          <div style={styles.chatBody}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  backgroundColor: msg.sender === "user" ? "#007bff" : "#ddd",
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div style={styles.chatInput}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={styles.input}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} style={styles.sendButton}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Inline Styles
const styles = {
  chatContainer: {
    width: "300px",
    position: "fixed",
    bottom: "80px",
    right: "20px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
  },
  chatHeader: {
    background: "#007bff",
    color: "white",
    padding: "10px",
    textAlign: "center",
    borderRadius: "10px 10px 0 0",
  },
  chatBody: {
    maxHeight: "300px",
    overflowY: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  message: {
    padding: "10px",
    borderRadius: "10px",
    maxWidth: "80%",
    color: "#000",
  },
  chatInput: {
    display: "flex",
    borderTop: "1px solid #ccc",
    padding: "5px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
  },
  sendButton: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  },
  toggleButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "18px",
  },
};

export default Chatbot;
