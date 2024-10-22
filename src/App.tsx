import Header from "./components/Header";
import Carousel from "./components/Carousel";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from './images/avatar.png'
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Hero from './components/Hero'


export default function App() {
  return (
   <>
   <Header />
      <Carousel />
      <Hero />
      <Features/>
      <Testimonial />

    <Contact/>

      <Footer />




      <FloatingWhatsApp phoneNumber="+919920964000" accountName="Sameer" avatar={avatar} />

    
   </>
   

  );
}