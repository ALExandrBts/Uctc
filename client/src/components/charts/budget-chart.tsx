import { useEffect, useRef } from 'react';

const BudgetChart = () => {
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
          type: 'doughnut',
          data: {
            labels: ['R&D/Equipment', 'Personnel', 'Testing/Services', 'Marketing/Legal'],
            datasets: [{
              data: [150000, 200000, 100000, 50000],
              backgroundColor: [
                'hsl(159, 84%, 42%)',
                'hsl(204, 84%, 45%)',
                'hsl(210, 40%, 70%)',
                'hsl(215, 16%, 47%)'
              ],
              borderColor: [
                'hsl(159, 84%, 35%)',
                'hsl(204, 84%, 38%)',
                'hsl(210, 40%, 60%)',
                'hsl(215, 16%, 40%)'
              ],
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom'
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

  return <canvas ref={chartRef} data-testid="chart-budget" />;
};

export default BudgetChart;
