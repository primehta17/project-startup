import './Home.css';
import Navigation from './Navigation';
import Find from '../Pages/Find'
import Choose from '../Pages/Choose';
import Pricing from '../Pages/Pricing';
import Features from '../Pages/Features';
import Search from '../Pages/Search';
import About from '../Pages/About';
function Home() {
  return (
    <>
    <div className="container">

        <Navigation />
        <Find />
        <Search />
        <Features />
        <Choose />
        <Pricing />
        <About />
    </div>
    </>
  );
}

export default Home;