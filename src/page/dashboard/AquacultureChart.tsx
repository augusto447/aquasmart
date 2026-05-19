import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const data = [
    { time: "07:00", temperatura: 26.1, oxigenio: 6.1, ph: 7.1, turbidez: 14.0, amonio: 0.20 },
    { time: "08:00", temperatura: 26.4, oxigenio: 6.0, ph: 7.2, turbidez: 14.5, amonio: 0.25 },
    { time: "09:00", temperatura: 27.0, oxigenio: 5.8, ph: 7.2, turbidez: 15.2, amonio: 0.30 },
    { time: "10:00", temperatura: 27.5, oxigenio: 5.5, ph: 7.3, turbidez: 16.0, amonio: 0.35 },
    { time: "11:00", temperatura: 27.9, oxigenio: 5.2, ph: 7.3, turbidez: 17.0, amonio: 0.45 },
    { time: "12:00", temperatura: 28.2, oxigenio: 4.9, ph: 7.25, turbidez: 17.8, amonio: 0.52 },
    { time: "13:00", temperatura: 28.5, oxigenio: 4.5, ph: 7.28, turbidez: 18.2, amonio: 0.60 },
    { time: "14:32", temperatura: 28.6, oxigenio: 4.2, ph: 7.28, turbidez: 18.5, amonio: 0.65 },
];

export default function AquacultureChart() {
    return (
        <div className="w-full">
            <h2 className="text-lg font-semibold mb-1">Evolução dos parâmetros</h2>
            <p className="text-sm text-gray-500 mb-4">Últimas 8 horas</p>
            <ResponsiveContainer width="100%" height={280}>
                <LineChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.15)" />
                    <XAxis dataKey="time" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: 12 }} />
                    <Line type="monotone" dataKey="temperatura" stroke="#3b82f6" dot={false} strokeWidth={2} />
                    <Line type="monotone" dataKey="oxigenio" stroke="#ef4444" dot={false} strokeWidth={2} strokeDasharray="4 3" />
                    <Line type="monotone" dataKey="ph" stroke="#22c55e" dot={false} strokeWidth={2} />
                    <Line type="monotone" dataKey="turbidez" stroke="#a855f7" dot={false} strokeWidth={2} />
                    <Line type="monotone" dataKey="amonio" stroke="#f59e0b" dot={false} strokeWidth={2} strokeDasharray="2 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}