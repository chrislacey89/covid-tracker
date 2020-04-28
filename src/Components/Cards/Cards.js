import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';


import styles from './Cards.module.css';


const Cards = (props) => {
	if (!props.data.confirmed) {
		return 'Loading...';
	  }

	console.log(props.data)
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
			<Grid item xs={12} md={3} >
					<Card>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Infected
							</Typography>
							<Typography variant="h5" component="h2">
								<CountUp start={0} end={props.data.confirmed.value} duration={1.5} separator="," />
							</Typography>
							<Typography color="textSecondary">
								{new Date(props.data.lastUpdate).toDateString()}
							</Typography>
							<Typography variant="body2" component="p">
								Number of active cases of COVID-19.
							</Typography>
						</CardContent>
					</Card>
				</Grid>				
				<Grid item xs={12} md={3} >
					<Card>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Recoveries
							</Typography>
							<Typography variant="h5" component="h2">
							<CountUp start={0} end={props.data.recovered.value} duration={1.5} separator="," />
							</Typography>
							<Typography color="textSecondary"> 
								{new Date(props.data.lastUpdate).toDateString()}
							</Typography>
							<Typography variant="body2" component="p">
								Number of recovered cases of COVID-19.
							</Typography>
						</CardContent>
					</Card>
				</Grid>				
				<Grid item xs={12} md={3} >
					<Card>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Deaths
							</Typography>
							<Typography variant="h5" component="h2">
								<CountUp start={0} end={props.data.deaths.value} duration={1.5} separator="," />
							</Typography>
							<Typography color="textSecondary"> 
								{new Date(props.data.lastUpdate).toDateString()}
							</Typography>
							<Typography variant="body2" component="p">
								Number of active deaths caused by COVID-19.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>

	)
};

export default Cards;
