import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "para sempre",
    features: ["Página básica", "3 fotos no portfólio", "Link WhatsApp", "Aparece nas buscas"],
    cta: "Começar agora",
    highlight: false,
  },
  {
    name: "Pro",
    price: "R$ 49",
    period: "/mês",
    features: ["Página completa", "Fotos ilimitadas", "Destaque na categoria", "Estatísticas avançadas", "Selo verificado", "Prioridade nas buscas"],
    cta: "Assinar Pro",
    highlight: true,
  },
  {
    name: "Premium",
    price: "R$ 99",
    period: "/mês",
    features: ["Tudo do Pro", "Banner patrocinado", "Destaque na home", "Relatório mensal", "Suporte prioritário", "IA para descrições"],
    cta: "Assinar Premium",
    highlight: false,
  },
];

const PlansSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Destaque sua empresa
          </h2>
          <p className="mt-2 text-muted-foreground max-w-md mx-auto">
            Escolha o plano ideal e receba mais clientes todos os dias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-xl border shadow-card p-6 flex flex-col ${
                plan.highlight
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-border/60"
              }`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`,
              }}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-primary text-xs font-semibold text-white rounded-full">
                  Mais popular
                </span>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold font-display text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-3.5 w-3.5 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/planos">
                <Button
                  className={`w-full font-semibold active:scale-[0.97] transition-all ${
                    plan.highlight ? "bg-primary hover:bg-primary/90" : ""
                  }`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/planos"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Comparar todos os planos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;