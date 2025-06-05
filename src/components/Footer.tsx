import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-wow-dark text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-montserrat">
              WowMoment
            </h3>
            <p className="text-gray-300 mb-4">
              Создаём незабываемые события с 2020 года. Ваши мечты — наша
              реальность.
            </p>

            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                className="text-wow-yellow hover:text-wow-yellow-bright cursor-pointer hover-scale"
                size={20}
              />
              <Icon
                name="Send"
                className="text-wow-yellow hover:text-wow-yellow-bright cursor-pointer hover-scale"
                size={20}
              />
              <Icon
                name="Phone"
                className="text-wow-yellow hover:text-wow-yellow-bright cursor-pointer hover-scale"
                size={20}
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">
              Услуги
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-wow-yellow cursor-pointer">Свадьбы</li>
              <li className="hover:text-wow-yellow cursor-pointer">
                Дни рождения
              </li>
              <li className="hover:text-wow-yellow cursor-pointer">
                Корпоративы
              </li>
              <li className="hover:text-wow-yellow cursor-pointer">
                Детские праздники
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">
              Контакты
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>+7 (989) 776-33-79</p>
              <p>@WowMoment23</p>
              <p>@Alex.bristel</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WowMoment. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
