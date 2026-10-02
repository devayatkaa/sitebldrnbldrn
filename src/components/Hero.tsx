export default function Hero() {
  return (
    <>
    <section className="hero hero-desktop relative overflow-hidden">
      <div className="hero-composition relative z-10 mx-auto flex max-w-[1600px] flex-col items-center px-5 text-center">
        <div aria-hidden="true" data-reveal="fade" data-reveal-delay="180" className="hero-backdrop pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <span className="font-display font-[900] uppercase tracking-tighter text-white/[0.035]">EDIT</span>
        </div>
        <div className="hero-content relative z-10 flex w-full flex-col items-center">
          <p data-reveal data-reveal-delay="60" className="hero-eyebrow mb-4 font-sans uppercase text-white/60">bldrn — видеомонтажёр</p>
          <div className="hero-art">
            <h1 data-reveal data-reveal-delay="130" className="hero-title font-display font-[900] uppercase tracking-tighter">МОУШН</h1>
            <div data-reveal data-reveal-delay="220" className="hero-object relative mt-5 flex aspect-square items-center justify-center animate-float">
              <div aria-hidden="true" className="absolute inset-4 rounded-full bg-emerald-200/10 blur-3xl" />
              <img
                src="https://pub-1da93a6fafd14fe684660a2ca5bc384a.r2.dev/bg-object.png"
                alt="Bladerunner"
                fetchPriority="high"
                className="relative z-10 h-auto w-[92%] drop-shadow-[0_16px_24px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
          <div data-reveal data-reveal-delay="320" className="hero-caption flex flex-col items-center">
            <div aria-hidden="true" className="hero-rule" />
            <p className="hero-tagline font-display font-light text-white/80">собираю кадры в истории, которые хочется досмотреть</p>
          </div>
        </div>
        <span aria-hidden="true" className="hero-star absolute left-[10%] top-[24%] md:left-[20%] md:top-[18%] text-white/30">✦</span>
        <span aria-hidden="true" className="hero-star absolute right-[12%] top-[36%] md:right-[22%] md:top-[30%] text-sm text-white/20">✦</span>
        <span aria-hidden="true" className="hero-star absolute bottom-[20%] left-[20%] md:bottom-[15%] md:left-[30%] text-white/20">✦</span>
        <span aria-hidden="true" className="hero-star absolute bottom-[16%] right-[18%] md:bottom-[25%] md:right-[28%] text-sm text-white/25">✦</span>
      </div>
    </section>
    <section className="mobile-hero relative overflow-hidden" aria-label="Вступление">
      <div className="mobile-hero-inner mx-auto flex w-full max-w-[520px] flex-col items-center px-4 text-center">
        <p data-reveal data-reveal-delay="60" className="mobile-hero-eyebrow font-sans uppercase text-white/60">bldrn — видеомонтажёр</p>
        <div className="mobile-hero-visual">
          <div aria-hidden="true" className="mobile-edit-background font-display font-[900] uppercase tracking-tighter">EDIT</div>
          <h1 data-reveal data-reveal-delay="130" className="mobile-motion-title font-display font-[900] uppercase tracking-tighter">МОУШН</h1>
          <div data-reveal data-reveal-delay="220" className="mobile-cat relative flex aspect-square items-center justify-center animate-float">
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
    </>
  );
}
