"use client";

import React, { useState } from "react";
import axios from "axios";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

const API_BASE = "https://dietitian-agent-977121587860.asia-south2.run.app";

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

export default function DietitianChatPage() {
  const [sessionId, setSessionId] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const initSession = async () => {
    setError("");
    try {
      const res = await axios.post(`${API_BASE}/init-session`, {
        session_id: crypto.randomUUID(),
      });
      setSessionId(res.data.session_id);
      setMessages([]);
    } catch (err) {
      console.error(err);
      setError("Failed to start session.");
    }
  };

  const sendMessage = async () => {
    if (!message.trim() || !sessionId) return;
    const userMsg: ChatMessage = { role: "user", text: message };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(`${API_BASE}/chat`, {
        message,
        session_id: sessionId,
      });
      const botMsg: ChatMessage = { role: "assistant", text: res.data.response };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const clearSession = async () => {
    if (!sessionId) return;
    try {
      await axios.delete(`${API_BASE}/clear-session/${sessionId}`);
      setSessionId("");
      setMessages([]);
    } catch (err) {
      console.error(err);
      setError("Failed to clear session.");
    }
  };

  return (
    <div className="px-4 md:px-36">
      <VantaFog />
      <div className="max-w-3xl  mt-10 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          Talk to Your <AuroraText>AI Dietitian</AuroraText>
        </h1>
        <p className="text-gray-600">
          Start a dietitian chat session, ask questions, and get AI-powered nutrition advice.
        </p>

        {/* Session Controls */}
        <div className="flex gap-4 mt-6">
          <button onClick={initSession} className="bg-black text-white px-4 py-2 rounded-lg">
            {sessionId ? "New Session" : "Start Session"}
          </button>
          {sessionId && (
            <button
              onClick={clearSession}
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Clear Session
            </button>
          )}
        </div>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {/* Chat Window */}
        {sessionId && (
          <div className="mt-8 border rounded-lg p-4 bg-white opacity-30 dark:bg-gray-900 h-[400px] overflow-y-auto">
            {messages.length === 0 && (
              <p className="text-gray-500 text-center">
                Ask your first question to get started...
              </p>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-4 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Message Input */}
        {sessionId && (
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow p-3 border rounded-md dark:bg-gray-800 dark:text-white"
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <RainbowButton onClick={sendMessage} className="h-12" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </RainbowButton>
          </div>
        )}
      </div>
    </div>
  );
}
