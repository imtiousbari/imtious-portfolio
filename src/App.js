import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Emailjs } from "./components/Emailjs";
// import { Route } from 'react-router-dom';
// import "react-circular-progressbar/dist/styles.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      
      <Projects />
      {/* <Contact /> */}
      <Emailjs />
      <Footer />
      {/* <Route exact path="/navbar" component={NavBar} />
      <Route exact path="/banner" component={Banner} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/connectme" component={Emailjs} />
      <Route exact path="/footer" component={Footer} /> */}
      {/* <Route exact path="/navbar" component={NavBar} /> */}
    </div>
  );
}

export default App;
