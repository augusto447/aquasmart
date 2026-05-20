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

function getStatus(row) {
    if (row.oxigenio < 5) return "crit";
    if (row.temperatura > 28 || row.amonio > 0.5) return "warn";
    return "ok";
}

const statusBadge = {
    ok: <Badge className="bg-green-100 text-green-800">Normal</Badge>,
    warn: <Badge className="bg-orange-100 text-orange-800">Verificando</Badge>,
    crit: <Badge className="bg-red-100 text-red-800">Crítico</Badge>,
};

export default function Historico() {
    return (
        <div className="p-4 sm:p-6 space-y-5 w-full h-screen">

            {/* HEADER */}
            <div>
                <h1 className="text-xl sm:text-2xl font-bold">Histórico</h1>
                <p className="text-xs sm:text-sm text-gray-500">
                    Evolução dos parâmetros — últimas 8 horas
                </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

                <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs text-gray-500">Média pH (24h)</p>
                    <p className="text-lg sm:text-xl font-semibold">7.24</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs text-gray-500">Temp. máx. (24h)</p>
                    <p className="text-lg sm:text-xl font-semibold">29.1 °C</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-4 rounded-lg">
                    <p className="text-xs text-gray-500">O₂ mínimo (24h)</p>
                    <p className="text-lg sm:text-xl font-semibold text-red-600">
                        3.9 mg/L
                    </p>
                </div>
            </div>

            {/* GRÁFICO */}
            <div className="dark:bg-black dark:border dark:border-gray-800 bg-white rounded-xl p-3 sm:p-4 shadow">

                <h2 className="text-sm sm:text-base font-semibold mb-1">
                    Gráfico histórico
                </h2>

                <p className="text-xs text-gray-500 mb-4">
                    Todos os parâmetros · Amónio incluído
                </p>

                <div className="h-[240px] sm:h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" tick={{ fontSize: 10 }} />
                            <YAxis tick={{ fontSize: 10 }} />
                            <Tooltip />
                            <Legend wrapperStyle={{ fontSize: 10 }} />

                            <Line type="monotone" dataKey="temperatura" stroke="#3b82f6" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey="oxigenio" stroke="#ef4444" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey="ph" stroke="#22c55e" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey="turbidez" stroke="#a855f7" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey="amonio" stroke="#f59e0b" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* DESKTOP TABLE */}
            <div className="hidden sm:block dark:bg-black dark:border dark:border-gray-800 bg-white rounded-xl p-4 shadow overflow-x-auto">

                <h2 className="text-base font-semibold mb-4">Registos por hora</h2>

                <table className="w-full text-sm min-w-[700px]">

                    <thead>
                        <tr className="text-left text-gray-500 border-b dark:border-gray-800">
                            <th className="pb-2 pr-4">Hora</th>
                            <th className="pb-2 pr-4">pH</th>
                            <th className="pb-2 pr-4">Temp</th>
                            <th className="pb-2 pr-4">O₂</th>
                            <th className="pb-2 pr-4">Turbidez</th>
                            <th className="pb-2 pr-4">Amónio</th>
                            <th className="pb-2">Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {[...data].reverse().map((row) => (
                            <tr key={row.time} className="border-b dark:border-gray-800">
                                <td className="py-2 pr-4 text-gray-500">{row.time}</td>
                                <td className="py-2 pr-4">{row.ph.toFixed(2)}</td>
                                <td className="py-2 pr-4">{row.temperatura.toFixed(1)}</td>
                                <td className={row.oxigenio < 5 ? "text-red-600 font-medium" : ""}>
                                    {row.oxigenio.toFixed(1)}
                                </td>
                                <td className="py-2 pr-4">{row.turbidez.toFixed(1)}</td>
                                <td className={row.amonio > 0.5 ? "text-orange-600 font-medium" : ""}>
                                    {row.amonio.toFixed(2)}
                                </td>
                                <td>{statusBadge[getStatus(row)]}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

            {/* MOBILE CARDS (NOVA UX) */}
            <div className="sm:hidden space-y-3">

                {data.slice().reverse().map((row) => (
                    <div
                        key={row.time}
                        className="bg-white dark:bg-black border dark:border-gray-800 rounded-xl p-4 shadow space-y-2"
                    >
                        <div className="flex justify-between items-center">
                            <p className="text-sm font-semibold">{row.time}</p>
                            {statusBadge[getStatus(row)]}
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">

                            <p>pH: <span className="text-black dark:text-white">{row.ph.toFixed(2)}</span></p>

                            <p>Temp: <span className="text-black dark:text-white">{row.temperatura.toFixed(1)}°C</span></p>

                            <p>O₂: <span className={row.oxigenio < 5 ? "text-red-600" : ""}>{row.oxigenio.toFixed(1)}</span></p>

                            <p>Turbidez: <span>{row.turbidez.toFixed(1)}</span></p>

                            <p className="col-span-2">
                                Amónio:{" "}
                                <span className={row.amonio > 0.5 ? "text-orange-600" : ""}>
                                    {row.amonio.toFixed(2)}
                                </span>
                            </p>

                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}