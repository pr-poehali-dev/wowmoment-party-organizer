import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wow-dark mb-6">
            О компании
          </h2>
          <p className="text-xl text-wow-gray max-w-3xl mx-auto">
            WowMoment — это команда профессионалов, которая превращает ваши идеи
            в незабываемые события
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Card className="p-8 bg-wow-light border-none">
              <h3 className="text-2xl font-semibold text-wow-dark mb-4">
                Наша миссия
              </h3>
              <p className="text-wow-gray leading-relaxed mb-6">
                Мы создаём уникальные события, которые остаются в памяти
                навсегда. Каждый проект — это история, рассказанная через
                детали, эмоции и безупречное исполнение.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-wow-dark">
                  <div className="w-2 h-2 bg-wow-yellow-bright rounded-full mr-3"></div>
                  <span>Индивидуальный подход к каждому клиенту</span>
                </div>
                <div className="flex items-center text-wow-dark">
                  <div className="w-2 h-2 bg-wow-yellow-bright rounded-full mr-3"></div>
                  <span>Полное сопровождение от идеи до реализации</span>
                </div>
                <div className="flex items-center text-wow-dark">
                  <div className="w-2 h-2 bg-wow-yellow-bright rounded-full mr-3"></div>
                  <span>Работаем с любым бюджетом</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="animate-scale-in">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f29d8ae8e1?w=600&h=400&fit=crop"
              alt="Event organization"
              className="rounded-lg shadow-lg w-full h-96 object-cover hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
