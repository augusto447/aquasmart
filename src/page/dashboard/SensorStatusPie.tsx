import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Normal", value: 2, sensors: "pH, pH" },
    { name: "Atenção", value: 2, sensors: "Amónio, Turbidez" },
    { name: "Crítico", value: 1, sensors: "Oxigénio" },
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

const Legend = () => (
    <div className="flex gap-4 justify-center mt-2 text-xs text-gray-500">
        {data.map((entry, i) => (
            <div key={entry.name} className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full" style={{ background: COLORS[i] }} />
                {entry.name} ({entry.value})
            </div>
        ))}
    </div>
);

export default function SensorStatusPie() {
    return (
        <div className="w-full">
            <h2 className="text-sm font-semibold mb-1">Estado dos sensores</h2>
            <p className="text-xs text-gray-500 mb-2">5 sensores ativos</p>
            <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={75}
                    >
                        {data.map((_, i) => (
                            <Cell key={i} fill={COLORS[i]} />
                        )
                        )}
                    </Pie>
                    <Tooltip
                        formatter={(value, name, props) => [props.payload.sensors, name]}
                    />
                </PieChart>
            </ResponsiveContainer>
            <Legend />
        </div>
    );
}