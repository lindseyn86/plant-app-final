import React from 'react';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

export default function AddPlant() {

	const API_URL = 'https://666c475449dbc5d7145d6d4b.mockapi.io/plants'
	const [plants, setPlants] = useState([{}])
  
	const[newName, setNewName] = useState('')
	const[newLocation, setNewLocation] = useState('')
	const[newSpeciesName, setNewSpeciesName] = useState('')
	const[newSoilType, setNewSoilType] = useState('')

	function newPlant(e) {
		e.preventDefault()
	
		fetch(API_URL, {
		  method: 'POST',
		  headers: {"Content-Type": "application/json"},
		  body: JSON.stringify({
			name: newName,
			location: newLocation,
			speciesName: newSpeciesName,
			soilType: newSoilType,
		  })
		})
	   }
	
	
		return       <div className="form">
        <form>
          <h3>
            Add a New Plant
          </h3>
          <label>Plant Name</label>
          <input onChange={(e) => setNewName(e.target.value)}placeholder="Plant Name"></input>
          <label>Plant Location</label>
          <input onChange={(e) => setNewLocation(e.target.value)}placeholder="Plant Location"></input>
          <label>Plant Species Name</label>
          <input onChange={(e) => setNewSpeciesName(e.target.value)}placeholder="Plant Species Name"></input>
          <label>Plant Soil Type</label>
          <input onChange={(e) => setNewSoilType(e.target.value)}placeholder="Plant Soil Type"></input>
          <button className="btn btn-green" onClick={(e) => newPlant(e)}>Submit Plant</button>
        </form>
      </div>;
	
}