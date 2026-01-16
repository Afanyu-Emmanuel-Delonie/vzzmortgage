import React from "react";
import { Sparkles, AlertCircle, User } from "lucide-react";

function renderFormattedText(text) {
  const lines = text.split("\n");

  return lines.map((line, index) => {
    const isListItem = /^\s*-\s*(.*)$/.test(line);

    if (isListItem) {
      const content = line.replace(/^\s*-\s*/, "");
      const formattedContent = content.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
      );
      return (
        <span key={index} className="flex gap-2 mb-1">
          <span>•</span>
          <span dangerouslySetInnerHTML={{ __html: formattedContent }} />
        </span>
      );
    }

    const formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    if (formattedLine.trim() === "") {
      return <br key={index} />;
    }

    return (
      <span
        key={index}
        className="block"
        dangerouslySetInnerHTML={{ __html: formattedLine }}
      />
    );
  });
}

const MessageItem = ({ message }) => {
  const isBot = message.sender === "bot";
  const isError = message.isError;

  return (
    <div
      className={`flex flex-col ${
        isBot ? "items-start" : "items-end"
      } gap-1.5 group animate-slide-up`}
    >
      <div
        className={`flex items-end gap-2.5 max-w-[90%] ${
          isBot ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Avatar */}
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform group-hover:scale-110 ${
            isBot
              ? "bg-[#102044]/10 text-[#102044]"
              : "bg-slate-200 text-slate-600"
          }`}
        >
          {isBot ? <Sparkles size={16} /> : <User size={16} />}
        </div>

        {/* Bubble */}
        <div
          className={`px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
            isBot
              ? isError
                ? "bg-red-50 border border-red-100 text-red-800 rounded-bl-none"
                : "bg-white border border-slate-200 text-slate-700 rounded-bl-none"
              : "bg-gradient-to-br from-[#102044] to-[#1a3a5c] text-white rounded-br-none shadow-[#102044]/10"
          }`}
        >
          {isError && <AlertCircle size={14} className="inline mr-2 mb-0.5" />}

          {/* Simple Markdown-like replacement for basic bold/italics/lists */}
          <div className="whitespace-pre-wrap">
            {renderFormattedText(message.text)}
          </div>
        </div>
      </div>

      {/* Timestamp */}
      <span className="text-[10px] text-slate-400 font-medium px-11">
        {message.timestamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
};

export default MessageItem;
