const ReflectionQuote = () => {
  return (
    <section 
      aria-label="Reflection Quote" 
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center animate-fade-in">
          <div className="mb-8 h-px w-12 bg-accent-bronze mx-auto" />
          
          <blockquote className="space-y-6">
            <p className="text-2xl md:text-3xl font-light text-foreground italic leading-relaxed tracking-wide">
              "It's never just ink on skin. It's a memory given form."
            </p>
            
            <p className="text-lg md:text-xl text-foreground-secondary font-light italic leading-relaxed">
              „Es ist nie nur Tinte auf der Haut. Es ist eine Erinnerung, die Gestalt angenommen hat."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ReflectionQuote;
