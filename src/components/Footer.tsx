import { Mail, MapPin, Clock, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "sobre", label: "Sobre" },
    { id: "servicos", label: "Serviços" },
    { id: "diferenciais", label: "Diferenciais" },
    { id: "contato", label: "Contato" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "contato@transnop.com.br",
      link: "mailto:contato@transnop.com.br",
    },
    {
      icon: MapPin,
      text: "Sinop-MT",
    },
    {
      icon: Clock,
      text: "Atendimento 24 horas",
    },
    {
      icon: Instagram,
      text: "@transnop",
      link: "https://www.instagram.com/transnop",
    },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">TRANSNOP</h3>
            <p className="text-primary-foreground/80 mb-4">
              Transporte de passageiros com segurança, conforto e pontualidade.
            </p>
            <p className="text-primary-foreground/90 italic">
              Mobilidade com responsabilidade
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-2">
                  <info.icon className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-primary-foreground/80">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              © {new Date().getFullYear()} TRANSNOP TRANSPORTES DE PASSAGEIROS LTDA. Todos os direitos reservados.
            </p>
            <p>CNPJ: 18.822.876/0001-89</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
