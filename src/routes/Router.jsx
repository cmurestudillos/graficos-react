import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from '../components/shared/navbar/NavbarComponent.jsx';
import FooterComponent from '../components/shared/footer/FooterComponent.jsx';
import ErrorComponent from '../components/shared/error/ErrorComponent.jsx';
import LineaComponent from '../components/linea/LineaComponent.jsx';
import BarraComponent from '../components/barra/BarraComponent.jsx';
import DonutComponent from '../components/donut/DonutComponent.jsx';
import RadarComponent from '../components/radar/RadarComponent.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<LineaComponent />} />
        <Route path="/linea" element={<LineaComponent />} />
        <Route path="/barra" element={<BarraComponent />} />
        <Route path="/donut" element={<DonutComponent />} />
        <Route path="/radar" element={<RadarComponent />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default Router;
