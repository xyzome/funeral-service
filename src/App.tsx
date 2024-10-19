import Header from "./components/Header";
import Hero from "./components/Hero";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from './images/avatar.png'
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Gallery from "./components/Gallery";
export default function App() {
  return (
   <>
   <Header/>
   <Hero/>
   <Gallery/>
   <Features/>
   <Testimonial/>

    <Contact/>

      <Footer />




      <FloatingWhatsApp phoneNumber="+919321584847" accountName="Sameer" avatar={avatar} />

    
   </>
   

  );
}