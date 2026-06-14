import { FileText } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function FinalCtaSection() {
  const handleCtaClick = () => {
    const url = `https://wa.me/${siteContent.whatsapp.number}?text=${encodeURIComponent(siteContent.whatsapp.message)}`;
    window.open(url, '_blank');
  };

  const handlePdfClick = () => {
    window.open(siteContent.finalCta.pdfLink, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(15,255,80,0.1) 35px, rgba(15,255,80,0.1) 70px)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Overline */}
        <div className="inline-block bg-surface border border-secondary text-secondary px-4 py-1.5 text-xs uppercase tracking-wider mb-6">
          {siteContent.finalCta.overline}
        </div>

        {/* Heading */}
        <h2 className="font-heading text-4xl md:text-6xl text-text font-bold mb-6">
          {siteContent.finalCta.heading}
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
          {siteContent.finalCta.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <button
            onClick={handleCtaClick}
            className="bg-primary text-background px-10 py-5 uppercase text-base font-bold tracking-wider hover:shadow-[0_0_50px_rgba(15,255,80,0.8)] hover:scale-105 transition-all duration-200"
          >
            {siteContent.finalCta.cta}
          </button>
          
          <button
            onClick={handlePdfClick}
            className="bg-surface border-2 border-primary text-primary px-8 py-5 uppercase text-base font-bold tracking-wider hover:bg-primary hover:text-background transition-all duration-200 flex items-center gap-3"
          >
            <FileText size={20} />
            {siteContent.finalCta.pdfLabel}
          </button>
        </div>

        {/* Note */}
        <p className="text-sm text-text-muted italic">{siteContent.finalCta.note}</p>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/2 left-0 w-32 h-[2px] bg-primary opacity-50" />
      <div className="absolute top-1/2 right-0 w-32 h-[2px] bg-primary opacity-50" />
    </section>
  );
}
