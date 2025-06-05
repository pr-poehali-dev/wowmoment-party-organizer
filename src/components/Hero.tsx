import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-wow-light via-white to-wow-yellow px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <img
            src="https://cdn.poehali.dev/files/bc8922ae-9fcd-4cde-8d52-53ff471ad90e.jpg"
            alt="WowMoment Logo"
            className="mx-auto h-48 w-auto mb-6 hover-scale"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-wow-dark mb-6 leading-tight">
          Создаём
          <span className="block text-wow-gray">WOW-моменты</span>
        </h1>

        <p className="text-xl md:text-2xl text-wow-gray mb-8 max-w-2xl mx-auto leading-relaxed">
          Организация незабываемых событий с индивидуальным подходом и вниманием
          к каждой детали
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-wow-yellow-bright hover:bg-wow-yellow text-wow-dark font-semibold px-8 py-4 text-lg hover-scale"
          >
            <Icon name="Calendar" className="mr-2" size={20} />
            Заказать событие
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-wow-gray text-wow-gray hover:bg-wow-gray hover:text-white px-8 py-4 text-lg hover-scale"
          >
            <Icon name="Play" className="mr-2" size={20} />
            Наши работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
