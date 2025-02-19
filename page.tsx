"use client"

import { useState } from "react"
import { WeatherDisplay } from "@/components/weather-display"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Sample data for the last 7 days
const weatherData = [
  { date: "2025-02-18", temperature: 22, condition: "Sunny", humidity: 60, windSpeed: 10 },
  { date: "2025-02-17", temperature: 20, condition: "Cloudy", humidity: 65, windSpeed: 12 },
  { date: "2025-02-16", temperature: 18, condition: "Rainy", humidity: 75, windSpeed: 15 },
  { date: "2025-02-15", temperature: 19, condition: "Cloudy", humidity: 70, windSpeed: 11 },
  { date: "2025-02-14", temperature: 21, condition: "Sunny", humidity: 55, windSpeed: 8 },
  { date: "2025-02-13", temperature: 17, condition: "Rainy", humidity: 80, windSpeed: 18 },
  { date: "2025-02-12", temperature: 16, condition: "Cloudy", humidity: 72, windSpeed: 14 },
]

export default function WeatherApp() {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">7-Day Weather Forecast</h1>
        <div className="mb-8">
          <WeatherDisplay data={weatherData[currentIndex]} />
        </div>
        <Carousel className="w-full max-w-sm mx-auto">
          <CarouselContent>
            {weatherData.map((data, index) => (
              <CarouselItem key={data.date} className="basis-full">
                <div className="p-1">
                  <Button
                    variant={index === currentIndex ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setCurrentIndex(index)}
                  >
                    {new Date(data.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

