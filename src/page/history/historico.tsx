import {
    LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { Badge } from "@/components/ui/badge";

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

type Status = "ok" | "warn" | "crit";

function getStatus(row: typeof data[0]): Status {
    if (row.oxigenio < 5) return "crit";
    if (row.temperatura > 28 || row.amonio > 0.5) return "warn";
    return "ok";
}

const statusBadge: Record<Status, JSX.Element> = {
    ok: <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Normal</Badge>,
    warn: <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Verificando</Badge>,
    crit: <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Crítico</Badge>,
};

export default function Historico() {
    return (
        <div className="p-6 w-full min-h-screen space-y-6">
            <div>
                <h1 className="text-2xl font-bold">Histórico</h1>
                <p className="text-sm text-gray-500">Evolução dos parâmetros — últimas 8 horas</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {[
                    { label: "Média pH (24h)", value: "7.24", color: "" },
                    { label: "Temp. máx. (24h)", value: "29.1 °C", color: "" },
                    { label: "O₂ mínimo (24h)", value: "3.9 mg/L", color: "text-red-600" },
                ].map((s) => (
                    <div key={s.label} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                        <p className="text-xs text-gray-500 mb-1">{s.label}</p>
                        <p className={`text-xl font-semibold ${s.color}`}>{s.value}</p>
                    </div>
                ))}
            </div>

            <div className="dark:bg-black dark:border dark:border-gray-800 bg-white rounded-xl p-4 shadow">
                <h2 className="text-base font-semibold mb-1">Gráfico histórico</h2>
                <p className="text-xs text-gray-500 mb-4">Todos os parâmetros · Amónio ×10 para escala</p>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.15)" />
                        <XAxis dataKey="time" tick={{ fontSize: 11 }} />
                        <YAxis tick={{ fontSize: 11 }} />
                        <Tooltip />
                        <Legend wrapperStyle={{ fontSize: 12 }} />
                        <Line type="monotone" dataKey="temperatura" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
                        <Line type="monotone" dataKey="oxigenio" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
                        <Line type="monotone" dataKey="ph" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} />
                        <Line type="monotone" dataKey="turbidez" stroke="#a855f7" strokeWidth={2} dot={{ r: 3 }} />
                        <Line type="monotone" dataKey="amonio" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }}
                            name="amonio ×10"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="dark:bg-black dark:border dark:border-gray-800 bg-white rounded-xl p-4 shadow overflow-x-auto">
                <h2 className="text-base font-semibold mb-4">Registos por hora</h2>
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-left text-xs text-gray-500 border-b dark:border-gray-800">
                            <th className="pb-2 pr-4">Hora</th>
                            <th className="pb-2 pr-4">pH</th>
                            <th className="pb-2 pr-4">Temp (°C)</th>
                            <th className="pb-2 pr-4">O₂ (mg/L)</th>
                            <th className="pb-2 pr-4">Turbidez (NTU)</th>
                            <th className="pb-2 pr-4">Amónio (mg/L)</th>
                            <th className="pb-2">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...data].reverse().map((row) => (
                            <tr key={row.time} className="border-b dark:border-gray-800 last:border-0">
                                <td className="py-2 pr-4 text-gray-500">{row.time}</td>
                                <td className="py-2 pr-4">{row.ph.toFixed(2)}</td>
                                <td className="py-2 pr-4">{row.temperatura.toFixed(1)}</td>
                                <td className={`py-2 pr-4 ${row.oxigenio < 5 ? "text-red-600 font-medium" : ""}`}>
                                    {row.oxigenio.toFixed(1)}
                                </td>
                                <td className="py-2 pr-4">{row.turbidez.toFixed(1)}</td>
                                <td className={`py-2 pr-4 ${row.amonio > 0.5 ? "text-orange-600 font-medium" : ""}`}>
                                    {row.amonio.toFixed(2)}
                                </td>
                                <td className="py-2">{statusBadge[getStatus(row)]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}