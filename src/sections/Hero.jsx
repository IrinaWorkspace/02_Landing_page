import { big } from "../assets/images";

const Hero = () => {
  return (
    <section className="bg-hero-bg bg-cover bg-center h-screen flex items-center justify-center mt--6 lg:mt-40 ">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-grotesk font-bold text-content-color mb-8">
          Гъвкави решения за сухопътен транспорт за всеки клиент
        </h1>
        <img src={big} alt="Hero Image" className="w-full h-auto mb-8 " />
      </div>
    </section>
  );
};

export default Hero;
