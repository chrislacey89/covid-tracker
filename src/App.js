import React, { useEffect, useState } from "react";

import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Chart/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";

import styles from "./App.module.css";

import { fetchData, fetchDailyData } from "./api";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState();

  useEffect(() => {
    // Create an scoped async function in the hook
    async function initData() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    // Execute the created function directly
    initData();
  }, []);

  // App logic
  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <h1>COVID-19 TRACKER</h1>
      <Cards data={data}></Cards>
      <CountryPicker handleCountryChange={handleCountryChange}></CountryPicker>
      <Chart data={data} country={country}></Chart>
    </div>
  );
}

export default App;
