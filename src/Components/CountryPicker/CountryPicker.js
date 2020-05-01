import React, {useEffect, useState }from 'react';
import { Select, FormControl, MenuItem } from '@material-ui/core';

import { fetchCountries } from '../../api'



const CountryPicker = () => {

const [fetchedCountries, setFetchedCountries ]= useState([]) 

	useEffect(()=> {
		const fetchAPI = async () => {
		const countryNames = await fetchCountries()
		setFetchedCountries(countryNames)
		}
		fetchAPI()
		console.log(fetchedCountries)
	}, [setFetchedCountries])
	return (
		<FormControl>
			<Select>
				<MenuItem value={10}>Ten</MenuItem>
			</Select>
		</FormControl>
	)
};

export default CountryPicker;
