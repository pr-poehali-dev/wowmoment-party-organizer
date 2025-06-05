import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Calendar",
      title: "Планирование событий",
      description:
        "Разработка концепции, timeline и координация всех этапов подготовки",
    },
    {
      icon: "Palette",
      title: "Декор и оформление",
      description: "Создание уникального стиля и атмосферы вашего события",
    },
    {
      icon: "Users",
      title: "Координация",
      description: "Управление командой и контроль качества в день события",
    },
  ];

  return (
    <section className="py-20 px-4 bg-wow-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wow-dark mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-wow-gray max-w-3xl mx-auto">
            Полный спектр услуг для создания идеального события
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-white border-none hover-scale group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-wow-yellow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wow-yellow-bright transition-colors">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-wow-dark"
                  />
                </div>

                <h3 className="text-xl font-semibold text-wow-dark mb-4">
                  {service.title}
                </h3>

                <p className="text-wow-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
