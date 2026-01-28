import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Testimonial from "./components/Testimonial";
import Search from "./components/Search";
import Partners from "./components/Partners";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Form from "./components/Form";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profile />
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

export default App;
