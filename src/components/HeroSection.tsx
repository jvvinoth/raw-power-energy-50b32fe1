import { useEffect, useRef } from 'react';
import { siteContent } from '../lib/siteContent';

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCtaClick = (isPrimary: boolean) => {
    if (isPrimary) {
      const url = `https://wa.me/${siteContent.whatsapp.number}?text=${encodeURIComponent(siteContent.whatsapp.message)}`;
      window.open(url, '_blank');
    } else {
      const element = document.querySelector('#schedule');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 100%), url('${siteContent.hero.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-20">
        {/* Badge */}
        <div className="inline-block bg-surface border border-primary text-primary px-4 py-1.5 text-xs uppercase tracking-wider mb-6">
          {siteContent.hero.badge}
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="mb-6">
          {siteContent.hero.headline.map((line, index) => (
            <h1
              key={index}
              className="font-heading text-6xl md:text-8xl leading-[0.9] text-text font-bold"
              style={{
                letterSpacing: '-0.02em',
                animation: `fadeUp 0.8s ease-out forwards ${index * 0.15}s`,
                opacity: 0,
              }}
            >
              {line}
            </h1>
          ))}
        </div>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mt-6"
          style={{
            animation: 'fadeUp 0.8s ease-out forwards 0.4s',
            opacity: 0,
          }}
        >
          {siteContent.hero.subtext}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-10"
          style={{
            animation: 'fadeIn 0.6s ease-out forwards 0.7s',
            opacity: 0,
          }}
        >
          <button
            onClick={() => handleCtaClick(true)}
            className="bg-primary text-background px-8 py-4 uppercase text-sm font-bold tracking-wider hover:shadow-[0_0_40px_rgba(15,255,80,0.8)] hover:scale-105 transition-all duration-200"
          >
            {siteContent.hero.ctaPrimary}
          </button>
          <button
            onClick={() => handleCtaClick(false)}
            className="border-2 border-text text-text px-8 py-4 uppercase text-sm font-medium tracking-wide hover:bg-text hover:text-background transition-all duration-200"
          >
            {siteContent.hero.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Decorative diagonal line */}
      <div
        className="absolute bottom-20 right-20 w-[200px] h-[2px] bg-primary hidden lg:block"
        style={{
          transform: 'rotate(45deg)',
          transformOrigin: 'center',
        }}
      />
    </section>
  );
}
