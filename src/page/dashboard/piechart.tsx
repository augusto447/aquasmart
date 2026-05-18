import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

const sensorStates = [
    { name: "Normal", value: 2, sensors: "pH, Temperatura" },
    { name: "Atenção", value: 2, sensors: "Amónio, Turbidez" },
    { name: "Crítico", value: 1, sensors: "Oxigénio" },
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

export default function SensorStatusPie() {
    return (
        <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={sensorStates}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={85}
                        label={({ name }) => name}
                    >
                        {sensorStates.map((_, index) => (
                            <Cell key={index} fill={COLORS[index]} />
                        ))}
                    </Pie>

                    <Tooltip
                        formatter={(value, name, props) => {
                            return [props.payload.sensors, name];
                        }}
                    />

                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}