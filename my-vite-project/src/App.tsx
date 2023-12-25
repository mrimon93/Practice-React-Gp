import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

const App: React.FC = () => {
  const [weatherList, setWeatherList] = useState<
    { id: string; location: string; time: string }[]
  >([]);

  const handleWeatherSubmit = (data: { location: string; time: string }) => {
    const newWeather = {
      id: Date.now().toString(), // Using timestamp as a unique ID
      location: data.location,
      time: data.time,
    };

    setWeatherList((prevList) => [...prevList, newWeather]);
  };

  const handleWeatherDelete = (id: string) => {
    setWeatherList((prevList) => prevList.filter((weather) => weather.id !== id));
  };

  const handleWeatherSave = (weather: { id: string; location: string; time: string }) => {
    // You can save to local storage or perform any other action here
    console.log(`Weather saved: ${JSON.stringify(weather)}`);
  };

  return (
    <div className="container mx-auto p-4 bg-black min-h-screen">
      <WeatherForm onSubmit={handleWeatherSubmit} />
      {weatherList.map((weather) => (
        <WeatherDisplay
          key={weather.id}
          weather={weather}
          onDelete={handleWeatherDelete}
          onSave={handleWeatherSave}
        />
      ))}
    </div>
  );
};

export default App;
