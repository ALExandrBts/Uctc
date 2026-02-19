import { useEffect, useRef } from 'react';

const CostChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadChart = async () => {
      const Chart = (await import('chart.js/auto')).default;
      
      if (chartRef.current) {
        const ctx = chartRef.current.getContext('2d');
        
        // Destroy existing chart instance
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
        
        chartInstanceRef.current = new Chart(ctx!, {
          type: 'bar',
          data: {
            labels: ['Lithium-Ion', 'Sand Batteries', 'Standard Ceramics', 'UCTS'],
            datasets: [{
              label: 'Cost ($/kWh)',
              data: [200, 15, 75, 13.6],
              backgroundColor: [
                'hsl(0, 84%, 60%)',
                'hsl(40, 84%, 60%)',
                'hsl(215, 16%, 47%)',
                'hsl(159, 84%, 42%)'
              ],
              borderColor: [
                'hsl(0, 84%, 50%)',
                'hsl(40, 84%, 50%)',
                'hsl(215, 16%, 40%)',
                'hsl(159, 84%, 35%)'
              ],
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Cost ($/kWh)'
                }
              }
            }
          }
        });
      }
    };

    loadChart();

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} data-testid="chart-cost" />;
};

export default CostChart;
