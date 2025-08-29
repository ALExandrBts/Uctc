import { useEffect, useRef } from 'react';

const RevenueChart = () => {
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
          type: 'line',
          data: {
            labels: ['Year 1', 'Year 2', 'Year 3'],
            datasets: [{
              label: 'Revenue (Millions)',
              data: [1, 5, 15],
              borderColor: 'hsl(159, 84%, 42%)',
              backgroundColor: 'hsl(159, 84%, 42%, 0.1)',
              borderWidth: 3,
              fill: true,
              tension: 0.4
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
                  text: 'Revenue ($ Millions)'
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

  return <canvas ref={chartRef} data-testid="chart-revenue" />;
};

export default RevenueChart;
