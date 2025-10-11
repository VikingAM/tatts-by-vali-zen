import heroJpg from "@/assets/hero-tattoo-hands.jpg";

const Hero = () => {
  return (
    <>
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with cinematic mood */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Optional: AVIF/WebP sources, falls vorhanden */}
          {/* <source srcSet={heroAvif} type="image/avif" />
          <source srcSet={heroWebp} type="image/webp" /> */}
          <img
            src={heroJpg}
            sizes="100vw"
            width="1920"
            height="1280"
            alt="Ruhige Präzision in Schwarz-Grau: Hände bei der Arbeit, Fokus auf Handwerk und Tiefe"
            className="w-full h-full object-cover object-[54%_42%]"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        {/* Mood overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 to-transparent" />
        {/* Targeted right-hand highlight cut */}
        <div className="hero-rightcut absolute inset-0 z-10 pointer-events-none" />
        {/* Diagonal light-brake to calm highlights */}
        <div className="hero-diaglight absolute inset-0 z-10 pointer-events-none opacity-80 md:opacity-90" />
        {/* Side light-brake (subtle left-to-right darkening) */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-l from-black/35 via-transparent to-transparent" />
        {/* Local radial vignette near text block (subtle, breathing + drift) */}
        <div className="absolute inset-0 z-10 pointer-events-none hero-vignette" />
        {/* Room light brightness layer */}
        <div className="absolute inset-0 z-10 pointer-events-none hero-roomlight" />
        {/* Afterglow layer removed for cleanliness */}
        {/* Selective right-side lens blur */}
        <div className="hero-rightblur absolute inset-0 z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute inset-0 z-10 hero-grain pointer-events-none" />
        {/* Lens breathing overlay (backdrop blur) */}
        <div className="absolute inset-0 z-10 pointer-events-none hero-lens" />

        {/* Letterbox bars */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 sm:h-12 bg-gradient-to-b from-background/85 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 sm:h-12 bg-gradient-to-t from-background/85 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-20 px-6">
        <div className="mx-auto max-w-5xl md:max-w-5xl pt-20 md:pt-28">
          <div className="relative text-center md:text-left hero-tgroup md:translate-y-[-4vh]">
            <p className="hero-intro text-[15px] md:text-[17px] text-[#ffffffd9] tracking-wide mb-2">
              Art beyond ink.
            </p>
            <div className="h-px w-6 md:w-8 opacity-60 mt-2 mb-4 mx-auto md:mx-0 hero-microline" />
            <h1
              id="hero-heading"
              className="font-display font-light inline-block md:whitespace-nowrap text-[clamp(40px,6.6vw,112px)] 2xl:text-[128px] tracking-[0.0025em] leading-[1.03] md:translate-y-[1px] hero-tracking-drift drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] relative z-20"
            >
              <span className="hero-split-a hero-warm-gradient hero-gradient-sweep">
                Precision
              </span>{' '}
              <span className="hero-split-b hero-warm-gradient hero-gradient-sweep tracking-[-0.01em]">
                with Soul
              </span>
            </h1>

            <div className="h-px w-16 bg-[#A46B3E]/80 opacity-80 mt-4 mb-4 mx-auto md:mx-0 hero-separator" />

            {/* Local subvignette behind verse block only */}
            <div className="absolute inset-0 z-0 pointer-events-none hero-verse-vignette" aria-hidden="true" />
            <div className="hero-verse space-y-4 md:space-y-4 max-w-3xl md:max-w-4xl mx-auto md:mx-0 mt-5 md:mt-6">
              <p className="hero-verse-line text-[clamp(18px,1.55vw,24px)] 2xl:text-[26px] font-light leading-[1.9] text-[#e6e0d6]/85 mt-5"><span className="hero-line-inner">In jeder Linie ein Gedanke.</span></p>
              <p className="hero-verse-line text-[clamp(18px,1.55vw,24px)] 2xl:text-[26px] font-light leading-[1.9] text-[#e6e0d6]/85"><span className="hero-line-inner">In jeder Bewegung Bedeutung.</span></p>
              <p className="hero-verse-line text-[clamp(18px,1.55vw,24px)] 2xl:text-[26px] font-light leading-[1.9] text-[#e6e0d6]/85"><span className="hero-line-inner">In der Stille entsteht Wahrheit.</span></p>
              <p className="hero-verse-line -mt-[2px] text-[clamp(18px,1.55vw,24px)] 2xl:text-[26px] font-light leading-[1.9] text-[#e6e0d6]/85"><span className="hero-line-inner">Im Detail liegt Seele.</span></p>
            </div>
          </div>
        </div>
      </div>

      
    </section>
    {/* Inline hero-specific CSS animations */}
    <style>
      {`
        /* Timings & easing (hero scope) */
        #hero {
          --t-fade: .75s;
          --e-fade: cubic-bezier(.22,.61,.36,1);
          --t-line: 0.8s; /* optional: faster line draw */
          --e-line: cubic-bezier(.22,.61,.36,1);
          --t-stagger: .16s;
          /* Baseline delays */
          --d-intro: .25s;
          --d-microline: .35s;
          --d-split-a: 1.0s;
          --d-split-gap: .25s; /* faster transition between Precision → with Soul */
          --d-split-b: calc(var(--d-split-a) + var(--d-split-gap));
          --d-sep: 1.80s;
          --d-verse-1: calc(var(--d-sep) + .20s);
        }
        /* ENTRANCE KEYFRAMES */
        @keyframes kfFadeUpSlow { from { opacity:0; transform: translateY(12px); } to { opacity:1; transform: translateY(0); } }
        @keyframes kfLineDrawIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes kfMicroScale { 0% { transform: scale(1); } 100% { transform: scale(1.02); } }

        /* Disable any legacy per-line animations on generic .hero-verse p elements */
        .hero-verse p:not(.hero-verse-line) { animation: none !important; opacity: initial; transform: none; }

        /* 1) Intro text */
        .hero-intro { opacity:0; transform: translateY(8px); animation: kfFadeUpSlow var(--t-fade, .75s) var(--e-fade, cubic-bezier(.22,.61,.36,1)) var(--d-intro, .25s) forwards, kfIntroHold 4.5s ease-out var(--d-intro, .25s) forwards; }
        @keyframes kfIntroHold { 0%, 80% { opacity: 1; } 100% { opacity: .85; } }

        /* 2) Micro line under intro (slightly longer, separated) */
        .hero-microline { transform-origin:left; opacity:1; background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.45) 50%, rgba(255,255,255,0) 100%); background-size: 200% 100%; background-position: 0% 50%; animation: kfLineDrawIn var(--t-line, 1.1s) var(--e-line, cubic-bezier(.22,.61,.36,1)) var(--d-microline, .35s) both, kfLineBreathe 24s ease-in-out var(--d-microline, .35s) infinite alternate, kfLineGlintSlow 60s ease-in-out calc(var(--d-microline, .35s) + .9s) infinite alternate; }

        /* 3) Headline (split) */
        .hero-split-a { display:inline-block; opacity:0; transform: translateY(8px); animation: kfFadeUpSlow var(--t-fade, .75s) var(--e-fade, cubic-bezier(.22,.61,.36,1)) var(--d-split-a, 1s) forwards; }
        .hero-split-b { display:inline-block; opacity:0; transform: translateY(8px); animation: kfFadeUpSlow var(--t-fade, .75s) var(--e-fade, cubic-bezier(.22,.61,.36,1)) var(--d-split-b, 1.9s) forwards; }

        /* 4) Main separator reveal — unified definition handled below */

        /* 5) Poem lines — sequential */
        .hero-verse-line { opacity:0; transform: translateY(12px); will-change: opacity, transform; }
        .hero-verse-line:nth-child(1) { animation: kfFadeUpSlow 0.50s var(--e-fade, cubic-bezier(.22,.61,.36,1)) var(--d-verse-1, 3.25s) forwards; }
        .hero-verse-line:nth-child(2) { animation: kfFadeUpSlow 0.50s var(--e-fade, cubic-bezier(.22,.61,.36,1)) calc(var(--d-verse-1, 3.25s) + var(--t-stagger, .20s)) forwards; }
        .hero-verse-line:nth-child(3) { animation: kfFadeUpSlow 0.50s var(--e-fade, cubic-bezier(.22,.61,.36,1)) calc(var(--d-verse-1, 3.25s) + (var(--t-stagger, .20s) * 2)) forwards; }
        .hero-verse-line:nth-child(4) { animation: kfFadeUpSlow 0.50s var(--e-fade, cubic-bezier(.22,.61,.36,1)) calc(var(--d-verse-1, 3.25s) + (var(--t-stagger, .20s) * 3)) forwards; }
        .hero-verse-line .hero-line-inner { display:inline-block; will-change: transform; }

        /* Reduced motion: skip entrances */
        @media (prefers-reduced-motion: reduce) {
          .hero-intro, .hero-microline, .hero-split-a, .hero-split-b, .hero-separator, .hero-verse-line { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
        /* Verse container drift only (no per-line nth-child rules) */
        .hero-verse { will-change: transform; animation: kfVerseDriftHold 45s cubic-bezier(.45,.05,.55,.95) infinite; }
        @keyframes kfVerseDriftHold { 0% { transform: translateY(0px); } 45% { transform: translateY(2px); } 50% { transform: translateY(2px); } 95% { transform: translateY(0px); } 100% { transform: translateY(0px); } }
        /* Headline subtle micro-scale breathing */
        #hero-heading { display: inline-block; will-change: transform; animation: kfMicroScale 20s cubic-bezier(.45,.05,.55,.95) 2s infinite alternate; }

        /* Roomlight pulse with hold (neutral, no bronze tint) */
        .hero-roomlight { opacity: 0; mix-blend-mode: screen; }
        @supports (filter: brightness(1)) or (-webkit-filter: brightness(1)) {
          .hero-roomlight { opacity: 1; filter: brightness(0.98); -webkit-filter: brightness(0.98); animation: kfRoomlightPulseHold 40s cubic-bezier(.45,.05,.55,.95) infinite; }
        }
        @keyframes kfRoomlightPulseHold { 0% { filter: brightness(.98); -webkit-filter: brightness(.98); } 45% { filter: brightness(1.02); -webkit-filter: brightness(1.02); } 50% { filter: brightness(1.02); -webkit-filter: brightness(1.02); } 95% { filter: brightness(.98); -webkit-filter: brightness(.98); } 100% { filter: brightness(.98); -webkit-filter: brightness(.98); } }

        /* Grain – monochrome and ultra-low opacity (no bronze artifacts) */
        .hero-grain { will-change: opacity; animation: kfGrainOpacity 30s cubic-bezier(.45,.05,.55,.95) infinite alternate; mix-blend-mode: multiply; filter: grayscale(100%) brightness(1) contrast(1); }
        @media (max-width: 768px) {
          /* Delay reductions (~12%) keep durations identical */
          #hero {
            --d-intro: .22s;
            --d-microline: .31s;
            --d-split-a: .88s;
            --d-split-gap: .792s;
            --d-split-b: calc(var(--d-split-a) + var(--d-split-gap));
            --d-sep: 1.85s;
            --d-verse-1: 2.86s;
          }
          .hero-grain { animation: kfGrainOpacity 25s cubic-bezier(.45,.05,.55,.95) infinite alternate; }
          .hero-roomlight { filter: brightness(0.99); -webkit-filter: brightness(0.99); }
          @supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {
            .hero-lens { animation: rightBlurBreathHold 40s cubic-bezier(.45,.05,.55,.95) infinite; }
            @keyframes rightBlurBreathHold { 0% { backdrop-filter: blur(.3px); -webkit-backdrop-filter: blur(.3px); } 95% { backdrop-filter: blur(.7px); -webkit-backdrop-filter: blur(.7px); } 100% { backdrop-filter: blur(.7px); -webkit-backdrop-filter: blur(.7px); } }
          }
        }
        @keyframes kfGrainOpacity { 0% { opacity: .004; } 100% { opacity: .012; } }
        .hero-gradient-sweep { background-size: 140% 140%; will-change: background-position; }
        /* Gradient text - always visible with bronze gradient */
        .hero-warm-gradient {
          color: #B67A4F !important;
          background: linear-gradient(90deg, #A46B3E 0%, #B67A4F 50%, #A46B3E 100%);
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }
        /* Much subtler sweep with long duration and smaller travel */
        @keyframes headlineSweepWithHold {
          0% { background-position: 0% 50%; }
          48% { background-position: 30% 50%; }
          52% { background-position: 30% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-gradient-sweep { animation: headlineSweepWithHold 120s cubic-bezier(.45,.05,.55,.95) infinite; }

        /* Headline micro tracking drift */
        @keyframes headlineTracking { 0% { letter-spacing: 0.005em; } 100% { letter-spacing: 0.008em; } }
        .hero-tracking-drift { animation: headlineTracking 15s cubic-bezier(.45,.05,.55,.95) infinite alternate; }

        /* Split-fade headline parts */
        .hero-fade { animation: none !important; }

        /* Vignette breathe + center drift */
        .hero-vignette { background: radial-gradient(52vw 52vw at 35% 45%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 60%); opacity: .18; will-change: opacity, transform; animation: heroVignetteBreathe 19s cubic-bezier(.45,.05,.55,.95) infinite alternate, heroVignetteDrift 27s cubic-bezier(.45,.05,.55,.95) infinite alternate; }
        @keyframes vignetteOpacity { 0% { opacity: .12; } 95% { opacity: .20; } 100% { opacity: .20; } }
        @keyframes vignetteDrift { 0% { transform: translate(0%,0%); } 95% { transform: translate(2%,2%); } 100% { transform: translate(2%,2%); } }
        .hero-vignette { animation-name: vignetteOpacity, vignetteDrift; }

        /* Separator draw + glow + glint */
        .hero-separator { width: 64px; box-shadow: 0 0 2px rgba(164,107,62,0.25); will-change: box-shadow, width, background-position; overflow: hidden; background-image: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.35) 50%, rgba(255,255,255,0) 100%); background-size: 200% 100%; background-position: 0% 50%; }
        @keyframes sepDraw { from { width: 0; } to { width: 64px; } }
        @keyframes sepGlow { 0% { box-shadow: 0 0 2px rgba(164,107,62,0.25); } 100% { box-shadow: 0 0 5px rgba(164,107,62,0.45); } }
        @keyframes sepGlint { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
        .hero-separator { animation: sepDraw var(--t-line, 1.1s) var(--e-line, cubic-bezier(.22,.61,.36,1)) both, sepGlow 22s cubic-bezier(.45,.05,.55,.95) infinite alternate, sepGlint 90s cubic-bezier(.45,.05,.55,.95) infinite alternate; animation-delay: var(--d-sep, 2.10s), 0s, 0s; }

        /* Text-group in-frame parallax */
        @keyframes tgroupParallax { 0% { transform: translateY(0px); } 100% { transform: translateY(2px); } }
        .hero-tgroup { will-change: transform; animation: tgroupParallax 45s cubic-bezier(.45,.05,.55,.95) infinite alternate; }

        /* Lens breathing via backdrop-filter */
        .hero-lens { opacity: 0; }
        @supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {
          .hero-lens { opacity: 1; backdrop-filter: blur(0px); -webkit-backdrop-filter: blur(0px); animation: rightBlurBreathHold 40s cubic-bezier(.45,.05,.55,.95) infinite; }
        }
        @keyframes rightBlurBreathHold { 0% { backdrop-filter: blur(.6px); -webkit-backdrop-filter: blur(.6px); } 95% { backdrop-filter: blur(1.0px); -webkit-backdrop-filter: blur(1.0px); } 100% { backdrop-filter: blur(1.0px); -webkit-backdrop-filter: blur(1.0px); } }
        .hero-rightblur { clip-path: polygon(52% 0%, 100% 0%, 100% 100%, 52% 100%); }
        /* Fallback for browsers not supporting backdrop-filter */
        .hero-rightblur { animation: rightBlurOpacity 40s cubic-bezier(.45,.05,.55,.95) infinite alternate; }
        @keyframes rightBlurOpacity { 0% { opacity: 0; } 50% { opacity: .05; } 100% { opacity: 0; } }

        /* Right-cut composed background */
        .hero-rightcut { background: radial-gradient(36vw 28vw at 72% 46%, rgba(0,0,0,.40) 0%, rgba(0,0,0,0) 62%), linear-gradient(115deg, rgba(0,0,0,.42), transparent 38%, transparent 72%); }
        @media (min-width: 1600px) {
          .hero-rightcut { background: radial-gradient(36vw 28vw at 72% 46%, rgba(0,0,0,.38) 0%, rgba(0,0,0,0) 62%), linear-gradient(115deg, rgba(0,0,0,.40), transparent 38%, transparent 72%); }
        }

        /* Dot-trail scroll indicator removed */
        /* Local subvignette only behind the verse block (fully transparent edges, no box) */
        .hero-verse-vignette {
          position: absolute;
          inset: -25vh -25vw -25vh -25vw; /* expand beyond container to avoid visible edges */
          pointer-events: none;
          background: radial-gradient(62vw 62vw at 36% 56%,
            rgba(0,0,0,0.07) 0%,
            rgba(0,0,0,0.03) 45%,
            rgba(0,0,0,0.00) 70%);
        }
        @media (min-width: 1600px) {
          .hero-verse-vignette { background: radial-gradient(65vw 65vw at 38% 56%, rgba(0,0,0,0.07) 0%, rgba(0,0,0,0.03) 45%, rgba(0,0,0,0.00) 70%); }
        }

        /* Micro-line draw + idle glint keyframes */
        @keyframes kfLineDrawIn { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes kfLineBreathe { 0% { opacity: .55; } 100% { opacity: .78; } }
        @keyframes kfLineGlintSlow { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }

        @media (prefers-reduced-motion: reduce) {
          .hero-gradient-sweep, .hero-tracking-drift, .hero-tgroup, .hero-roomlight, .hero-lens, .hero-rightblur, .hero-vignette, .hero-separator, .hero-dots .hero-dot-1, .hero-dots .hero-dot-2, .hero-dots .hero-dot-3, .hero-microline, .hero-verse { animation: none !important; }
          .hero-fade, .hero-split-a, .hero-split-b, .hero-verse p { animation-duration: .001s !important; }
        }

        .hero-diaglight { background: linear-gradient(115deg, rgba(0,0,0,.35), transparent 35%, transparent 70%); }
      `}
    </style>
    </>
  );
};

export default Hero;
