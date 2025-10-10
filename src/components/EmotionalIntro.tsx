const EmotionalIntro = () => {
  return (
    <section 
      aria-label="Emotional Intro" 
      className="relative py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center animate-fade-in">
          <div className="mb-8 h-px w-16 bg-accent-bronze mx-auto" />
          
          <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed tracking-wide">
            "Every tattoo is a reflection of someone's story. I'm just here to make sure it's told right."
          </blockquote>
          
          <p className="text-base md:text-lg text-foreground-secondary font-light">
            Ein Mann, der in Stille schafft, was andere laut versprechen.
          </p>
          
          <div className="mt-8 h-px w-16 bg-accent-bronze mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default EmotionalIntro;
