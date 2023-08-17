import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Portraits from "./components/Portraits";
import Theatre from "./components/Theatre";
import Filmaking from "./components/Filmaking";

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
    </>
  );
}

export default App;
