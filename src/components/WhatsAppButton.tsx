import { MessageCircle } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${siteContent.whatsapp.number}?text=${encodeURIComponent(siteContent.whatsapp.message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-primary text-background p-4 rounded-full shadow-[0_0_30px_rgba(15,255,80,0.4)] hover:shadow-[0_0_40px_rgba(15,255,80,0.8)] hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
      style={{
        animation: 'pulse 2s ease-in-out infinite',
      }}
    >
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
    </button>
  );
}
