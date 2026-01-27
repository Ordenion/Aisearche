import { footerLinks } from '../../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top row - centered */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-center md:text-center">
          {/* Logo & Description */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center md:gap-6">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <span className="font-bold text-text-heading">WebGlazer</span>
              </div>
              <p className="text-sm text-text-muted md:hidden">
                We help businesses measure and improve visibility in AI-generated search.
              </p>
            </div>

            {/* keep description visible on md+ without stacking */}
            <p className="hidden md:block text-sm text-text-muted">
              We help businesses measure and improve visibility in AI-generated search.
            </p>

            {/* Social links placeholder */}
            <div className="flex gap-3 mt-4 md:mt-0">
              {['ig', 'in', '📧'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-surface-alt rounded-lg flex items-center justify-center text-text-muted hover:bg-border hover:text-text transition-colors text-xs"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          {/*<div>
            <h4 className="font-semibold text-text-heading mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-text-muted hover:text-text transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>*/}

          {/* Company */}
          {/*<div>
            <h4 className="font-semibold text-text-heading mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-text-muted hover:text-text transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>*/}

          {/* Resources */}
          {/*<div>
            <h4 className="font-semibold text-text-heading mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-text-muted hover:text-text transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>*/}

          {/* Legal */}
          {/*<div>
            <h4 className="font-semibold text-text-heading mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-text-muted hover:text-text transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>*/}
        </div>

        {/* Bottom bar - centered */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center gap-4 md:flex-row md:justify-center md:text-center">
          <p className="text-sm text-text-muted">
            © 2026 WebGlazer. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-text-muted">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
