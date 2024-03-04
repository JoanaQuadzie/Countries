import Navbar from "../components/navbar";



export default function Countrypage() {
    const url= "https://restcountries.com/v3.1/all"
    console.log(url)

    // function displayCountries(){
    //     let allCountries = fetch(url).then((response) => {
    //         console.log('country', response.json())
    //     })
    // }

    // displayCountries()

    async function displayAllCountries(){
       const countries = await fetch(url)
       console.log("countries", countries.json())
       
    }
    displayAllCountries()
   
    


    return (
        <>

           <h1>My First Country Page</h1>


        </>
    );
}
