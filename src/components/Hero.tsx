import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fleet.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Transporte de passageiros TRANSNOP"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            TRANSNOP TRANSPORTES DE PASSAGEIROS LTDA
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-white/95 font-light leading-relaxed">
            Transporte de passageiros com segurança, conforto e pontualidade em
            Sinop-MT. Soluções personalizadas para empresas, eventos e turismo.
          </h2>
          <p className="text-lg md:text-xl mb-10 text-white/90 italic">
            Mobilidade com responsabilidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 group"
            >
              Conheça nossos serviços
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contato")}
              className="bg-white/10 text-white border-white/60 hover:bg-white hover:text-primary text-lg px-8 py-6 backdrop-blur-sm"
            >
              Solicitar orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
