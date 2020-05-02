/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import ReactCountryFlag from "react-country-flag";

import { fetchCountries } from "../../api";

const CountryPicker = (props) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const countryNames = await fetchCountries();
      setFetchedCountries(countryNames);
    };
    fetchAPI();
    console.log(fetchedCountries);
  }, []);

  return (
    <Autocomplete
      id="CountryPicker"
      style={{ width: 300 }}
      onChange={(event, value) => {
        if (value === null) {
          console.log("null");
        } else props.handleCountryChange(value.name);
      }}
      // prints the selected value
      options={fetchedCountries}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Enter a Country Name"
          variant="outlined"
          margin="normal"
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.name, inputValue);
        const parts = parse(option.name, matches);

        return (
          <div>
            <ReactCountryFlag
              countryCode={option.iso2}
              key={`${option.iso2}_emoji`}
              svg
              style={{
                width: "2em",
                height: "2em",
              }}
            />{" "}
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
};
export default CountryPicker;
