import { PieChart as PChart, Pie } from 'recharts';
const PieChart = () => {

    const pieChartData = [
        { name: 'Math', value: 350 },
        { name: 'Chemistry', value: 280 },
        { name: 'Physics', value: 410 },
        { name: 'Biology', value: 220 },
        { name: 'History', value: 180 },
      ];

    return (
        <div>
            <PChart width={730} height={250}>
            <Pie data={pieChartData} dataKey={'value'} nameKey={'name'} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label/>
            </PChart>
        </div>
    );
};

export default PieChart;