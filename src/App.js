import React, { useEffect, useState } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';

import About from './Components/Pages/About/About';
import World from './Components/Pages/World/World';
import USA from './Components/Pages/USA/USA';

import styles from './App.module.css';

import { fetchData, fetchDailyData } from './api';

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
    <Switch>
      <>
        <Redirect to="/" />
        <Header />
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <div className={styles.container}>
                <h1>COVID-19 TRACKER</h1>
                <Cards data={data} />
                <CountryPicker handleCountryChange={handleCountryChange} />
                <Chart data={data} country={country} />
              </div>
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/world" component={World} />
        <Route path="/usa" component={USA} />
      </>
    </Switch>
  );
}

export default withRouter(App);
