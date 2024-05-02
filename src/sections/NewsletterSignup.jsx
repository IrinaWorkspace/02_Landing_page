import { Icon } from "../assets/icons";

const NewsletterSignup = () => {
  return (
    <section
      style={{ backgroundColor: "#394649" }}
      className="h-[600px] flex items-center justify-center mt-10 "
    >
      <div className="w-full max-w-xl px-4  md:px-16 lg:px-32">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
          Готови ли сте да работим заедно?
        </h2>
        <p className="text-white mb-8 text-center">
          Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на
          всички въпроси
        </p>
        <form>
          <div className="flex flex-row items-center max-w-lg rounded-lg bg-white">
            <div className="flex items-center">
              <img
                src={Icon}
                alt="Envelope icon"
                className="h-5 w-5 ml-4 mr-2"
              />
              <input
                type="tel"
                placeholder="Мобилен номер"
                className="flex-grow appearance-none  border-none w-full text-content-color mr-3 leading-tight focus:outline-none "
              />
            </div>
            <button
              type="submit"
              className="bg-[#E7F874] hover:bg-[#a8b651] text-content-color font-bold h-14 w-32 rounded-r-lg focus:outline-none "
            >
              Изпрати
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
