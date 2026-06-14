import { useEffect, useRef } from 'react';
import { Dumbbell, Users, Target, Calendar } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const icons = [Dumbbell, Users, Target, Calendar];

export default function OfferingsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('[data-reveal]');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="classes" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-heading text-4xl md:text-6xl text-text font-bold mb-4">
            {siteContent.offerings.heading}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl">
            {siteContent.offerings.subtext}
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.offerings.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                data-reveal
                className="bg-background border border-border p-6 opacity-0 translate-y-8 transition-all duration-700 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(15,255,80,0.1)] group"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-4 text-primary">
                  <Icon size={48} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl md:text-3xl text-text font-bold mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-base text-text-muted mb-4 leading-relaxed">
                  {card.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-text-muted flex items-start">
                      <span className="text-primary mr-2">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="text-primary text-sm uppercase tracking-wider font-medium border-b border-primary pb-1 hover:text-primary/80 transition-colors">
                  {card.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
