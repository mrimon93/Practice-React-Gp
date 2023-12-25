import React, { useState } from 'react';
import axios from 'axios';

interface WeatherFormProps {
  onSubmit: (data: { location: string; time: string }) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onSubmit }) => {
  const [location, setLocation] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const handleFocus = () => {
    // Add any focus-related logic here
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location},se&appid=1bd396baa97fcc23bb354901f4df7730&units=metric`
      );

      const weatherData = {
        location: response.data.name,
        time: new Date().toLocaleTimeString(), // You can replace this with the actual time from the API response
      };

      onSubmit(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black p-4">
      <label className="text-white">
        Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onFocus={handleFocus}
          className="focus:outline-none focus:ring focus:border-blue-300 bg-gray-800 text-white p-2 mt-1 w-full"
        />
      </label>
      <label className="text-white mt-2">
        Time:
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onFocus={handleFocus}
          className="focus:outline-none focus:ring focus:border-blue-300 bg-gray-800 text-white p-2 mt-1 w-full"
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
        Submit
      </button>
    </form>
  );
};

export default WeatherForm;
