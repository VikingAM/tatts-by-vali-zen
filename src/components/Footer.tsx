const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background-secondary">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-foreground-secondary">
            © {new Date().getFullYear()} Tatts by Vali. All rights reserved.
          </div>
          
          <div className="flex gap-8 text-sm">
            <a
              href="#about"
              className="text-foreground-secondary transition-smooth hover:text-accent-bronze"
            >
              About
            </a>
            <a
              href="#process"
              className="text-foreground-secondary transition-smooth hover:text-accent-bronze"
            >
              Process
            </a>
            <a
              href="#work"
              className="text-foreground-secondary transition-smooth hover:text-accent-bronze"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-foreground-secondary transition-smooth hover:text-accent-bronze"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
