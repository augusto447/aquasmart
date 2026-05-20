
import { useSensorStatusPie } from "@/hooks/useSensorStatus";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function SensorStatusPie() {

    const { data, COLORS, formatTooltip, getColors, Legend } = useSensorStatusPie();
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