import "./App.css";
import Testimonial from "./component/testimonial/Testimonial";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import ProductData from "./component/products/ProductData";
import Slider from "./component/slider/Slider";
import Vertual from "./component/vertual/Vertual";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Slider/>
    <Vertual/>
    <ProductData/>
    <Testimonial/>
    <Footer/>
    </div>
  );
}

export default App;
