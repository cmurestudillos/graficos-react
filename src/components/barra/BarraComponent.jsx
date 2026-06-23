import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import configBarra from './ConfiguracionBarra';

const generateNumber = i => Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);

const BarraComponent = () => {
  const [datos, setDatos] = useState(() => structuredClone(configBarra));

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
      <h3 className="m-3 chart-title">Grafico de Barras</h3>
      <hr className="chart-divider" />
      <div className="chart-wrapper">
        <Bar id="bar-chart" data={datos.data} options={datos.options} />
      </div>
      <div className="chart-actions">
        <Button className="btn btn-4 w-25" onClick={randomize}>
          Aleatorio
        </Button>
      </div>
    </div>
  );
};

export default BarraComponent;
