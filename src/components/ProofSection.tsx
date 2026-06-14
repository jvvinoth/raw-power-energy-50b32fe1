import { useEffect, useRef } from 'react';
import { siteContent } from '../lib/siteContent';

export default function ProofSection() {
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
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            {siteContent.proof.overline}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-text font-bold">
            {siteContent.proof.heading}
          </h2>
        </div>

        {/* Transformation Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {siteContent.proof.transformations.map((transformation, index) => (
            <div
              key={index}
              data-reveal
              className="bg-surface border border-border p-6 opacity-0 translate-y-8 transition-all duration-700"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="aspect-[4/5] bg-border mb-4 overflow-hidden">
                <img
                  src={transformation.image}
                  alt={`Transformation: ${transformation.name}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stat */}
              <p className="font-heading text-2xl text-primary mb-1">
                {transformation.stat}
              </p>
              <p className="font-heading text-xl text-primary/70 mb-3">
                {transformation.period}
              </p>

              {/* Quote */}
              <p className="text-base text-text-muted italic mt-2 leading-relaxed">
                "{transformation.quote}"
              </p>

              {/* Name */}
              <p className="text-sm text-text mt-3 font-medium">
                {transformation.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
