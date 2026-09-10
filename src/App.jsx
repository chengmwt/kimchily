import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import KimchiMenu from "./components/KimchiMenu";
import FoodMenu from "./components/FoodMenu"
import Order from "./components/Order";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <KimchiMenu />
      <FoodMenu />
      <Order />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
