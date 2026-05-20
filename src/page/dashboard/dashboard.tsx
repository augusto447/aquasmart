import { ModeToggle } from "@/components/theme/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    CloudFog,
    Droplet,
    FlaskConicalIcon,
    Thermometer,
    Waves
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AquacultureChart from "./AquacultureChart";
import SensorStatusPie from "./SensorStatusPie";
import SensorReadings from "./SensorReadings";

export function Dashboard() {
    return (
        <div className="p-4 sm:p-6 space-y-5 w-full h-screen">


            <div className="flex items-center justify-between sm:flex-row sm:justify-between sm:items-start">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold">
                        Dashboard
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500">
                        Monitorização em tempo real · Atualizado agora
                    </p>
                </div>

                <ModeToggle />
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">


                <Card className="dark:bg-black dark:border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <Droplet className="w-4 h-4 text-blue-500" />
                        <CardTitle className="text-xs sm:text-sm text-gray-500">
                            pH
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-2xl sm:text-3xl font-semibold">
                            7.28
                        </p>
                        <Badge className="mt-2 sm:mt-3 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            Normal
                        </Badge>
                    </CardContent>
                </Card>


                <Card className="dark:bg-black dark:border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <Thermometer className="w-4 h-4 text-red-500" />
                        <CardTitle className="text-xs sm:text-sm text-gray-500">
                            Temperatura
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-2xl sm:text-3xl font-semibold">
                            28.6{" "}
                            <span className="text-sm text-gray-500">°C</span>
                        </p>
                        <Badge className="mt-2 sm:mt-3 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                            Verificando
                        </Badge>
                    </CardContent>
                </Card>


                <Card className="dark:bg-black border-red-200 dark:border-red-900">
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <Waves className="w-4 h-4 text-red-500" />
                        <CardTitle className="text-xs sm:text-sm text-gray-500">
                            Oxigénio
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-2xl sm:text-3xl font-semibold text-red-600">
                            4.2{" "}
                            <span className="text-sm text-gray-500">mg/L</span>
                        </p>
                        <Badge className="mt-2 sm:mt-3 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                            Crítico
                        </Badge>
                    </CardContent>
                </Card>


                <Card className="dark:bg-black dark:border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <CloudFog className="w-4 h-4 text-violet-500" />
                        <CardTitle className="text-xs sm:text-sm text-gray-500">
                            Turbidez
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-2xl sm:text-3xl font-semibold">
                            18.5{" "}
                            <span className="text-sm text-gray-500">NTU</span>
                        </p>
                        <Badge className="mt-2 sm:mt-3 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                            Verificando
                        </Badge>
                    </CardContent>
                </Card>

                <Card className="dark:bg-black dark:border-gray-800">
                    <CardHeader className="flex flex-row items-center gap-2 pb-2">
                        <FlaskConicalIcon className="w-4 h-4 text-green-500" />
                        <CardTitle className="text-xs sm:text-sm text-gray-500">
                            Amónio
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-2xl sm:text-3xl font-semibold text-orange-700">
                            0.65{" "}
                            <span className="text-sm text-gray-500">mg/L</span>
                        </p>
                        <Badge className="mt-2 sm:mt-3 bg-orange-200 text-orange-900">
                            Atenção
                        </Badge>
                    </CardContent>
                </Card>
            </div>


            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">


                <div className="flex-1 lg:flex-[2] rounded-xl p-3 sm:p-4 shadow  dark:border dark:border-gray-800">
                    <AquacultureChart />
                </div>


                <div className="flex-1 space-y-4">

                    <div className="rounded-xl p-3 sm:p-4 shadow dark:bg-black dark:border dark:border-gray-800">
                        <SensorStatusPie />
                    </div>

                    <div className="rounded-xl p-3 sm:p-4 shadow dark:bg-black dark:border dark:border-gray-800">
                        <SensorReadings />
                    </div>

                </div>
            </div>
        </div>
    );
}