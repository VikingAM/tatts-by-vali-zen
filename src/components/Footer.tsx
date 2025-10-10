const Footer = () => {
  return (
    <footer 
      aria-label="Site Footer"
      style={{ backgroundColor: '#0C0C0C' }}
      className="py-12"
    >
      <div className="container mx-auto max-w-6xl px-6">
        {/* Bronze Divider */}
        <div className="h-px w-full bg-accent-bronze mb-12" />
        
        {/* Footer Content */}
        <div className="text-center space-y-6">
          {/* Copyright */}
          <p className="text-sm text-foreground-secondary">
            © {new Date().getFullYear()} Tatts by Vali. All rights reserved.
          </p>
          
          {/* Navigation */}
          <nav className="flex justify-center gap-6 md:gap-8 text-sm">
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
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
