import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function Footer() {
  return (
    <footer id="contact" className="bg-surface border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              {siteContent.brand.name}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Elite training facility for serious athletes and dedicated lifters. Stop wishing. Start lifting.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-text-muted text-sm">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p>{siteContent.footer.address}</p>
                  <p>{siteContent.footer.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-text-muted text-sm">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href={`tel:${siteContent.footer.phone}`} className="hover:text-primary transition-colors">
                  {siteContent.footer.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-text-muted text-sm">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href={`mailto:${siteContent.footer.email}`} className="hover:text-primary transition-colors">
                  {siteContent.footer.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-text font-bold text-sm uppercase tracking-wider mb-4">
              Opening Hours
            </h4>
            <div className="space-y-3">
              {siteContent.footer.hours.map((hour, index) => (
                <div key={index} className="flex items-start gap-3 text-text-muted text-sm">
                  <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-text font-medium">{hour.days}</p>
                    <p>{hour.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-text font-bold text-sm uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <div className="space-y-3">
              {siteContent.footer.social.map((social, index) => {
                const Icon = social.platform === 'Instagram' ? Instagram : Facebook;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center gap-3 text-text-muted text-sm hover:text-primary transition-colors group"
                  >
                    <Icon size={18} className="text-primary flex-shrink-0" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {social.handle}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <p className="text-text-muted text-sm text-center">
            {siteContent.footer.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}
