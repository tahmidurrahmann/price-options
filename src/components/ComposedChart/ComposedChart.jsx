import { Area, Bar, ComposedChart as CChart, CartesianGrid, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const ComposedChart = ({ data }) => {
    return (
            <div>
                <CChart width={1200} height={400} data={data}>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="name" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="brand" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="brand" stroke="#ff7300" />
                </CChart>
            </div>
    );
};

export default ComposedChart;