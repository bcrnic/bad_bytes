import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { testimonialsContent } from "@/lib/content";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            {testimonialsContent.sectionTitle}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
            {testimonialsContent.sectionSubtitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {testimonialsContent.sectionDescription}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsContent.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "glass-card rounded-xl p-6 md:p-8 relative",
                "opacity-0 animate-slide-up"
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 text-sm md:text-base">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
