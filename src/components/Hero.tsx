import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Фоновые изображения детских праздников */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-48 rounded-xl overflow-hidden opacity-20 transform -rotate-12 hover:opacity-30 transition-opacity">
          <img
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop"
            alt="Детский праздник"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-20 right-16 w-48 h-36 rounded-xl overflow-hidden opacity-25 transform rotate-6 hover:opacity-35 transition-opacity">
          <img
            src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop"
            alt="День рождения с тортом"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-32 left-20 w-56 h-42 rounded-xl overflow-hidden opacity-20 transform rotate-3 hover:opacity-30 transition-opacity">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop"
            alt="Веселые дети на празднике"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-20 right-10 w-40 h-32 rounded-xl overflow-hidden opacity-25 transform -rotate-6 hover:opacity-35 transition-opacity">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
            alt="Детские воздушные шары"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Градиентный оверлей для читаемости */}
        <div className="absolute inset-0 bg-gradient-to-br from-wow-light/80 via-white/90 to-wow-yellow/80"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
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
