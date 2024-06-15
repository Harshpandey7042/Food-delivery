import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainSection from "./components/Mainsection";
import MenuCarousel from "./components/MenuCarousel";
import ServiceSection from "./components/ServiceSection";
import RestaurantsWithDelivery from "./components/RestaurantsWithDelivery";
import ImageCarousel from "./components/ImagesCarousel";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

 
 


function App() {
  return (
    <Router>
      <Navbar />
      
      

      
      <Routes>
        <Route path="/" element={
          <>
            <MainSection />
            
            <MenuCarousel />
            <ServiceSection />
            <ImageCarousel />
            <Blog />
            <ContactUs />
            <Footer />
          </>
        } />
        <Route path="/restaurants-with-delivery" element={<RestaurantsWithDelivery />} />
   
        <Route path="/menu" element={<MenuCarousel />} />
        <Route path="/about-us" element={<MenuCarousel />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<MainSection />} />

        <Route path="/" element={<MainSection/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegistrationForm/>} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
       
      </Routes>
    </Router>
  );
}

export default App;
