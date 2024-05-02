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

      <section className="px-4">
        <Hero />
      </section>
      <section className="pt-16 lg:pt-40 px-4 pb-2 ">
        <Information />
      </section>
      <section className="pt-36 lg:pt-3 pb-3 ">
        <NewsletterSignup />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
    </main>
  );
};

export default App;
