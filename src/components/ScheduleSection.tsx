import { useEffect, useRef } from 'react';
import { Clock, User } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function ScheduleSection() {
  const tableRef = useRef<HTMLDivElement>(null);

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

    if (tableRef.current) {
      observer.observe(tableRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Group schedule by day
  const groupedSchedule = siteContent.schedule.sample.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {} as Record<string, typeof siteContent.schedule.sample>);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <section id="schedule" className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm uppercase tracking-widest mb-4">
            {siteContent.schedule.overline}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl text-text font-bold mb-4">
            {siteContent.schedule.heading}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {siteContent.schedule.subtext}
          </p>
        </div>

        {/* Schedule Table */}
        <div
          ref={tableRef}
          data-reveal
          className="opacity-0 translate-y-8 transition-all duration-700 bg-background border border-border overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-6 py-4 text-sm uppercase tracking-wider text-primary font-bold">
                    Day
                  </th>
                  <th className="text-left px-6 py-4 text-sm uppercase tracking-wider text-primary font-bold">
                    Time
                  </th>
                  <th className="text-left px-6 py-4 text-sm uppercase tracking-wider text-primary font-bold">
                    Class
                  </th>
                  <th className="text-left px-6 py-4 text-sm uppercase tracking-wider text-primary font-bold">
                    Coach
                  </th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => {
                  const classes = groupedSchedule[day] || [];
                  return classes.map((classItem, index) => (
                    <tr
                      key={`${day}-${index}`}
                      className="border-b border-border hover:bg-surface transition-colors"
                    >
                      {index === 0 && (
                        <td
                          rowSpan={classes.length}
                          className="px-6 py-4 font-bold text-text align-top"
                        >
                          {day}
                        </td>
                      )}
                      <td className="px-6 py-4 text-text-muted">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-primary" />
                          {classItem.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-text font-medium">
                        {classItem.class}
                      </td>
                      <td className="px-6 py-4 text-text-muted">
                        <div className="flex items-center gap-2">
                          <User size={16} className="text-primary" />
                          {classItem.coach}
                        </div>
                      </td>
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <button className="bg-transparent border-2 border-primary text-primary px-8 py-4 uppercase text-sm font-bold tracking-wider hover:bg-primary hover:text-background hover:shadow-[0_0_30px_rgba(15,255,80,0.6)] transition-all duration-200">
            {siteContent.schedule.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
