import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Product from "./pages/Product.js";
import Contact from "./pages/Contact.js";

const App = () => {
 return (
   <Router>
     <Navbar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<Product />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
     </main>
     <Footer />
   </Router>
 );
};

export default App;