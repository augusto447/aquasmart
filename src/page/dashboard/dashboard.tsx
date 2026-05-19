import { ModeToggle } from "@/components/theme/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudFog, Droplet, FlaskConicalIcon, Thermometer, Waves } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AquacultureChart from "./AquacultureChart";
import SensorStatusPie from "./SensorStatusPie";
import SensorReadings from "./SensorReadings";

export function Dashboard() {
    return (
        <div className="p-6 space-y-6 w-full min-h-screen">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="text-sm text-gray-500">Monitorização em tempo real · Atualizado às 14:32</p>
                </div>
                <ModeToggle />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <Card className="dark:bg-black dark:border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <Droplet className="w-4 h-4 text-blue-500" />
                        <CardTitle className="text-sm font-medium text-gray-500">pH</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-3xl font-semibold">7.28</p>
                        <Badge className="mt-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-100">
                            Normal
                        </Badge>
                    </CardContent>
                </Card>

                <Card className="dark:bg-black dark:border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <Thermometer className="w-4 h-4 text-red-500" />
                        <CardTitle className="text-sm font-medium text-gray-500">Temperatura</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-3xl font-semibold">28.6 <span className="text-base font-normal text-gray-500">°C</span></p>
                        <Badge className="mt-3 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 hover:bg-orange-100">
                            Verificando
                        </Badge>
                    </CardContent>
                </Card>

                <Card className="dark:bg-black border-red-200 dark:border-red-900">
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <Waves className="w-4 h-4 text-red-500" />
                        <CardTitle className="text-sm font-medium text-gray-500">Oxigénio</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-3xl font-semibold text-red-600">4.2 <span className="text-base font-normal text-gray-500">mg/L</span></p>
                        <Badge className="mt-3 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 hover:bg-red-100">
                            Crítico
                        </Badge>
                    </CardContent>
                </Card>

                <Card className="dark:bg-black dark:border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <CloudFog className="w-4 h-4 text-violet-500" />
                        <CardTitle className="text-sm font-medium text-gray-500">Turbidez</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-3xl font-semibold">18.5 <span className="text-base font-normal text-gray-500">NTU</span></p>
                        <Badge className="mt-3 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 hover:bg-orange-100">
                            Verificando
                        </Badge>
                    </CardContent>
                </Card>

                <Card className="dark:bg-black dark:border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <FlaskConicalIcon className="w-4 h-4 text-green-500" />
                        <CardTitle className="text-sm font-medium text-gray-500">Amónio</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-3xl font-semibold text-orange-700">0.65 <span className="text-base font-normal text-gray-500">mg/L</span></p>
                        <Badge className="mt-3 bg-orange-200 text-orange-900 hover:bg-orange-200">
                            Atenção
                        </Badge>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-[2] rounded-xl p-4 shadow dark:bg-black dark:border dark:border-gray-800">
                    <AquacultureChart />
                </div>
                <div className="flex-1 space-y-4">
                    <div className="rounded-xl p-4 shadow dark:bg-black dark:border dark:border-gray-800">
                        <SensorStatusPie />
                    </div>
                    <div className="bg-white dark:bg-black dark:border dark:border-gray-800 rounded-xl p-4 shadow">
                        <SensorReadings />
                    </div>
                </div>
            </div>
        </div>
    );
}