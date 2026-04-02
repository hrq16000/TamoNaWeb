import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const benefits = [
  "Página profissional completa",
  "Receba avaliações de clientes",
  "Orçamentos via WhatsApp",
  "Apareça nas buscas da região",
  "Destaque seu negócio no topo",
  "Relatórios de desempenho",
];

const CtaSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <div
          className="relative bg-secondary rounded-2xl overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
            {/* Left — copy */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight" style={{ lineHeight: '1.15' }}>
                Você é profissional ou tem um negócio?
              </h2>
              <p className="text-white/60 text-base md:text-lg" style={{ textWrap: 'pretty' }}>
                Cadastre sua empresa e receba clientes todos os dias. É rápido, gratuito e sem burocracia.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/cadastrar">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold active:scale-[0.97] transition-all">
                    Criar minha página grátis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-medium active:scale-[0.97]">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Right — visual placeholder */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full max-w-xs aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-center space-y-2 p-6">
                  <div className="text-5xl font-display font-extrabold text-white">
                    5.247
                  </div>
                  <p className="text-sm text-white/50">
                    profissionais já anunciam no Tamona Web
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;