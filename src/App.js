import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  );
}

export default App;
