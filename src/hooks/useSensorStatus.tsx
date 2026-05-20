export function useSensorStatusPie() {


    const data = [
        { name: "Normal", value: 2, sensors: "pH, pH" },
        { name: "Atenção", value: 2, sensors: "Amónio, Turbidez" },
        { name: "Crítico", value: 1, sensors: "Oxigénio" },
    ];

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

    const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

    function getColors(index) {
        return COLORS[index] || "#999";
    }

    function formatTooltip(props) {
        return [props.payload.sensors, props.name];
    }



    return {
        data, COLORS, getColors, formatTooltip, Legend
    }
}