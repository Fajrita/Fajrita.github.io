import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ProjectChromatic from './pages/ProjectChromatic';
import ProjectLabRats from './pages/ProjectLabRats';
import ProjectZozobra from './pages/ProjectZozobra';
import ProjectOhMyMadness from './pages/ProjectOhMyMadness';
import ProjectShityShooter from './pages/ProjectShityShooter';
import Gallery from './pages/Gallery';
import './main.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/chromatic-battles" element={<ProjectChromatic />} />
            <Route path="/project/labrats" element={<ProjectLabRats />} />
            <Route path="/project/zozobra" element={<ProjectZozobra />} />
            <Route path="/project/oh-my-madness" element={<ProjectOhMyMadness />} />
            <Route path="/project/shity-shooter" element={<ProjectShityShooter />} />
            <Route path="/project/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;