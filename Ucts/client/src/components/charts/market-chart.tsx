import { useEffect, useRef } from 'react';

const MarketChart = () => {
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
            labels: ['Energy Storage', 'Thermal Storage', 'Waste Management'],
            datasets: [{
              label: 'Market Size (Billions)',
              data: [465, 14.2, 1890],
              backgroundColor: [
                'hsl(159, 84%, 42%)',
                'hsl(204, 84%, 45%)',
                'hsl(210, 40%, 70%)'
              ],
              borderColor: [
                'hsl(159, 84%, 35%)',
                'hsl(204, 84%, 38%)',
                'hsl(210, 40%, 60%)'
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
                  text: 'Market Size ($ Billions)'
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

  return <canvas ref={chartRef} data-testid="chart-market" />;
};

export default MarketChart;
