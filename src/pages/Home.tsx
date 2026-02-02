import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import Search from "../components/Search";
import Partners from "../components/Partners";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Form from "../components/Form";
import Location from "../components/Location";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Search />
        <Testimonial />
        <Carousel />
        <Partners />
        <Services />
        <Form />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default Home;
