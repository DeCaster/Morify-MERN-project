import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const AreaChartComponent = () => {
  
  const data = [
    { date: '2024-05-01', count: 30 },
    { date: '2024-05-02', count: 13 },
    { date: '2024-05-03', count: 19 },
    { date: '2024-05-04', count: 15 },
    { date: '2024-05-05', count: 30 },
    
  ];

  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type='monotone' dataKey='count' stroke='#2cb1bc' fill='#bef8fd' />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
