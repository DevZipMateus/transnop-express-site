import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Clock, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent("Solicitação de orçamento - TRANSNOP");
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n\n` +
      `Mensagem:\n${formData.message}`
    );
    
    window.location.href = `mailto:contato@transnop.com.br?subject=${subject}&body=${body}`;
    
    toast({
      title: "Abrindo seu cliente de e-mail",
      description: "Preencha os dados e envie sua solicitação.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@transnop.com.br",
      link: "mailto:contato@transnop.com.br",
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Sinop-MT",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "24 horas",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@transnop",
      link: "https://www.instagram.com/transnop",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite seu orçamento sem compromisso. Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-xl p-8 shadow-lg space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Nome completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  E-mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva suas necessidades de transporte..."
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
              >
                Enviar solicitação
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-accent rounded-xl p-8 text-accent-foreground">
              <h3 className="text-xl font-bold mb-3">
                CNPJ: 18.822.876/0001-89
              </h3>
              <p className="text-accent-foreground/90">
                Empresa regularizada e comprometida com a qualidade no transporte de passageiros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
