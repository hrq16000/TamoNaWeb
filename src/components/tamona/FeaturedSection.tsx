import { Link } from "react-router-dom";
import { Star, MapPin, MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const mockProviders = [
  { id: "1", name: "Carlos Eletricista", slug: "carlos-eletricista", category: "Elétrica e Hidráulica", categoryColor: "#0EA5E9", city: "Curitiba", neighborhood: "Centro", rating: 4.9, reviews: 47, featured: true },
  { id: "2", name: "Marina Design", slug: "marina-design", category: "Tecnologia", categoryColor: "#6366F1", city: "Curitiba", neighborhood: "Batel", rating: 4.8, reviews: 32, featured: true },
  { id: "3", name: "Advocacia Souza", slug: "advocacia-souza", category: "Jurídico", categoryColor: "#1D4ED8", city: "Curitiba", neighborhood: "Água Verde", rating: 5.0, reviews: 19, featured: false },
  { id: "4", name: "Bela Estética", slug: "bela-estetica", category: "Beleza", categoryColor: "#EC4899", city: "Curitiba", neighborhood: "Juvevê", rating: 4.7, reviews: 63, featured: true },
  { id: "5", name: "Construtora Progresso", slug: "construtora-progresso", category: "Construção e Reformas", categoryColor: "#F97316", city: "Curitiba", neighborhood: "Portão", rating: 4.6, reviews: 28, featured: false },
  { id: "6", name: "Pet Care Vet", slug: "pet-care-vet", category: "Pet", categoryColor: "#A78BFA", city: "Curitiba", neighborhood: "Santa Felicidade", rating: 4.9, reviews: 41, featured: true },
];

const FeaturedSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Empresas em destaque
            </h2>
            <p className="mt-2 text-muted-foreground">
              Profissionais recomendados pela comunidade
            </p>
          </div>
          <Link
            to="/buscar?destaque=true"
            className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Ver todos <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {mockProviders.map((p, i) => (
            <Link
              key={p.id}
              to={`/anunciantes/${p.slug}`}
              className="group bg-card rounded-xl border border-border/60 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 overflow-hidden transition-all duration-200 active:scale-[0.98]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms, box-shadow 0.2s ease`,
              }}
            >
              {/* Cover placeholder */}
              <div className="h-32 bg-gradient-to-br from-secondary/80 to-secondary relative">
                {p.featured && (
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-accent text-xs font-semibold text-white rounded-full">
                    Destaque
                  </span>
                )}
              </div>

              <div className="p-5 space-y-3">
                {/* Name + category */}
                <div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${p.categoryColor}14`,
                        color: p.categoryColor,
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{p.neighborhood}, {p.city}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-foreground">{p.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({p.reviews} avaliações)</span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-1">
                  <Button size="sm" variant="outline" className="flex-1 text-xs h-9 font-medium active:scale-[0.97]">
                    Ver perfil
                  </Button>
                  <Button size="sm" className="h-9 px-3 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.97]">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-6 sm:hidden">
          <Link to="/buscar?destaque=true" className="text-sm font-medium text-primary">
            Ver todos os destaques →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;