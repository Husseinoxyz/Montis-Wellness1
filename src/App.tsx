import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import FiveD from './pages/FiveD';
import MedicalScreening from './pages/MedicalScreening';
import ScreeningDetail from './pages/ScreeningDetail';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Blog from './pages/Blog';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/medical-screening" element={<MedicalScreening />} />
        <Route path="/medical-screening/:id" element={<ScreeningDetail />} />
        <Route path="/5d" element={<FiveD />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Route>
    </Routes>
  );
}

export default App;
