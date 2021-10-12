import React, { useEffect } from 'react';
import { getResources } from '../../API/getResources';
import logoStarWars from '../../assets/Star-Wars-Logo.png';

export const Home = () => {
	// для тестов API
	useEffect(() => {
		const fetchedData = async () => {
			const fetchedData = await getResources("http://3.122.40.64:4000/api/planets");
			const data = fetchedData.results;
			console.log('----------- - fetchedData1', data);
		};
		fetchedData();
		const fetchedData2 = async () => {
			const fetchedData = await getResources('https://swapi.dev/api/people');
			const data = fetchedData.results;
			console.log('----------- - fetchedData2', data);
		};
		fetchedData2();
	}, []);

	return (
		<div className="wrapper-logo">
			<img className="logo" src={logoStarWars} alt="log-sw" />
		</div>
	);
};
