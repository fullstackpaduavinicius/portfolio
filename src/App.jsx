import React from 'react';
import './App.css';
import NavBar from './componentes/sections/NavBar';
import Presentation from './componentes/sections/Presentation';
import Project from './componentes/sections/Project';
import Skills from './componentes/sections/Skills';
import Timeline from './componentes/sections/Timeline';
  // Importação da linha do tempo
import SobreMim from './componentes/sections/SobreMim';
import Footer from './componentes/sections/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <Project />
      <Skills />
      <Timeline />  {/* Linha do tempo inserida aqui */}
      <SobreMim />
      <Footer />
    </div>
  );
}

export default App;
