import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-wow-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wow-dark mb-6">
            Связаться с нами
          </h2>
          <p className="text-xl text-wow-gray max-w-3xl mx-auto">
            Готовы обсудить ваше событие? Напишите нам!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <Card className="p-8 bg-white border-none">
              <h3 className="text-2xl font-semibold text-wow-dark mb-6">
                Контактная информация
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    className="text-wow-yellow-bright mr-4"
                    size={20}
                  />
                  <span className="text-wow-gray">+7 (989) 776-33-79</span>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Send"
                    className="text-wow-yellow-bright mr-4"
                    size={20}
                  />
                  <span className="text-wow-gray">@WowMoment23</span>
                </div>

                <div className="flex items-center">
                  <Icon
                    name="Instagram"
                    className="text-wow-yellow-bright mr-4"
                    size={20}
                  />
                  <span className="text-wow-gray">@Alex.bristel</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-wow-yellow rounded-lg">
                <p className="text-wow-dark text-sm">
                  💡 <strong>Совет:</strong> Чем раньше вы обратитесь, тем
                  больше возможностей мы сможем реализовать для вашего события!
                </p>
              </div>
            </Card>
          </div>

          <div className="animate-scale-in">
            <Card className="p-8 bg-white border-none">
              <h3 className="text-2xl font-semibold text-wow-dark mb-6">
                Оставить заявку
              </h3>

              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    className="border-wow-gray focus:border-wow-yellow-bright"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Телефон"
                    className="border-wow-gray focus:border-wow-yellow-bright"
                  />
                </div>

                <div>
                  <Input
                    placeholder="Тип события"
                    className="border-wow-gray focus:border-wow-yellow-bright"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Расскажите о ваших пожеланиях..."
                    rows={4}
                    className="border-wow-gray focus:border-wow-yellow-bright"
                  />
                </div>

                <Button className="w-full bg-wow-yellow-bright hover:bg-wow-yellow text-wow-dark font-semibold hover-scale">
                  <Icon name="Send" className="mr-2" size={16} />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
