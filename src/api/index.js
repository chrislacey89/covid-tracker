import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);

    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const res = await axios.get(`${url}/countries`);
    const countries = res.data.countries;
    console.log(countries);
    return countries;
  } catch (error) {
    return error;
  }
};
