import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Menu from "./components/Menu";
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
      <Menu />
      <Order />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
