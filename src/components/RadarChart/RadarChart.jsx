import { RadarChart as RChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const RadarChart = () => {

  const radarChartData = [
    {
      subject: 'Math',
      A: 85,
      B: 72,
      C: 95,
      D: 68,
      E: 78,
      F: 88,
      G: 90,
      H: 76,
      I: 82,
      J: 93,
    },
    {
      subject: 'Chemistry',
      A: 78,
      B: 88,
      C: 91,
      D: 75,
      E: 82,
      F: 79,
      G: 86,
      H: 85,
      I: 94,
      J: 77,
    },
    {
      subject: 'Physics',
      A: 92,
      B: 76,
      C: 88,
      D: 80,
      E: 89,
      F: 93,
      G: 91,
      H: 74,
      I: 87,
      J: 85,
    },
  ];

  return (
    <div>
      <RChart outerRadius={90} width={730} height={250} data={radarChartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey='subject' />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="John" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Sarah" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
      </RChart>
    </div>
  );
};

export default RadarChart;