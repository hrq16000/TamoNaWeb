import { Link } from "react-router-dom";
import {
  Hammer, Cpu, Heart, Sparkles, GraduationCap, Scale,
  Car, Zap, SprayCan, PartyPopper, UtensilsCrossed, PawPrint,
  Landmark, Shield, Tractor, Hotel, Church, Eye, CarFront, Scissors,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const categories = [
  { name: "Construção e Reformas", slug: "construcao-e-reformas", icon: Hammer, color: "#F97316" },
  { name: "Tecnologia", slug: "tecnologia", icon: Cpu, color: "#6366F1" },
  { name: "Saúde", slug: "saude", icon: Heart, color: "#10B981" },
  { name: "Beleza", slug: "beleza", icon: Sparkles, color: "#EC4899" },
  { name: "Educação", slug: "educacao", icon: GraduationCap, color: "#8B5CF6" },
  { name: "Jurídico", slug: "juridico", icon: Scale, color: "#1D4ED8" },
  { name: "Automotivo", slug: "automotivo", icon: Car, color: "#DC2626" },
  { name: "Elétrica e Hidráulica", slug: "eletrica-e-hidraulica", icon: Zap, color: "#0EA5E9" },
  { name: "Limpeza", slug: "limpeza", icon: SprayCan, color: "#06B6D4" },
  { name: "Eventos", slug: "eventos", icon: PartyPopper, color: "#F59E0B" },
  { name: "Alimentação", slug: "alimentacao", icon: UtensilsCrossed, color: "#84CC16" },
  { name: "Pet", slug: "pet", icon: PawPrint, color: "#A78BFA" },
  { name: "Finanças", slug: "financas", icon: Landmark, color: "#059669" },
  { name: "Segurança", slug: "seguranca", icon: Shield, color: "#374151" },
  { name: "Hospedagem", slug: "hospedagem", icon: Hotel, color: "#0369A1" },
  { name: "Barbearia", slug: "barbearia", icon: Scissors, color: "#92400E" },
];

const CategoriesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Explore por categoria
          </h2>
          <p className="mt-2 text-muted-foreground max-w-md mx-auto" style={{ textWrap: 'pretty' }}>
            Encontre o profissional ideal para o que você precisa
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                to={`/categoria/${cat.slug}`}
                className="group flex flex-col items-center gap-3 p-5 bg-card rounded-xl border border-border/60 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.97]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 50}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 50}ms, box-shadow 0.2s ease`,
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                  style={{ backgroundColor: `${cat.color}14` }}
                >
                  <Icon className="h-6 w-6" style={{ color: cat.color }} />
                </div>
                <span className="text-sm font-medium text-foreground text-center leading-tight">
                  {cat.name}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/categorias"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Ver todas as categorias →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;