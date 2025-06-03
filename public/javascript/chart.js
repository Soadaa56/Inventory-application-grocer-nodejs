// import Chart from 'chart.js/auto'

const canvasChart = document.getElementById('stockValueByCategoryPie').getContext('2d')

const data = {
  labels: ['Dairy', 'Meat', 'Beverages'],
  datasets: [{
    label: 'Inventory Value by Category',
    data: [1450.4, 184.6, 149.4],
    backgroundColor: [
      'rgba(75, 192, 192, 0.6)',  // Dairy
      'rgba(255, 99, 132, 0.6)',  // Meat
      'rgba(255, 206, 86, 0.6)',  // Beverages
    ],
    borderWidth: 1
  }]
};

new Chart(canvasChart, {
  type: 'pie',
  data: data,
  options: {
    responsive: false
  }
});