import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const AUTOPLAY_MS = 5500;

export function PageHero({ eyebrow, slides, primaryCta, secondaryCta }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    const timer = window.setInterval(() => {
      setActive(current => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [slides.length, active]);

  const goTo = index => setActive((index + slides.length) % slides.length);

  const slide = slides[active];
  if (!slide) return null;
  const SlideIcon = slide.icon;

  return <section className="page-slider relative overflow-hidden border-b border-border/60">
      <div className="absolute -left-24 top-16 size-72 rounded-[44%_56%_64%_36%/50%_42%_58%_50%] bg-surface-mint opacity-70" aria-hidden="true" />

      <div className="mx-auto grid min-h-[500px] max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-14">
        <div className="relative z-10 max-w-xl">
          <div className="page-slider-copy" key={`copy-${active}`}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/70 px-4 py-2 text-xs font-bold uppercase text-brand-ink">
              <Sparkles className="size-4" aria-hidden="true" /> {eyebrow}
            </div>
            <h1 className="text-balance text-3xl font-extrabold leading-[1.15] text-brand-ink sm:text-4xl lg:text-5xl">
              {slide.title} <span className="text-primary">{slide.highlight}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {slide.text}
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {primaryCta}
            {secondaryCta}
          </div>

          <div className="page-slider-controls mt-9">
            <div className="page-slider-dots">
              {slides.map((item, index) => <button key={item.title} type="button" aria-label={`Show slide ${index + 1}`} aria-pressed={active === index} className={`page-slider-dot ${active === index ? "is-active" : ""}`} onClick={() => goTo(index)}>
                  {active === index && <span className="page-slider-dot-progress" key={`progress-${active}`} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />}
                </button>)}
            </div>
            <div className="page-slider-arrows">
              <button type="button" aria-label="Previous slide" className="page-slider-arrow" onClick={() => goTo(active - 1)}>
                <ChevronLeft className="size-4" />
              </button>
              <button type="button" aria-label="Next slide" className="page-slider-arrow" onClick={() => goTo(active + 1)}>
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="hero-blueprint relative mx-auto w-full max-w-2xl overflow-hidden border border-primary/20 p-5 sm:p-8 lg:justify-self-end">
          <div className="hero-photo-frame relative mx-auto mt-9 w-[88%] overflow-hidden sm:w-[84%]">
            <div className="relative aspect-[4/3] w-full">
              {slides.map((item, index) => <img key={item.title} src={item.image} alt={item.alt} loading={index === 0 ? "eager" : "lazy"} className={`page-slider-photo absolute inset-0 size-full object-cover ${index === active ? "is-active" : ""}`} aria-hidden={index !== active} />)}
            </div>
            <span className="hero-photo-cross hero-photo-cross-left" aria-hidden="true" />
            <span className="hero-photo-cross hero-photo-cross-right" aria-hidden="true" />
          </div>
          <div className="hero-connector" aria-hidden="true">
            <span />
          </div>
          {SlideIcon && <div className="float-blueprint absolute bottom-5 left-4 flex items-center gap-3 border border-primary/20 bg-card/95 p-4 shadow-soft sm:bottom-8 sm:left-7" key={`stat-${active}`}>
              <span className="grid size-11 shrink-0 place-items-center bg-secondary text-primary">
                <SlideIcon className="size-5" />
              </span>
              <span>
                <strong className="block font-display text-lg text-brand-ink">{slide.statValue}</strong>
                <span className="text-xs font-semibold text-muted-foreground">{slide.statLabel}</span>
              </span>
            </div>}
        </div>
      </div>
    </section>;
}
