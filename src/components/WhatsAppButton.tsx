import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton: React.FC = () => (
  <a
    href="https://api.whatsapp.com/send/?phone=61468881846"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="text-foreground" size={28} />
  </a>
);

export default WhatsAppButton;
