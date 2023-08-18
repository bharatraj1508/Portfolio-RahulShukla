import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Portraits from "./components/Portraits";
import Theatre from "./components/Theatre";
import Filmaking from "./components/Filmaking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="relative">
        <Home />
      </div>
      <About />
      <Filmaking />
      <Portraits />
      <Theatre />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
