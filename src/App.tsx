import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Portraits from "./components/Portraits";

function App() {
  return (
    <>
      <Header />
      <div className="relative">
        <Home />
      </div>
      <About />
      <Portraits />
    </>
  );
}

export default App;
