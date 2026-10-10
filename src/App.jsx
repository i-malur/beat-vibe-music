import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Rankings from './components/Rankings/Rankings';
import CountryRadar from './components/CountryRadar/CountryRadar';
import Generos from './components/Generos/Generos';
import Community from './components/Community/Community';
import Quiz from './components/Quiz/Quiz';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Rankings />
        <CountryRadar />
        <Generos />
        <Community />
        <Quiz />
      </main>
      <Footer />
    </div>
  );
}

export default App;
