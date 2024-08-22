// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Chat.css';
// import { useAuthContext } from '../../context/UseAuthContext';

// const Chat = () => {
//     const { user, logout } = useAuthContext();
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const [isSending, setIsSending] = useState(false); // State to track if a message is being sent
//     const [controller, setController] = useState(null); // State to store AbortController
//     const navigate = useNavigate();

//     const updateBotMessage = (newContent) => {
//         setMessages((prevMessages) => {
//             const lastIndex = prevMessages.length - 1;
//             if (lastIndex >= 0 && prevMessages[lastIndex].type === "user") {
//                 return [...prevMessages, { type: "bot", content: newContent }];
//             } else if (lastIndex >= 0 && prevMessages[lastIndex].type === "bot") {
//                 const updatedMessages = [...prevMessages];
//                 updatedMessages[lastIndex] = {
//                     ...updatedMessages[lastIndex],
//                     content: newContent,
//                 };
//                 return updatedMessages;
//             }
//             return prevMessages;
//         });
//     };

//     const sendMessage = async (e) => {
//         e.preventDefault();
//         if (input.trim() === "") return;

//         setIsSending(true); // Set sending state to true
//         const newController = new AbortController(); // Create a new AbortController
//         setController(newController);

//         const userMessage = { type: "user", content: input };
//         setMessages((prevMessages) => [...prevMessages, userMessage]);
//         setInput("");

//         try {
//             const queryParam = encodeURIComponent(input);
//             const url = `https://chembot-backend.onrender.com/query?text=${queryParam}`;
//             const response = await fetch(url, { signal: newController.signal });

//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }

//             const reader = response.body.getReader();
//             const decoder = new TextDecoder();
//             let accumulatedMessage = "";

//             while (true) {
//                 const { done, value } = await reader.read();
//                 if (done) break;

//                 const chunk = decoder.decode(value, { stream: true });
//                 if (chunk.includes("END")) {
//                     break;
//                 }

//                 if (chunk.includes("Error:")) {
//                     alert("There was an error on the server");
//                     setIsSending(false); // Reset sending state
//                     return;
//                 }

//                 accumulatedMessage += chunk;
//                 updateBotMessage(accumulatedMessage);
//             }
            
//         } catch (error) {
//             if (error.name === 'AbortError') {
//                 console.log("Request was aborted");
//             } else {
//                 console.error("Error:", error);
//             }
//         } finally {
//             setIsSending(false); // Reset sending state
//             setController(null); // Reset the AbortController
//         }
//     };

//     // Function to handle the abort action
//     const handleAbort = () => {
//         if (controller) {
//             controller.abort();
//         }
//     };

//     return (
//         <div className="chat-container">
//             <nav className="navbar">
//                 <h1>Chembot</h1>
//                 <button onClick={logout} className="logout-button">Logout (in next update)</button>
//             </nav>
//             <div className="chat-content">
//                 <div className="chat-window">
//                     {messages.map((msg, index) => (
//                         <div key={index} className={`chat-message ${msg.type}`}>
//                             <div className="message-content" style={{whiteSpace: "pre-wrap", wordWrap: "break-word", textAlign: "left"}}>
//                                 {msg.content}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <form onSubmit={isSending ? handleAbort : sendMessage} className="chat-form">
//                     <input
//                         type="text"
//                         placeholder="Type your message..."
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         disabled={isSending} // Disable input while sending a message
//                     />
//                     <button 
//                         type="submit" 
//                         style={{ backgroundColor: isSending ? 'red' : '' }}
//                     >
//                         {isSending ? 'Stop' : 'Send'}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Chat;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chat.css';
import { useAuthContext } from '../../context/UseAuthContext';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
    const { user, logout } = useAuthContext();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isSending, setIsSending] = useState(false); // State to track if a message is being sent
    const [controller, setController] = useState(null); // State to store AbortController
    const navigate = useNavigate();
    const chatEndRef = useRef()

    const updateBotMessage = (newContent) => {
        setMessages((prevMessages) => {
            const lastIndex = prevMessages.length - 1;
            if (lastIndex >= 0 && prevMessages[lastIndex].type === "user") {
                return [...prevMessages, { type: "bot", content: newContent }];
            } else if (lastIndex >= 0 && prevMessages[lastIndex].type === "bot") {
                const updatedMessages = [...prevMessages];
                updatedMessages[lastIndex] = {
                    ...updatedMessages[lastIndex],
                    content: newContent,
                };
                return updatedMessages;
            }
            return prevMessages;
        });
    };

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      };
    
      useEffect(scrollToBottom, [messages]);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (input.trim() === "") return;

        setIsSending(true); // Set sending state to true
        const newController = new AbortController(); // Create a new AbortController
        setController(newController);

        const userMessage = { type: "user", content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");

        try {
            const queryParam = encodeURIComponent(input);
            const url = `https://chembot-backend.onrender.com/query?text=${queryParam}`;
            const response = await fetch(url, { signal: newController.signal });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let accumulatedMessage = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                if (chunk.includes("END")) {
                    break;
                }

                if (chunk.includes("Error:")) {
                    alert("There was an error on the server");
                    return;
                }

                accumulatedMessage += chunk;
                updateBotMessage(accumulatedMessage);
            }

        } catch (error) {
            if (error.name === 'AbortError') {
                console.log("Request was aborted");
            } else {
                console.error("Error:", error);
            }
        } finally {
            setIsSending(false); // Reset sending state
            setController(null); // Reset the AbortController
        }
    };

    // Function to handle the abort action
    const handleAbort = (e) => {
        e.preventDefault()
        if (controller) {
            controller.abort();
        }
    };

    return (
        <div className="chat-container">
            <nav className="navbar">
                <h1>Chembot</h1>
                <button onClick={logout} className="logout-button"><Link  style={{color:"white",textDecoration:"none"}}to={"/"}>Home</Link></button>
            </nav>
            <div className="chat-content">
                <div className="chat-window">
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.type}`}>
                            <div className="message-content" style={{whiteSpace: "pre-wrap", wordWrap: "break-word", textAlign: "left"}}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    <div ref={chatEndRef} />
                </div>
                <form onSubmit={isSending ?(e) =>handleAbort(e) :(e)=> sendMessage(e)} className="chat-form">
                    <input
                        type="text"
                        
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={isSending} // Disable input while sending a message
                    />
                    <button 
                        type="submit" 
                        style={{ backgroundColor: isSending ? 'red' : '' }}
                    >
                        {isSending ? 'Stop' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
