
import './App.css';
import About from './components/About';

import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div  className="text-gray-950 bg">
    

    <main>
      <Navbar/>
      <About />
      <Projects/>
      <Skills />
      <Testimonials/>
     
     
    </main>

    </div>
  );
}

export default App;