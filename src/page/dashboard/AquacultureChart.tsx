import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";


const data = [
    { name: "Temperatura", temp: 26, o2: 6.2 },
    { name: "Oxigénio", temp: 25, o2: 6.5 },
    { name: "pH", temp: 7.2, o2: 7.4 },
    { name: "Turbidez", temp: 3.1, o2: 3.5 },
    { name: "Amónio", temp: 0.2, o2: 0.3 },
];


export default function AquacultureChart() {
    return (

        <div
            style={{
                width: "100%",
                height: 320,
                maxWidth: "700px",

            }}

        >
            <div className="text-2xl  mt-6 mb-6">Gráfico em tempo real</div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 0,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Legend />


                    <Line
                        type="monotone"
                        dataKey="temp"
                        stroke="#3b82f6"
                        dot={false}
                        activeDot={{ r: 6 }}
                    />


                    <Line
                        type="monotone"
                        dataKey="o2"
                        stroke="#f97316"
                        dot={false}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
}