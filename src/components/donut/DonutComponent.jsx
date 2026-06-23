import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button';
import configDonut from './ConfiguracionDonut';

const generateNumber = () => Math.round(Math.random() * 100);

const DonutComponent = () => {
  const [datos, setDatos] = useState(() => structuredClone(configDonut));

  const randomize = () => {
    setDatos(prev => ({
      ...prev,
      data: {
        ...prev.data,
        datasets: prev.data.datasets.map(dataset => ({
          ...dataset,
          data: dataset.data.map(() => generateNumber()),
        })),
      },
    }));
  };

  return (
    <div className="container">
      <h3 className="m-3 chart-title">Grafico de Donut</h3>
      <hr className="chart-divider" />
      <div className="chart-wrapper">
        <Doughnut id="doughnut-chart" data={datos.data} options={datos.options} />
      </div>
      <div className="chart-actions">
        <Button className="btn btn-4 w-25" onClick={randomize}>
          Aleatorio
        </Button>
      </div>
    </div>
  );
};

export default DonutComponent;
