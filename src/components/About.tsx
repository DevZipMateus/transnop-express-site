import { Target, Eye, Heart } from "lucide-react";
import safetyCheck from "@/assets/safety-check.jpg";
import technology from "@/assets/technology.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Garantir transporte de passageiros com segurança, conforto e pontualidade, oferecendo excelente atendimento e soluções que atendam às necessidades de cada cliente, contribuindo para o desenvolvimento da mobilidade na região de Sinop e em todo o Mato Grosso.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser reconhecida como a empresa de transporte de passageiros mais confiável e segura do Norte de Mato Grosso, expandindo nossa atuação com qualidade, tecnologia e sustentabilidade, tornando a Transnop uma referência em transporte executivo no ramo de fretamento de veículos com motoristas qualificados.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Segurança: prioridade máxima em todas as viagens e operações. Pontualidade: respeito ao tempo e aos compromissos dos nossos clientes. Conforto e qualidade: veículos modernos, limpos e bem equipados. Profissionalismo: equipe qualificada e comprometida com a excelência.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Sobre a TRANSNOP
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprometidos com a excelência no transporte de passageiros em Mato Grosso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Gallery */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-xl group animate-fade-in">
            <img
              src={safetyCheck}
              alt="Inspeção de segurança da frota TRANSNOP"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
              <div className="text-white">
                <h4 className="text-xl font-bold mb-2">Segurança certificada</h4>
                <p className="text-white/90">Manutenção preventiva e inspeções rigorosas</p>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl group animate-fade-in" style={{ animationDelay: "100ms" }}>
            <img
              src={technology}
              alt="Tecnologia e GPS nos veículos TRANSNOP"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
              <div className="text-white">
                <h4 className="text-xl font-bold mb-2">Tecnologia avançada</h4>
                <p className="text-white/90">GPS e sistemas modernos de navegação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
