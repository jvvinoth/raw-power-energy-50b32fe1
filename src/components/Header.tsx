import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${siteContent.whatsapp.number}?text=${encodeURIComponent(siteContent.whatsapp.message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-xl' : 'bg-background/95 backdrop-blur-xl'
        } border-b border-border`}
        style={{ height: '80px' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }} className="font-heading text-2xl font-bold text-primary tracking-tight">
            {siteContent.brand.name}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteContent.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="text-sm uppercase tracking-wider text-text-muted hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={handleWhatsAppClick}
            className="hidden md:block bg-transparent border-2 border-primary text-primary px-6 py-2.5 uppercase text-sm font-medium tracking-wide hover:bg-primary hover:text-background hover:shadow-[0_0_30px_rgba(15,255,80,0.6)] transition-all duration-200"
          >
            BOOK FREE TRIAL
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {siteContent.navigation.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="text-3xl uppercase tracking-wider text-text hover:text-primary transition-colors duration-200"
                style={{
                  animation: `fadeIn 0.3s ease-out forwards ${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { handleWhatsAppClick(); setIsMobileMenuOpen(false); }}
              className="mt-4 bg-primary text-background px-8 py-4 uppercase text-sm font-bold tracking-wider"
              style={{
                animation: `fadeIn 0.3s ease-out forwards ${siteContent.navigation.length * 0.1}s`,
                opacity: 0,
              }}
            >
              BOOK FREE TRIAL
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
