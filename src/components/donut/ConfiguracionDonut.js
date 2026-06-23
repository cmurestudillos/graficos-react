const configDonut = {
  data: {
    labels: ['Chorizo', 'Salchichon', 'Mortadela'],
    datasets: [
      {
        data: [35, 45, 100],
        backgroundColor: ['#a0d080', '#d08080', '#61dbfb'],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
    },
  },
};

export default configDonut;
