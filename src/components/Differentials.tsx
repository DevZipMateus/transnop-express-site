import { Shield, Clock, Star, Users, Wrench, Award } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Shield,
      title: "Segurança em primeiro lugar",
      description:
        "Veículos revisados regularmente e motoristas treinados para garantir viagens seguras",
    },
    {
      icon: Clock,
      title: "Pontualidade garantida",
      description:
        "Cumprimos rigorosamente os horários combinados, respeitando seu tempo",
    },
    {
      icon: Star,
      title: "Conforto premium",
      description:
        "Veículos modernos, climatizados e equipados para proporcionar máximo conforto",
    },
    {
      icon: Users,
      title: "Motoristas qualificados",
      description:
        "Equipe profissional, experiente e comprometida com atendimento de excelência",
    },
    {
      icon: Wrench,
      title: "Frota bem mantida",
      description:
        "Manutenção preventiva constante para evitar imprevistos durante as viagens",
    },
    {
      icon: Award,
      title: "Atendimento 24 horas",
      description:
        "Estamos disponíveis a qualquer hora para atender suas necessidades de transporte",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Nossos diferenciais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O que nos torna a melhor escolha para seu transporte
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-white text-center animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para experimentar nosso serviço?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Entre em contato conosco e solicite seu orçamento sem compromisso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contato@transnop.com.br"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Enviar e-mail
            </a>
            <a
              href="https://www.instagram.com/transnop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white hover:text-primary text-white border-2 border-white/60 hover:border-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
