import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import Search from "./components/Search";
import Partner from "./components/Partner";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Social from "./components/Social";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Testimonial />
      </main>
      <Footer />
    </div>
  )
}

export default App
