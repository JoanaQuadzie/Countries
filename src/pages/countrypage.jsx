import Navbar from "../components/navbar";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";



export default function Countrypage() {
    const [country, setCountry] = useState(null)


    const Params = useParams()
    console.log('Params', Params)
    const url = `https://restcountries.com/v3.1/name/${Params.countryName}`


useEffect(() => {
    async function displayOneCountry() {
        try {
            const countries = await axios.get(url)
            const countriesBox = countries.data;
            console.log('countriesBox', countriesBox[0]);

            setCountry(countriesBox[0])


        } catch (error) {
            console.log(error)
        }

    }
    displayOneCountry()

}, [Params.countryName])

if (!country) {
    return <div>Loading...</div>
}
// console.log('country', country)


return (
    <>
        <Navbar />
        <div>
            <hi>Know more here</hi>
            <h1>{country.name.common}</h1>
            <h2>{country.name.official}</h2>
            <img src={country.flags.png} alt={country.flags.alt} />
            <img src={country.coatOfArms.png} alt={country.flags.alt} />
        </div>
    </>
);
}


