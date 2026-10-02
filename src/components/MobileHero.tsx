/** CSS selects the layout; server and client always render the same markup. */
export default function MobileHero() {
  return (
    <section className="mobile-hero relative overflow-hidden" aria-label="Вступление">
      <div className="mobile-hero-inner mx-auto flex w-full max-w-[520px] flex-col items-center text-center">
        <p data-reveal data-reveal-delay="60" className="mobile-hero-eyebrow font-sans uppercase text-white/60">bldrn — видеомонтажёр</p>
        <div className="mobile-hero-visual">
          <div aria-hidden="true" className="mobile-edit-background font-display font-[900] uppercase tracking-tighter">EDIT</div>
          <h1 data-reveal data-reveal-delay="130" className="mobile-motion-title font-display font-[900] uppercase tracking-tighter">МОУШН</h1>
          <div data-reveal="fade" data-reveal-delay="220" className="mobile-cat relative flex aspect-square items-center justify-center animate-float">
            <div aria-hidden="true" className="absolute inset-4 rounded-full bg-emerald-200/10 blur-3xl" />
            <img src="https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/bg-object.png" alt="Bladerunner" fetchPriority="high" className="relative z-10 h-full w-full object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.3)]" />
          </div>
        </div>
        <div data-reveal data-reveal-delay="320" className="mobile-hero-caption flex flex-col items-center">
          <div aria-hidden="true" className="hero-rule" />
          <p className="mobile-hero-tagline font-display font-light text-white/80">собираю кадры в истории, которые хочется досмотреть</p>
        </div>
      </div>
    </section>
  );
}
