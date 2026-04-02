import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, CheckCircle2, Users, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Users, label: "+5.000 profissionais" },
  { icon: Star, label: "Avaliações verificadas" },
  { icon: MessageCircle, label: "Orçamento grátis" },
];

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative bg-hero overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] opacity-0 animate-fade-in"
            style={{ lineHeight: '1.1' }}
          >
            Encontre os melhores profissionais{" "}
            <span className="text-gradient bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">
              da sua região
            </span>
          </h1>

          <p
            className="text-base md:text-lg text-white/70 max-w-lg mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: '100ms', textWrap: 'pretty' }}
          >
            Compare, avalie e contrate serviços locais de confiança com orçamento grátis pelo WhatsApp.
          </p>

          {/* Search bar */}
          <form
            onSubmit={handleSearch}
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-xl shadow-xl shadow-black/20 overflow-hidden max-w-xl mx-auto">
              <div className="flex items-center flex-1 px-4">
                <Search className="h-5 w-5 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="O que você precisa? Ex: encanador, advogado..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 px-3 py-4 text-sm md:text-base text-foreground outline-none bg-transparent placeholder:text-muted-foreground/60"
                />
              </div>
              <Button
                type="submit"
                className="m-2 sm:m-1.5 px-6 py-3 h-auto bg-primary hover:bg-primary/90 text-base font-semibold rounded-lg active:scale-[0.97] transition-all duration-150"
              >
                Buscar
              </Button>
            </div>
          </form>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 opacity-0 animate-fade-in"
            style={{ animationDelay: '350ms' }}
          >
            {badges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-1.5 text-white/60 text-sm">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12">
          <path d="M0 48H1440V0C1440 0 1200 48 720 48C240 48 0 0 0 0V48Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;