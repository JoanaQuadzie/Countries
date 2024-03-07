import Navbar from "../components/navbar";
import axios from "axios";
import {useState, useEffect} from "react";
import '../App.css'
import { Link } from "react-router-dom";




export default function Countriespage() {
    const [country, setCountry] = useState([]);

    const url = "https://restcountries.com/v3.1/all"
    console.log(url)

    useEffect (() => {
        async function displayAllCountries() {
            try {
            const countries = await axios.get(url)
            const countriesBox = countries.data
            setCountry(countriesBox)

            } catch (error) {
                console.log(error)
            }
            
        }
    
        displayAllCountries()
    
    
        
    
    }, [])


    console.log('country', country)
    

  





    return (
        <>
            <h1>My First Country Page</h1>
            <Navbar />
      <div className="outer-div">
      {country.slice(0, 10).map((item) => (
            <div className="inner-div">
                <li>{item.name.common}</li>
                <li>{item.name.official}</li>
                <img src={item.flags.png} alt={item.flags.alt} className="flag" />
                <button className="countryButton">
                <Link to= {`/Country/${item.name.common}`}>Learn More</Link></button>
            </div>
        
        ))}
        
        </div>
        </>


    );
}
