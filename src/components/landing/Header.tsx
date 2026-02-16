import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X, LogOut } from "lucide-react";

const navLinks = [
  { label: "Why Now", href: "#wake-up" },
  { label: "The Leak", href: "#money-leak" },
  { label: "Execution", href: "#execution" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 pt-4">
        <div className={`header-frame ${isScrolled ? "bg-background" : "bg-white"}`}>
          <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-[hsl(var(--glow-green))] border-[3px] border-border flex items-center justify-center">
                <img src="/logo.png" alt="WebGlazer" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-extrabold text-base md:text-lg text-foreground tracking-wide uppercase">WebGlazer</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wide text-foreground hover:underline underline-offset-4 decoration-[hsl(var(--glow-green))]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <>
                  <Link to="/app">
                    <Button variant="ghost" size="sm" className="border-2 border-border gap-2">
                      {user.photoURL && (
                        <img
                          src={user.photoURL}
                          alt=""
                          className="w-6 h-6 rounded-full"
                          referrerPolicy="no-referrer"
                        />
                      )}
                      {user.displayName?.split(' ')[0] ?? 'Dashboard'}
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="border-2 border-border"
                    onClick={async () => { await signOut(); navigate('/'); }}
                    aria-label="Sign out"
                  >
                    <LogOut size={16} />
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="border-2 border-border">
                    Sign in
                  </Button>
                </Link>
              )}
              <Button
                size="sm"
                className="bg-[hsl(var(--glow-purple))] text-foreground border-2 border-border px-4 py-2 hover:-translate-y-0.5 active:translate-y-0.5"
              >
                Reach Out
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground transition-colors"
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t-2 border-border animate-fade-in">
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-2 py-2 text-foreground font-semibold uppercase tracking-wide hover:underline underline-offset-4 decoration-[hsl(var(--glow-green))]"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  {user ? (
                    <>
                      <Link to="/app" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="ghost" className="w-full justify-center border-2 border-border gap-2">
                          {user.photoURL && (
                            <img
                              src={user.photoURL}
                              alt=""
                              className="w-6 h-6 rounded-full"
                              referrerPolicy="no-referrer"
                            />
                          )}
                          Dashboard
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        className="w-full justify-center border-2 border-border gap-2"
                        onClick={async () => {
                          await signOut();
                          setIsMobileMenuOpen(false);
                          navigate('/');
                        }}
                      >
                        <LogOut size={16} />
                        Sign out
                      </Button>
                    </>
                  ) : (
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-center border-2 border-border">
                        Sign in
                      </Button>
                    </Link>
                  )}
                  <Button
                    className="w-full justify-center bg-[hsl(var(--glow-purple))] text-foreground border-2 border-border"
                  >
                    Reach Out
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
