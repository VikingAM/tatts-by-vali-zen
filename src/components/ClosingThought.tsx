const ClosingThought = () => {
  return (
    <section 
      aria-label="Closing Thought" 
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto max-w-3xl px-6">
        <div 
          className="text-center animate-fade-in"
          style={{ animationDelay: '100ms' }}
        >
          <div className="mb-8 h-px w-12 bg-accent-bronze mx-auto" />
          
          <blockquote className="space-y-6">
            <p className="text-2xl md:text-3xl font-light text-foreground italic leading-relaxed tracking-wide">
              "I create in silence so others can speak through ink."
            </p>
            
            <p className="text-lg md:text-xl text-foreground-secondary font-light italic leading-relaxed">
              „Ich arbeite in Stille, damit andere durch Linien sprechen können."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ClosingThought;
