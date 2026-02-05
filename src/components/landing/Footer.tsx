import { CheckCircle } from "lucide-react";

const footerLinks = [
  { label: "Audit", href: "#" },
  { label: "Execution Engine", href: "#execution" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <img
                src="/logo.png"
                alt="WebGlazer"
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="font-semibold text-lg text-foreground">WebGlazer</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs">
              You build the business. We make sure the machines know how to sell it.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-foreground transition-colors underline-offset-4 hover:underline decoration-[hsl(var(--glow-green))]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-sm">
            <CheckCircle size={16} className="text-glow-green" />
            <span className="text-muted-foreground">All systems operational</span>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Copyright © 2026 WebGlazer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
