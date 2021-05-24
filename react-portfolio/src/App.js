import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage';
import ProjectsPage from './pages/projectspage';
import AboutPage from './pages/aboutpage';
import MainNavBar from './components/mainnavbar.js';
import ContactPage from './pages/contactpage';
import Footer from './components/footer';



function App() {
  return (
    <div className="app" >
    <MainNavBar/>
    <HomePage/>
    <AboutPage/>
    <ProjectsPage/>
    <ContactPage/>
    <Footer/>
    </div>

    
  );
}

export default App;
