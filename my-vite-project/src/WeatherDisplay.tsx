import React from 'react';

interface WeatherDisplayProps {
  weather: { id: string; location: string; time: string };
  onDelete: (id: string) => void;
  onSave: (weather: { id: string; location: string; time: string }) => void;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather, onDelete, onSave }) => {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Weather Information</h2>
      <p>
        <strong>Location:</strong> {weather.location}
      </p>
      <p>
        <strong>Time:</strong> {weather.time}
      </p>
      <div className="mt-4">
        <button
          className="bg-red-500 text-white px-4 py-2 mr-2"
          onClick={() => onDelete(weather.id)}
        >
          Delete
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={() => onSave(weather)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default WeatherDisplay;
