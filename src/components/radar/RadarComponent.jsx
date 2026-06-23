import { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import configRadar from './ConfiguracionRadar';

const generateNumber = i => Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);

const RadarComponent = () => {
  const [datos, setDatos] = useState(() => structuredClone(configRadar));

  const randomize = () => {
    setDatos(prev => ({
      ...prev,
      data: {
        ...prev.data,
        datasets: prev.data.datasets.map((dataset, i) => ({
          ...dataset,
          data: dataset.data.map(() => generateNumber(i)),
        })),
      },
    }));
  };

  return (
    <div className="container">
      <h3 className="m-3 chart-title">Grafico de Radar</h3>
      <hr className="chart-divider" />
      <div className="chart-wrapper">
        <Radar id="radar-chart" data={datos.data} options={datos.options} />
      </div>
      <div className="chart-actions">
        <Button className="btn btn-4 w-25" onClick={randomize}>
          Aleatorio
        </Button>
      </div>
    </div>
  );
};

export default RadarComponent;
