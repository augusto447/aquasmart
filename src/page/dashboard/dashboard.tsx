import { ModeToggle } from "@/components/theme/theme-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudFog, Droplet, FlaskConicalIcon, Thermometer, Waves } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import AquacultureChart from "./AquacultureChart";
import SensorStatusPie from "./piechart";


export function Dashboard() {
    return (
        <div className="p-6 space-y-6 w-full min-h-screen">


            <div className="flex justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="text-gray-500">Sistema de monitorização em tempo real</p>
                </div>
                <ModeToggle />
            </div>
            <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <Card className="dark:bg-black dark:border-gray-800  ">
                    <CardHeader className="flex">
                        <Droplet className="w-6 h-6 text-blue-500" />
                        <CardTitle className="text-lg">pH</CardTitle>
                    </CardHeader>
                    <div className="text-center">
                        <CardContent className="text-4xl ">7.28</CardContent>
                        <Badge className="mt-6 px-15 py-3 bg-green-500 text-white font-bold text-lg">Normal</Badge>
                    </div>


                </Card>
                <Card className="dark:bg-black dark:border-gray-800 ">
                    <CardHeader className="flex">
                        <Thermometer className="w-6 h-6 text-red-500" />
                        <CardTitle className="text-lg">Temperatura</CardTitle>


                    </CardHeader>
                    <div className="text-center">
                        <CardContent className="text-4xl ">28.6 <span className="text-lg">°C </span></CardContent>
                        <Badge className="mt-6 px-15 py-3 bg-orange-500 text-white font-bold text-lg">Verificando</Badge>
                    </div>


                </Card>
                <Card className="dark:bg-black dark:border-gray-800 ">
                    <CardHeader className="flex ">
                        <Waves className="w-6 h-6 text-blue-500" />

                        <CardTitle className="text-lg">Oxigénio</CardTitle>


                    </CardHeader>
                    <div className="text-center">
                        <CardContent className="text-4xl ">4.2<span className="text-lg"> mg/L</span></CardContent>
                        <Badge className="mt-6 px-15 py-3 bg-red-500 font-bold text-white text-lg">corrigindo</Badge>
                    </div>


                </Card>
                <Card className="dark:bg-black dark:border-gray-800 ">
                    <CardHeader className="flex">
                        <CloudFog className="w-6 h-6 text-violet-500" />
                        <CardTitle className="text-lg">Turbidez de Água</CardTitle>


                    </CardHeader>
                    <div className="text-center">
                        <CardContent className="text-4xl ">18.5 <span className="text-lg">NTU </span></CardContent>
                        <Badge className="mt-6 px-15 py-3 bg-orange-500 text-white font-bold text-lg">Verificando</Badge>
                    </div>


                </Card>
                <Card className="dark:bg-black dark:border-gray-800 ">
                    <CardHeader className="flex">
                        <FlaskConicalIcon className="w-6 h-6 text-green-500" />
                        <CardTitle className="text-lg">Amónio</CardTitle>


                    </CardHeader>
                    <div className="text-center">
                        <CardContent className="text-4xl">0.65 <span className="text-lg">mg/L</span></CardContent>
                        <Badge className="mt-6 px-15 py-3 bg-orange-800 text-white font-bold text-lg">Atênção</Badge>
                    </div>


                </Card>







            </div>

            <div className="flex flex-col lg:flex-row gap-6 mt-12">


                <div className="flex-2 rounded-xl p-4 shadow dark:bg-black dark:border-gray-800 ">
                    <AquacultureChart />
                </div>


                <div className="flex-1 space-y-4">

                    <div className=" rounded-xl p-4 shadow dark:bg-black dark:border-gray-800 ">
                        <SensorStatusPie />
                    </div>

                    <div className="bg-white dark:bg-black dark:border-gray-800 rounded-xl p-4 shadow">
                        <h3 className="font-semibold mb-2">Resumo do Sistema</h3>
                        <p className="text-sm text-gray-500">
                            Monitorização em tempo real dos parâmetros da água.
                        </p>
                    </div>

                </div>

            </div>

        </div>











    );
}