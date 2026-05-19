import { AlertTriangle } from "lucide-react";

const alerts = [
    {
        sensor: "Oxigénio",
        value: 3.2,
        status: "Crítico",
        message: "Oxigénio abaixo do nível seguro",
    },
    {
        sensor: "pH",
        value: 8.5,
        status: "Atenção",
        message: "pH acima do recomendado",
    },
    {
        sensor: "Amónio",
        value: 0.6,
        status: "Atenção",
        message: "Amónio elevado",
    },
];

export default function Alertas() {
    return (
        <div className="p-6 w-full min-h-screen">

            <h1 className="text-2xl font-bold mb-2">Alertas do Sistema</h1>
            <p className="text-gray-500 mb-6">
                Situações que precisam de atenção no AquaSmart
            </p>

            <div className="space-y-4">

                {alerts.map((alert, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-xl shadow bg-white dark:bg-black dark:border-gray-800"
                    >

                        <div className="flex items-center gap-3">
                            <AlertTriangle
                                className={
                                    alert.status === "Crítico"
                                        ? "text-red-500"
                                        : "text-orange-500"
                                }
                            />

                            <div>
                                <p className="font-bold">{alert.sensor}</p>
                                <p className="text-sm text-gray-500">{alert.message}</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="font-bold">{alert.value}</p>

                            <span
                                className={
                                    alert.status === "Crítico"
                                        ? "text-red-500 font-bold"
                                        : "text-orange-500 font-bold"
                                }
                            >
                                {alert.status}
                            </span>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}