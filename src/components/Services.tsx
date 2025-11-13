import { Users, Car, Briefcase, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import van15Professional from "@/assets/van-15-professional.jpg";
import corporateEvent from "@/assets/corporate-event.jpg";
import tourismGroup from "@/assets/tourism-group.jpg";
import driverService from "@/assets/driver-service.jpg";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Users,
      title: "Van 15 lugares",
      description:
        "Veículos modernos e confortáveis para grupos de até 15 passageiros. Ideal para empresas e eventos corporativos.",
      image: van15Professional,
    },
    {
      icon: Users,
      title: "Van 19 lugares",
      description:
        "Nossa frota inclui vans com capacidade para 19 passageiros, perfeitas para grupos maiores e excursões.",
      image: tourismGroup,
    },
    {
      icon: Car,
      title: "Carro sedan",
      description:
        "Transporte executivo com carros sedan para viagens corporativas e compromissos especiais.",
      image: driverService,
    },
  ];

  const applications = [
    {
      icon: Briefcase,
      title: "Empresas",
      description: "Transporte corporativo para colaboradores e executivos",
    },
    {
      icon: PartyPopper,
      title: "Eventos",
      description: "Locomoção para eventos, conferências e feiras",
    },
    {
      icon: PartyPopper,
      title: "Casamentos",
      description: "Transporte especial para convidados e noivos",
    },
    {
      icon: Users,
      title: "Turismo",
      description: "Passeios e excursões com conforto e segurança",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Frota moderna com motoristas profissionais qualificados
          </p>
        </div>

        {/* Vehicle Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Solicitar orçamento
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">
            Atendemos suas necessidades
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div
                key={app.title}
                className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <app.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold mb-2 text-foreground">{app.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Events Highlight */}
        <div className="mt-16 relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
          <img
            src={corporateEvent}
            alt="Transporte para eventos corporativos e especiais"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/60 flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Eventos especiais merecem transporte de excelência
                </h3>
                <p className="text-xl text-white/95 mb-6">
                  Eventos corporativos, congressos, casamentos e celebrações com todo conforto, pontualidade e profissionalismo
                </p>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
                >
                  Solicitar orçamento para evento
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
