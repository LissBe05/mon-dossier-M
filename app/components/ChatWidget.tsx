'use client';
import { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: { from: 'user' | 'bot'; text: string } = { from: 'user', text: input };
    const botResponse: { from: 'user' | 'bot'; text: string } = {
      from: 'bot',
      text: "Merci pour votre message ! Nous reviendrons vers vous bientôt. 😊",
    };

    setMessages((prev) => [...prev, userMessage, botResponse]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Bouton d'ouverture */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-900 hover:bg-red-600 text-white p-4 rounded-full shadow-lg"
          aria-label="Ouvrir le chat"
        >
          <FaComments size={20} />
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="w-80 h-96 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-xl flex flex-col">
          {/* En-tête */}
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h4 className="font-bold">Prenez un rendez-vous </h4>
            <button onClick={toggleChat} aria-label="Fermer le chat">
              <FaTimes />
            </button>
          </div>

          {/* Zone des messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  msg.from === 'user'
                    ? 'bg-blue-100 self-end ml-auto text-right'
                    : 'bg-gray-200 dark:bg-gray-700 self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Champ d'envoi */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex gap-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none dark:bg-gray-800"
              placeholder="Écrivez un message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
