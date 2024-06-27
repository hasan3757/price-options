import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

    const mathMarkData = [
        { id: 1, name: "Alice", math: 76 },
        { id: 2, name: "Bob", math: 85 },
        { id: 3, name: "Charlie", math: 67 },
        { id: 4, name: "David", math: 90 },
        { id: 5, name: "Emma", math: 78 },
        { id: 6, name: "Frank", math: 88 },
        { id: 7, name: "Grace", math: 95 },
        { id: 8, name: "Hannah", math: 82 },
        { id: 9, name: "Ian", math: 73 },
        { id: 10, name: "Jack", math: 69 }
    ];


    return (
        <div>
            <LChart width={500} height={400} data={mathMarkData}>
                <Line dataKey={'math'}></Line>
            </LChart>
        </div>
    );
};

export default LineChart;