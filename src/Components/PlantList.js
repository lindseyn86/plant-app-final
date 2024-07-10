import React, { useState, useEffect } from 'react';

function PlantList() {
	const [plants, setPlants] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://666c475449dbc5d7145d6d4b.mockapi.io/plants');
			const jsonData = await response.json();
			setPlants(jsonData);
		};

		fetchData();
	}, []);

	function deletePlant(id) {
		const API_URL = 'https://666c475449dbc5d7145d6d4b.mockapi.io/plants'
		fetch(`${API_URL}/${id}`,{
		method: 'DELETE'
	  }).then(() => getPlants())
	};

	function getPlants() {
		const API_URL = 'https://666c475449dbc5d7145d6d4b.mockapi.io/plants'
		fetch(API_URL)
		.then(data => data.json())
		.then(data => setPlants(data))
	  }
	  useEffect(() => {
		getPlants()
	  }, [])

	return (
		<div>
			{plants.map(plant => (
				<div key={plant.id} className="plant-info row">
					<div className="plant-details">
						<h3>{plant.name} Information</h3>
						<div className="row">
							<div className="col-2">
								<span><label>Plant Name:</label>{plant.name}</span>
							</div>
							<div className="col-2">
								<span><label>Species Name:</label> {plant.speciesName}</span>
							</div>
							<div className="col-2">
								<span><label>Location:</label> {plant.location}</span>
							</div>
							<div class="col-2">
								<span><label>Soil Type:</label> {plant.soilType}</span>
							</div>
							<div className="col-2 delete">
								<button className="btn btn-danger col-2" onClick={() => deletePlant(plant.id)}>Delete</button>    
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
export default PlantList;