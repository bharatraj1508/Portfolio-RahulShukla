import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Portraits from "./components/Portraits";
import Theatre from "./components/Theatre";

function App() {
  return (
    <>
      <Header />
      <div className="relative">
        <Home />
      </div>
      <About />
      <Portraits />
      <Theatre />
    </>
  );
}

export default App;
