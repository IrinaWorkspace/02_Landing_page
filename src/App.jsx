import { Nav } from "./components";
import {
  Information,
  Hero,
  PopularProducts,
  NewsletterSignup,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />

      <section className="padding">
        <Hero />
      </section>
      <section className="pt-60 lg:pt-3 px-16 pb-16 ">
        <Information />
      </section>
      <section className="pt-72 lg:pt-3 pb-3 ">
        <NewsletterSignup />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
    </main>
  );
};

export default App;
