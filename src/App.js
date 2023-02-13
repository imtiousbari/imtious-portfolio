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
      {/* <Route exact path="/sendmail" component={Emailjs} /> */}
    </div>
  );
}

export default App;
