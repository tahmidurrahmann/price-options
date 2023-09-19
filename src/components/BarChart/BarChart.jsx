import { BarChart as BChart, Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
const BarChart = () => {

    const barChartData = [
        { name: 'Category 1', uv: 200, pv: 400 },
        { name: 'Category 2', uv: 350, pv: 600 },
        { name: 'Category 3', uv: 280, pv: 520 },
        { name: 'Category 4', uv: 420, pv: 800 },
        { name: 'Category 5', uv: 150, pv: 300 },
        { name: 'Category 6', uv: 300, pv: 580 },
        { name: 'Category 7', uv: 180, pv: 360 },
        { name: 'Category 8', uv: 270, pv: 490 },
        { name: 'Category 9', uv: 390, pv: 720 },
        { name: 'Category 10', uv: 220, pv: 440 },
    ];

    return (
        <div>
            <BChart width={500} height={400} data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={'name'} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BChart>
        </div>
    );
};

export default BarChart;