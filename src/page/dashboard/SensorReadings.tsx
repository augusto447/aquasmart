const readings = [
    { label: "pH", value: "7.28", unit: "", status: "ok" },
    { label: "Temperatura", value: "28.6", unit: "°C", status: "warn" },
    { label: "Oxigénio", value: "4.2 ↓", unit: "mg/L", status: "crit" },
    { label: "Turbidez", value: "18.5", unit: "NTU", status: "warn" },
    { label: "Amónio", value: "0.65 ↑", unit: "mg/L", status: "attn" },
];

const valueColor: Record<string, string> = {
    ok: "text-gray-900 dark:text-gray-100",
    warn: "text-orange-600",
    crit: "text-red-600 font-semibold",
    attn: "text-orange-700",
};

export default function SensorReadings() {
    return (
        <div>
            <h3 className="text-sm font-semibold mb-3">Leituras atuais</h3>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {readings.map((r) => (
                    <div key={r.label} className="flex justify-between items-center py-2">
                        <span className="text-sm text-gray-500">{r.label}</span>
                        <span className={`text-sm ${valueColor[r.status]}`}>
                            {r.value} <span className="text-gray-400 font-normal">{r.unit}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}