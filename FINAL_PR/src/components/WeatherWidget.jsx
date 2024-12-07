import React, { useEffect, useState } from "react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Mumbai");

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = "663d71a56c22410a89f191349242911"; // Replace with your actual API key
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch weather data: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log the entire response to check the structure

        if (data && data.current) {
          setWeather({
            temperature: data.current.temp_c,
            description: data.current.condition.text,
            icon: `https:${data.current.condition.icon}`, // Add `https:` to the icon URL for full URLs
          });
        } else {
          console.error("Invalid data structure:", data);
          setWeather(null); // Reset weather state if data is invalid
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeather(null); // Reset weather state on error
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <section className="bg-blue-500 text-white p-4 rounded-md mb-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Weather Update</h2>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 bg-white text-blue-500 rounded-md"
        >
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Pune">Pune</option>
          <option value="Bangalore">Bangalore</option>
        </select>
      </div>
      {weather ? (
        <div className="flex items-center mt-4">
          <img src={weather.icon} alt={weather.description} className="h-16 w-16" />
          <div className="ml-4">
            <p className="text-lg font-semibold">{weather.description}</p>
            <p className="text-xl font-bold">{weather.temperature}°C</p>
          </div>
        </div>
      ) : (
        <p className="mt-4">Loading weather data...</p>
      )}
    </section>
  );
};

export default WeatherWidget;
