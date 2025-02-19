import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Cloud, CloudRain, Thermometer } from "lucide-react"

interface WeatherData {
  date: string
  temperature: number
  condition: string
  humidity: number
  windSpeed: number
}

interface WeatherDisplayProps {
  data: WeatherData
}

export function WeatherDisplay({ data }: WeatherDisplayProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="w-12 h-12 text-yellow-500" />
      case "cloudy":
        return <Cloud className="w-12 h-12 text-gray-500" />
      case "rainy":
        return <CloudRain className="w-12 h-12 text-blue-500" />
      default:
        return <Thermometer className="w-12 h-12 text-red-500" />
    }
  }

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{data.date}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl font-bold">{data.temperature}°C</div>
          {getWeatherIcon(data.condition)}
        </div>
        <div className="space-y-2">
          <p className="text-lg capitalize">{data.condition}</p>
          <p>Humidity: {data.humidity}%</p>
          <p>Wind Speed: {data.windSpeed} km/h</p>
        </div>
      </CardContent>
    </Card>
  )
}

