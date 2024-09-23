import './App.css';

import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import PapularWatch from './Components/PapularWatch/PapularWatch';
import ImgSection from './Components/ImgSection/ImgSection';
import WatchModels from './Components/WatchModels/WatchModels';
import AboutWatch from './Components/AboutWatch/AboutWatch'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <WatchModels />
      <PapularWatch title='محبوب ترین' model='رولکس' modelColor='طلایی' ImgSrc='images/png-transparent-rolex-daytona-rolex-datejust-watch-movement-rolex-watch-accessory-diamond-rolex-removebg-preview.png' />
      <ImgSection />
      <PapularWatch title='جدید ترین' model='رولکس' modelColor='پلاتینیومی' ImgSrc='images/png-transparent-rolex-daytona-rolex-datejust-watch-rolex-oyster-rolex-watch-accessory-gold-steel-removebg-preview.png' />
      <AboutWatch />
      <Footer />
    </>
  );
}

export default App;
