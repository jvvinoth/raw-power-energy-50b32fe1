import { useEffect, useRef } from 'react';
import { siteContent } from '../lib/siteContent';

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('[data-reveal]');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <h2 className="font-heading text-4xl md:text-6xl text-text font-bold mb-16 text-center">
          {siteContent.philosophy.heading}
        </h2>

        {/* Trainers Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Trainers Info */}
          <div data-reveal className="opacity-0 translate-y-8 transition-all duration-700">
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              {siteContent.philosophy.trainers.overline}
            </p>
            <h3 className="font-heading text-3xl md:text-4xl text-text font-bold mb-6">
              {siteContent.philosophy.trainers.heading}
            </h3>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              {siteContent.philosophy.trainers.description}
            </p>

            {/* Team Cards */}
            <div className="space-y-4">
              {siteContent.philosophy.trainers.team.map((member, index) => (
                <div key={index} className="bg-surface border-l-2 border-primary p-4">
                  <h4 className="text-text font-bold text-lg">{member.name}</h4>
                  <p className="text-primary text-sm uppercase tracking-wide mb-1">
                    {member.role}
                  </p>
                  <p className="text-text-muted text-sm">{member.credentials}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            data-reveal
            className="opacity-0 translate-y-8 transition-all duration-700 delay-200"
          >
            <div className="aspect-[4/5] bg-border overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80"
                alt="Our coaching team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image */}
          <div
            data-reveal
            className="opacity-0 translate-y-8 transition-all duration-700 order-2 lg:order-1"
          >
            <div className="aspect-[4/5] bg-border overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
                alt="Training methodology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Approach Info */}
          <div
            data-reveal
            className="opacity-0 translate-y-8 transition-all duration-700 delay-200 order-1 lg:order-2"
          >
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              {siteContent.philosophy.approach.overline}
            </p>
            <h3 className="font-heading text-3xl md:text-4xl text-text font-bold mb-8">
              {siteContent.philosophy.approach.heading}
            </h3>

            {/* Approach Points */}
            <div className="space-y-6">
              {siteContent.philosophy.approach.points.map((point, index) => (
                <div key={index} className="border-l-2 border-border pl-6">
                  <h4 className="text-text font-bold text-xl mb-2">{point.title}</h4>
                  <p className="text-text-muted leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
