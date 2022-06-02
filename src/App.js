import Header from "./components/Header/index"
import Home from "./pages/Home/index"
import Footer from "./components/Footer/index"
import About from "./pages/QuemSou";
import Habilidades from "./pages/Habilidades";
import Projetos from "./pages/Projetos"
import Contato from "./pages/Contato";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/home' element={<Home />} />
                    // <Route path='/about' element={<About />} />
                    // <Route path='/habilidades' element={<Habilidades />} />
                    // <Route path='/projetos' element={<Projetos />} />
                    // <Route path='/contato' element={<Contato />} />
        </Routes>

        <Footer />

      </BrowserRouter>




    </>
  );
}

export default App;
