import './App.css';
import Navbar from './Components/Navbar';
import ImportarnP from './Components/ImportarnP';
import AboutBanner from './Components/AboutBanner';
import TabsProductM from './Components/TabsProductM';
import BannerCarrousel from './Components/BannerCarrousel';
import Footer from './Components/Footer/Index';
function App() {

  return (
    <>

      <Navbar />
      <BannerCarrousel />
      <TabsProductM />
      <AboutBanner/>
      <ImportarnP/>
      <Footer/>
      
    </>
  );
}

export default App;