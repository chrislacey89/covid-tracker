import React, { useEffect } from 'react';

import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';

import styles from './App.module.css';

import { fetchData } from './api';

function App() {
	useEffect(() => {
		// Create an scoped async function in the hook
		async function anyNameFunction() {
			const data = await fetchData();
			console.log(data);
		}
		// Execute the created function directly
		anyNameFunction();
	}, []);

	return (
		<div className={styles.container}>
			<Cards></Cards>
			<CountryPicker></CountryPicker>
			<Chart></Chart>
		</div>
	);
}

export default App;
