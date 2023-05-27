
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import SectionOne from './components/SectionOne';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
       <Carousel/>
       <SectionOne/>
       <Services/>
       <Testimonial/>
       <Blog/>
       <Subscribe/>
       <Footer/>
    </div>
  );
}

export default App;
