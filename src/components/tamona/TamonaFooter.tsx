import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

const footerLinks = {
  categorias: [
    { label: "Construção e Reformas", href: "/categoria/construcao-e-reformas" },
    { label: "Tecnologia", href: "/categoria/tecnologia" },
    { label: "Saúde", href: "/categoria/saude" },
    { label: "Beleza", href: "/categoria/beleza" },
    { label: "Jurídico", href: "/categoria/juridico" },
    { label: "Elétrica e Hidráulica", href: "/categoria/eletrica-e-hidraulica" },
  ],
  cidades: [
    { label: "Curitiba", href: "/cidade/curitiba" },
    { label: "Londrina", href: "/cidade/londrina" },
    { label: "Maringá", href: "/cidade/maringa" },
    { label: "Cascavel", href: "/cidade/cascavel" },
    { label: "Ponta Grossa", href: "/cidade/ponta-grossa" },
  ],
  links: [
    { label: "Sobre nós", href: "/sobre" },
    { label: "Como Funciona", href: "/como-funciona" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Anuncie Grátis", href: "/cadastrar" },
  ],
};

const TamonaFooter = () => {
  return (
    <footer className="bg-secondary text-white/80">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Tamona<span className="text-primary">Web</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Conectando você aos melhores serviços da sua região. Compare, avalie e contrate profissionais de confiança.
            </p>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Categorias</h4>
            <ul className="space-y-2.5">
              {footerLinks.categorias.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cidades */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Cidades</h4>
            <ul className="space-y-2.5">
              {footerLinks.cidades.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links úteis */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Links úteis</h4>
            <ul className="space-y-2.5">
              {footerLinks.links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/50 hover:text-white/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Mail className="h-4 w-4 shrink-0" />
                contato@tamonaweb.com.br
              </li>
              <li className="flex items-center gap-2 text-sm text-white/50">
                <Phone className="h-4 w-4 shrink-0" />
                (41) 99999-9999
              </li>
              <li>
                <a
                  href="https://wa.me/5541999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Tamona Web. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacidade" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Privacidade
            </Link>
            <Link to="/termos" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Termos de uso
            </Link>
            <Link to="/mapa-do-site" className="text-xs text-white/40 hover:text-white/60 transition-colors">
              Mapa do site
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TamonaFooter;