import axios from "axios";
import { useState } from "react";
import { Weather } from "./Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const key = "f25927a907421a52a3c303db74df6297";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col space-y-6 justify-center items-center relative ">
        <h1 className="text-center text-6xl font-bold">Weather App</h1>
        <div className="text-center p-4">
          <input
            value={location}
            type="text"
            placeholder="Enter Location"
            className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none shadow-md bg-white-600/100"
            onChange={(e) =>setLocation(e.target.value)}
            onKeyDownCapture={searchLocation}
          />
        </div>
        <Weather weatherData={data}/>
      </div>
    </>
  );
}

export default App;
