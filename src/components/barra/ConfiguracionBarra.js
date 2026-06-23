const configBarra = {
  data: {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        label: 'Chocolate',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: '#80c7d0',
        borderColor: 'lightblue',
      },
      {
        label: 'Azucar',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
    },
    scales: {
      x: {},
      y: {},
    },
  },
};

export default configBarra;
