import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Categorias", href: "/categorias" },
  { label: "Cidades", href: "/cidades" },
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Blog", href: "/blog" },
];

const TamonaHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-card/92 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <MapPin className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground hidden sm:block">
            Tamona<span className="text-primary">Web</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-muted/60 transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search bar — desktop */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center flex-1 max-w-sm bg-muted/50 rounded-lg border border-border/60 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10 transition-all duration-150"
        >
          <Search className="ml-3 h-4 w-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Buscar serviço ou profissional..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground/70"
          />
        </form>

        {/* CTAs */}
        <div className="flex items-center gap-2 shrink-0">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="text-sm font-medium">
              Entrar
            </Button>
          </Link>
          <Link to="/cadastrar" className="hidden sm:block">
            <Button size="sm" className="text-sm font-semibold bg-primary hover:bg-primary/90 active:scale-[0.97] transition-all duration-150">
              Anunciar Grátis
            </Button>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted/60 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border/60 bg-card animate-fade-in">
          <div className="container py-4 space-y-3">
            {/* Mobile search */}
            <form onSubmit={handleSearch} className="flex items-center bg-muted/50 rounded-lg border border-border/60">
              <Search className="ml-3 h-4 w-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Buscar serviço..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent px-3 py-2.5 text-sm outline-none"
              />
            </form>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-foreground rounded-md hover:bg-muted/60 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link to="/cadastrar" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 font-semibold">
                Anunciar Grátis
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default TamonaHeader;