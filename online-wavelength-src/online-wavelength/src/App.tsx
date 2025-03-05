import Header from './components/header';
import Board from './components/board';
import Footer from './components/footer';
import Rules from './components/rules';
import { Routes, Route } from 'react-router-dom';
import { SliderProvider } from './components/SliderContext';

const App = () => {
  return (
    <SliderProvider>
      <div className="md:pt-4 pt-2 px-8">
        <div className="border-black border-b w-full">
          <div className="flex space-x-16">
            <h1 className="md:pt-4 pt-1 font-serif text-slate-900 md:text-2xl text-md md:pb-8 pb-4">wavelength</h1>
            <div className="pt-1"><Header /></div>
          </div>
        </div>
        <main className="md:ml-4 ml-1 flex-grow">
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </main>
        <div className="pb-12"></div>
        <Footer />
      </div>
    </SliderProvider>
  );
};

export default App;